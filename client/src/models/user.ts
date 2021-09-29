export interface IUser {
    _id: string,
    email: string,
    name: string,
    accessToken: string,
    refreshToken: string,
    createdAt: Date | null,
    updatedAt: Date | null,
}

export interface ILogin {
    email: string,
    password: string
}