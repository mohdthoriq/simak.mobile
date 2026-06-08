import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/AuthStack';
import { useVerifyOtpMutation, useResendOtpMutation } from '../../services/otp.service';
import Button from '../../components/ui/button';

type VerifyOTPScreenRouteProp = RouteProp<AuthStackParamList, 'VerifyOTP'>;

export default function VerifyOTPScreen() {
  const route = useRoute<VerifyOTPScreenRouteProp>();
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const { email, purpose } = route.params;

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [countdown, setCountdown] = useState(60);
  const inputsRef = useRef<Array<TextInput | null>>([]);

  const verifyOtpMutation = useVerifyOtpMutation();
  const resendOtpMutation = useResendOtpMutation();

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    // Take only the last character entered
    newOtp[index] = text.slice(-1);
    setOtp(newOtp);

    // Auto focus next input
    if (text && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const otpCode = otp.join('');
    if (otpCode.length < 6) {
      return;
    }
    verifyOtpMutation.mutate({
      email,
      otpCode,
      purpose: purpose === 'Register' ? 'Register' : 'Login',
    });
  };

  const handleResend = () => {
    if (countdown > 0) return;
    resendOtpMutation.mutate(
      {
        email,
        purpose: purpose === 'Register' ? 'Register' : 'Login',
      },
      {
        onSuccess: () => {
          setCountdown(60);
        },
      }
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-slate-50"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="justify-center px-6 py-12">
        <View className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 items-center">
          {/* Icon Header */}
          <View className="w-16 h-16 bg-blue-50 rounded-2xl items-center justify-center mb-6">
            <Text className="text-3xl">🛡️</Text>
          </View>

          <Text className="text-2xl font-extrabold text-slate-800 text-center">Verifikasi OTP</Text>
          <Text className="text-slate-500 text-sm text-center mt-2 px-4 leading-relaxed">
            Masukkan 6 digit kode verifikasi yang telah kami kirimkan ke email:
          </Text>
          <Text className="text-slate-800 font-semibold text-sm text-center mt-1 bg-slate-100 px-3 py-1 rounded-full">
            {email}
          </Text>

          {/* OTP Input Fields */}
          <View className="flex-row justify-between w-full gap-2 my-8">
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(el) => (inputsRef.current[index] = el)}
                value={digit}
                onChangeText={(text) => handleOtpChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                keyboardType="number-pad"
                maxLength={1}
                className="w-12 h-14 bg-slate-50 border border-slate-200 rounded-xl text-center text-xl font-bold text-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            ))}
          </View>

          {/* Submit Button */}
          <Button
            variant="primary"
            size="lg"
            onPress={handleVerify}
            disabled={verifyOtpMutation.isPending || otp.join('').length < 6}
            className="w-full bg-slate-900 rounded-xl h-12 mb-6"
            textClassName="text-white font-bold"
          >
            {verifyOtpMutation.isPending ? 'Memverifikasi...' : 'Verifikasi'}
          </Button>

          {/* Resend countdown */}
          <View className="flex-row items-center justify-center">
            <Text className="text-slate-500 text-sm">Tidak menerima kode? </Text>
            {countdown > 0 ? (
              <Text className="text-slate-400 font-semibold text-sm">
                Kirim ulang ({countdown}s)
              </Text>
            ) : (
              <Pressable onPress={handleResend} disabled={resendOtpMutation.isPending}>
                <Text className="text-blue-600 font-bold text-sm">Kirim ulang</Text>
              </Pressable>
            )}
          </View>

          {/* Back button */}
          <Pressable onPress={() => navigation.goBack()} className="mt-8">
            <Text className="text-slate-400 text-sm font-semibold">Kembali</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
