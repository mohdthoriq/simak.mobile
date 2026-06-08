import { useMutation } from "@tanstack/react-query";
import { ToastAndroid } from "react-native";
import { apiClient } from "../api/api-client";
import { useAuthStore } from "../store/auth.store";
import { apiResoponse } from "../utils/response";
import { LoginResponse, authPurpose } from "../api/domain/auth";

interface VerifyOtpPayload {
  email: string;
  otpCode: string;
  purpose: authPurpose;
}

interface ResendOtpPayload {
  email: string;
  purpose: authPurpose;
}

export function useVerifyOtpMutation() {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: async (payload: VerifyOtpPayload) => {
      const response = await apiClient.post<apiResoponse<LoginResponse>>("/auth/verify-otp", payload);
      return response.data;
    },
    onMutate: () => {
      ToastAndroid.showWithGravityAndOffset("Memverifikasi kode OTP...", ToastAndroid.SHORT, ToastAndroid.TOP, 0, 50);
    },
    onSuccess: (response) => {
      ToastAndroid.showWithGravityAndOffset("Verifikasi berhasil!", ToastAndroid.SHORT, ToastAndroid.TOP, 0, 50);
      if (response.data && response.data.token) {
        setAuth(response.data);
      }
    },
    onError: (error: any) => {
      const errorMsg = error.response?.data?.message || error.message || "Kode OTP salah atau kedaluwarsa";
      ToastAndroid.showWithGravityAndOffset(errorMsg, ToastAndroid.LONG, ToastAndroid.TOP, 0, 50);
    },
  });
}

export function useResendOtpMutation() {
  return useMutation({
    mutationFn: async (payload: ResendOtpPayload) => {
      const response = await apiClient.post<apiResoponse<{ message: string }>>("/auth/resend-otp", payload);
      return response.data;
    },
    onMutate: () => {
      ToastAndroid.showWithGravityAndOffset("Mengirim ulang kode OTP...", ToastAndroid.SHORT, ToastAndroid.TOP, 0, 50);
    },
    onSuccess: () => {
      ToastAndroid.showWithGravityAndOffset("Kode OTP berhasil dikirim ulang", ToastAndroid.SHORT, ToastAndroid.TOP, 0, 50);
    },
    onError: (error: any) => {
      const errorMsg = error.response?.data?.message || error.message || "Gagal mengirim ulang OTP";
      ToastAndroid.showWithGravityAndOffset(errorMsg, ToastAndroid.LONG, ToastAndroid.TOP, 0, 50);
    },
  });
}
