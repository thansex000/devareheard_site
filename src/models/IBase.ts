export interface IBaseResponse<T = unknown> {
    success: string;
    message?: string;
    data?: T;
    timestamp?: string;
}

export interface PaginationMeta {
    page: number;
    limit: number;
    offset: number;
    totalItems: number;
    totalPages: number;
}


export interface PaginatedResult<T> {
    data: T[];
    pagination: PaginationMeta;
}