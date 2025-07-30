

export interface IUser {
    id: number;
    username: string;
    password: string;
    refreshtoken: string;
    created_at?: Date;
    updated_at?: Date;
}

export interface IStoreUser<T = IUser> {
    accesstoken: string;
    user: T;
}

export interface IUserLogin {
    username?: string;
    password?: string;
}