import { HOST } from './../config';
import type { IBaseResponse, PaginatedResult } from "@/models/IBase";
import type { Ichinese } from "@/models/lang/IChinese";
import type { IMyVocabulary } from '@/models/lang/IMyVocabulary';
import type { VocabularyChinese } from "@/models/lang/IVocabulary";
import Axios from "./../axios"

const api = HOST

export const fechvocabulary_chinese = async (data: Ichinese): Promise<IBaseResponse<PaginatedResult<VocabularyChinese>>> => {
    const response = await Axios.get(`${api}vocabulary/chinese/hsk`, {
        params: data,
        headers: {
            _auth: false,
        },
    });

    return response.data as IBaseResponse<PaginatedResult<VocabularyChinese>>;
};

export const my_vocabulary = async (data: IMyVocabulary): Promise<IBaseResponse<Ichinese>> => {
    const response = await Axios.post(`${api}add/chinese/vocabulary`, data);
    return response.data as IBaseResponse<Ichinese>;
}
