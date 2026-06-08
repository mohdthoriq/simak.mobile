import axios from "axios";
import { useAuthStore } from "../store/auth.store";

// Fallback to production URL in React Native environment since import.meta.env might not be defined
const API_URL = typeof import.meta !== "undefined" && import.meta.env?.BASE_API_URL
    ? import.meta.env.BASE_API_URL
    : "https://simakweb-be.onrender.com/api/v1/";

export const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use(
    (config) => {
        const token = useAuthStore.getState().token;
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor untuk menangani error respons (misal: token expired)
apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        // Nanti di sini bisa ditambahkan logika refresh token
        // jika backend mengembalikan status 401 (Unauthorized)
        if (error.response?.status === 401) {
            // useAuthStore.getState().logout();
        }
        return Promise.reject(error);
    }
);
