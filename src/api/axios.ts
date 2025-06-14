import axios from 'axios';
import { HOST, MAX_TIME_OUT, STATUS } from './config';
import { useAccessToken } from '@/service/authService';


const api = axios.create({
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



api.interceptors.request.use(
    (config) => {
        const token = useAccessToken();
        const shouldSendToken = config?.headers?._auth !== false

        if (shouldSendToken && token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`
        }

        // ✅ Xoá _auth để tránh gửi thừa về server
        if (config?.headers?._auth !== undefined) {
            delete config.headers._auth
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// ✅ Response Interceptor
api.interceptors.response.use(
    (response) => {
        const { status, data } = response;

        if (isStatus(status, STATUS.success)) {
            return data; // Trả đúng phần data
        }

        if (isStatus(status, STATUS.error)) {
            return Promise.reject({
                status,
                message: data?.message || 'Request failed',
                data,
            });
        }

        // Trường hợp không xác định
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

export default api;
