import { HOST } from './../config';
import type { IBaseResponse, PaginatedResult } from "@/models/IBase";
import type { Ichinese } from "@/models/lang/IChinese";
import type { VocabularyChinese } from "@/models/lang/IVocabulary";
import axios from 'axios';

const api = HOST

export const fechvocabulary_chinese = async (data: Ichinese): Promise<IBaseResponse<PaginatedResult<VocabularyChinese>>> => {
    const response = await axios.get(`${api}vocabulary/chinese/hsk`, {
        params: data,
        headers: {
            _auth: false, // ✅ dùng interceptor để không gắn token
        },
    });

    return response.data as IBaseResponse<PaginatedResult<VocabularyChinese>>;
};