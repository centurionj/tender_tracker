export interface AuthRequest {
    email: string
    password: string
}

export interface AuthResponse {
    refresh: string
    access: string
    id: string
    email: string
    first_name: string
    last_name: string
}
