import axios from 'axios';
import { HOST, MAX_TIME_OUT, STATUS } from './config';
import { store } from '@/store';

const Axios = axios.create({
    baseURL: HOST,
    timeout: MAX_TIME_OUT,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
    },
    withCredentials: true,
});

const isStatus = (code: number, statusObj: Record<string, number>) => {
    return Object.values(statusObj).includes(code);
};

Axios.interceptors.request.use(
    (config) => {
        const token = store.getState().userSlice.accesstoken;
        console.log("🔥 Token hiện tại:", token); // ✅ Tạm bật để kiểm tra token

        const shouldSendToken = !(config?.headers && config.headers._auth === false);

        if (shouldSendToken && token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        if (config?.headers?._auth !== undefined) {
            delete config.headers._auth;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

Axios.interceptors.response.use(
    (response) => {
        const { status, data } = response;

        if (isStatus(status, STATUS.success)) {
            return data;
        }

        if (isStatus(status, STATUS.error)) {
            return Promise.reject({
                status,
                message: data?.message || 'Request failed',
                data,
            });
        }

        return Promise.reject({
            status,
            message: 'Unknown status',
            data,
        });
    },
    (error) => {
        const res = error.response;

        return Promise.reject({
            status: res?.status || 500,
            message: res?.data?.message || error.message || 'Server error',
            data: res?.data || null,
        });
    }
);

export default Axios;
