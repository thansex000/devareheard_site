

export interface IUser {
    id: string;
    username: string;
    email: string;
    createdAt: Date;
    updatedAt?: Date;
    isActive: boolean;
}

export interface IStoreUser<T = IUser> {
    accesstoken: string;
    refreshToken: string;
    user: T;
}
