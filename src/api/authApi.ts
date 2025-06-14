
import type { IStoreUser, IUserLogin } from '@/models/IUser';
import axios from 'axios';
import { HOST } from './config';
import type { IBaseResponse } from '@/models/IBase';


const api = HOST


export const login = async (data: IUserLogin): Promise<IBaseResponse<IStoreUser>> => {
    const response = await axios.post(`${api}auth/login`, data);
    return response.data as IBaseResponse<IStoreUser>;
};

export const logout = async (): Promise<void> => {
    await axios.post(`auth/logout`);
};