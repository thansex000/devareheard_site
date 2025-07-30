
import type { IStoreUser, IUserLogin } from '@/models/IUser';
import axios from 'axios';
import { HOST } from './config';
import type { IBaseResponse } from '@/models/IBase';
import Axios from './axios';

const API = HOST


export const login = async (data: IUserLogin): Promise<IBaseResponse<IStoreUser>> => {
    const response = await Axios.post(`${API}auth/login`, data
    );
    return response.data as IBaseResponse<IStoreUser>;
};

export const logout = async (): Promise<void> => {
    await axios.post(`auth/logout`);
};