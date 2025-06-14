import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Tablecs from '@/components/custom/Tablecs'
import Checkboxcs from '@/components/custom/Checkboxcs'
import { fechvocabulary_chinese } from '@/api/lang/chinese'
import type { Ichinese } from '@/models/lang/IChinese'
import type { PaginatedResult } from '@/models/IBase'
import type { VocabularyChinese } from '@/models/lang/IVocabulary'
import ModelNotification from '@/components/custom/ModelNotifycation'

const IndexChinese: React.FC = () => {
    const [vocabList, setVocabList] = useState<PaginatedResult<VocabularyChinese>>()
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [checkedIds, setCheckedIds] = useState<number[]>([])
    const [show, setShow] = useState(false)
    const [selectedId, setSelectedId] = useState<number | null>(null)


    const handleFetch = async (page: number, limit: number) => {
        setLoading(true)
        try {
            const payload: Ichinese = { hsk: 1, page, limit }
            const res = await fechvocabulary_chinese(payload)
            setVocabList(res.data)
        } catch (err) {
            console.error('Lỗi fetch từ vựng:', err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        handleFetch(page, limit)
    }, [page, limit])

    const toggleCheck = (id: number) => {
        setCheckedIds(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        )
        console.log(checkedIds)
    }

    const isChecked = (id: number) => checkedIds.includes(id)

    const Note = () => {
        // const checkedWords = vocabList?.data.filter(item => checkedIds.includes(item.id)).map(item => item.id) || []

    }

    return (
        <>
            <Tablecs
                title="Danh sách từ vựng"
                colums={['STT', 'Từ', 'Loại', 'Nghĩa', '']}
                row={
                    vocabList?.data?.map((item, index) => [
                        (page - 1) * limit + index + 1,
                        item.word,
                        item.kind,
                        item.mean?.slice(0, 100) + '...',
                        <Checkboxcs
                            isChecked={isChecked(item.id)}
                            change={() => {
                                setSelectedId(item.id)
                                setShow(true)
                            }}
                        />

                    ]) || []
                }
            />

            <div className="flex items-center justify-between mt-4 flex-wrap gap-3">
                <Button onClick={Note}></Button>

                {/* chọn số dòng / trang */}
                <div className="flex items-center gap-2 text-sm">
                    <span>Số dòng / trang:</span>
                    {[10, 20, 50].map((l) => (
                        <Button
                            key={l}
                            size="sm"
                            variant={l === limit ? 'default' : 'outline'}
                            onClick={() => {
                                setLimit(l)
                                setPage(1) // reset về trang 1 khi đổi limit
                            }}
                        >
                            {l}
                        </Button>
                    ))}
                </div>

                {/* Phân trang đơn giản */}
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        disabled={page <= 1}
                        onClick={() => setPage((p) => p - 1)}
                    >
                        Trang trước
                    </Button>

                    <span className="text-sm font-medium text-gray-700">
                        Trang {page} / {vocabList?.pagination.totalPages}
                    </span>

                    <Button
                        variant="outline"
                        disabled={page >= (vocabList?.pagination.totalPages || 1)}
                        onClick={() => setPage((p) => p + 1)}
                    >
                        Trang sau
                    </Button>
                </div>
            </div>

            <ModelNotification
                isOpen={show}
                onClose={() => setShow(false)}
                title="Xác nhận"
                content="Bạn có chắc chắn muốn thêm từ vựng này không?"
                buttons={[
                    {
                        label: "Huỷ",
                        variant: "outline",
                        onClick: () => setShow(false),
                    },
                    {
                        label: "Đồng ý",
                        variant: "default",
                        onClick: () => {
                            if (selectedId !== null) {
                                toggleCheck(selectedId)
                            }
                            setShow(false)
                        },
                    },
                ]}
            />

        </>
    )
}

export default IndexChinese
