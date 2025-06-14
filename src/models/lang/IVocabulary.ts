export interface VocabularyChinese {
    id: number;
    word: string;
    pynin: string;
    kind: string;
    mean: string,
    detail: {
        hsk: number;
        id: number;
    }
}