export type role = 'MENTOR' | 'SANTRI' | 'WALI_SANTRI' | 'ADMIN'

export enum authPurpose {
    Login = 'Login',
    Register = 'Register'
}

export interface RegisterResponse {
    fullName: string;
    email: string;
    password: string;
    role: role;
    phone: string;
}

export interface AuthMe {
    fullName: string;
    email: string;
    role: role;
    phone: string;
}

export interface LoginResponse extends AuthMe {
    token: string;
    refreshToken: string;
}