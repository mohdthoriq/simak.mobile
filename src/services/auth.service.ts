import { useQuery } from "@tanstack/react-query"
import { apiClient } from "../api/api-client";
import { authPurpose, LoginResponse, RegisterResponse } from "../api/domain/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, RegisterSchemaType } from "../types/auth/register-schema";
import { useNavigation } from "@react-navigation/native";
import { apiResponse } from "../utils/response";
import { useMutation } from "@tanstack/react-query";
import { ToastAndroid } from "react-native";
import { useAuthStore } from "../store/auth.store";
import { AuthStackParamList } from "../navigation/AuthStack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LoginSchema, LoginSchemaType } from "../types/auth/login-schema";

export function useRegisterForm() {
    const form = useForm<RegisterSchemaType>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            fullName: "",
            phone: "",
            role: "SANTRI",
            password: ""
        }
    })
    const registerMutation = useRegisterMutation()
    function onSubmit(data: RegisterSchemaType) {
        registerMutation.mutate(data)
    }
    return {
        form,
        isLoading: registerMutation.isPending,
        onSubmit
    }
}

export const useRegisterMutation = () => {
    const navigate = useNavigation<NativeStackNavigationProp<AuthStackParamList>>()
    const setAuthFlow = useAuthStore((state) => state.setAuthFlow)

    return useMutation({
        mutationFn: async (data: RegisterSchemaType) => {
            const response = await apiClient.post<apiResponse<RegisterResponse>>("/auth/register", data)
            return response.data
        },
        onMutate: () => {
            ToastAndroid.showWithGravityAndOffset("Pendaftaran sedang diproses", ToastAndroid.SHORT, ToastAndroid.TOP, 0, 50)
        },
        onSuccess: (_, variables) => {
            ToastAndroid.showWithGravityAndOffset("Pendaftaran berhasil", ToastAndroid.SHORT, ToastAndroid.TOP, 0, 50)
            setAuthFlow({
                email: variables.email,
                purpose: authPurpose.Register
            })

            navigate.navigate("VerifyOTP", {
                email: variables.email,
                purpose: authPurpose.Register
            })
        },
        onError: (error) => {
            ToastAndroid.showWithGravityAndOffset("Pendaftaran gagal: " + error.message, ToastAndroid.SHORT, ToastAndroid.TOP, 0, 50)
        }
    })
}

export const register = async () => {
    return useQuery({
        queryKey: ["register"],
        queryFn: async () => {
            const response = await apiClient.post<RegisterResponse>("/auth/register")
            return response.data
        }
    })
}

export function useLoginForm() {
    const form = useForm<LoginSchemaType>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })
    const loginMutation = useLoginMutation()
    function onSubmit(data: LoginSchemaType) {
        loginMutation.mutate(data)
    }
    return {
        form,
        isLoading: loginMutation.isPending,
        onSubmit
    }
}

export const useLoginMutation = () => {
    const navigate = useNavigation<NativeStackNavigationProp<AuthStackParamList>>()
    const setAuth = useAuthStore((state) => state.setAuth)

    return useMutation({
        mutationFn: async (data: LoginSchemaType) => {
            const response = await apiClient.post<apiResponse<LoginResponse>>("/auth/login", data)
            return response.data
        },
        onMutate: () => {
            ToastAndroid.showWithGravityAndOffset("Login sedang diproses", ToastAndroid.SHORT, ToastAndroid.TOP, 0, 50)
        },
        onSuccess: async (data) => {
            const loginData = data?.data; 
            if (!loginData) return;

            try {
                // 1. Tarik data profil detail dari /auth/me
                const response = await apiClient.get<apiResponse<LoginResponse>>('/auth/me');
                const userData = response.data?.data;

            // 2. Merge langsung tanpa drama filter menu/permission
            const mergedData = {
                ...loginData,
                ...userData,
            };

            // 3. Simpan ke Zustand Store
            setAuth(mergedData);

            // 4. Tentukan subject untuk Toast sapaan
            const greetingsSubject = userData?.fullName || loginData.fullName || loginData.email;
            ToastAndroid.showWithGravityAndOffset(`Selamat datang kembali, ${greetingsSubject}!`, ToastAndroid.SHORT, ToastAndroid.TOP, 0, 50);

            // 5. Kondisional navigasi murni berdasarkan string role
            if (userData?.role === 'ADMIN') {
                navigate.navigate("AdminDashboard");
            } else {
                navigate.navigate("MainTabs");
            }

        } catch (error) {
            setAuth(loginData);
            ToastAndroid.showWithGravityAndOffset('Login berhasil!', ToastAndroid.SHORT, ToastAndroid.TOP, 0, 50);
        }
    },
    onError: (error) => {
            ToastAndroid.showWithGravityAndOffset("Login gagal: " + error.message, ToastAndroid.SHORT, ToastAndroid.TOP, 0, 50)
        }
    })
}

export const login = async () => {
    return useQuery({
        queryKey: ["login"],
        queryFn: async () => {
            const response = await apiClient.post<LoginResponse>("/auth/login")
            return response.data
        }
    })
}