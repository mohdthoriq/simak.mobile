import { PaginationMeta } from "./pagination";

export interface apiResponse<T = unknown> {
    message: string;
    data: T;
    status: string;
    statusCode: number;
}

export interface PaginationApiResponse<T> {
    message: string;
    data: T[];
    status: string;
    statusCode: number;
    meta: PaginationMeta

}