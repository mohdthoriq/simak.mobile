import { create } from "zustand";
import { AuthMe, LoginResponse, authPurpose } from "../api/domain/auth";

interface AuthFlow {
  email: string
  purpose: authPurpose
}

interface AuthState {
    user: AuthMe | null
    token: string | null
    refreshToken: string | null
    isAuthenticated: boolean
    authFlow: AuthFlow | null

    setAuth: (data: LoginResponse) => void
    setAuthFlow: (data: AuthFlow | null) => void
    updateProfile: (data: Partial<AuthMe>) => void
    logout: () => void
}

export const useAuthStore = create<AuthState>((set) =>({
  user: null,
  token: null,
  refreshToken: null,
  isAuthenticated: false,
  authFlow: null,
  setAuth: (data) => set({
    user: {
      fullName: data.fullName,
      email: data.email,
      role: data.role,
      phone: data.phone
    },
    token: data.token,
    refreshToken: data.refreshToken,
    isAuthenticated: true
  }),
  setAuthFlow: (data) => set({ authFlow: data }),
  updateProfile: (data) => set((state) => ({
    user: state.user ? { ...state.user, ...data } : null
  })),
  logout: () => set({
    user: null,
    token: null,
    refreshToken: null,
    isAuthenticated: false,
    authFlow: null
  }),
}))