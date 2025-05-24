export interface IBaseResponse<T = unknown> {
    success: boolean;
    message?: string;
    data?: T;
    errorCode?: string;
}