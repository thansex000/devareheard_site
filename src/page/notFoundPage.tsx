import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button" // nếu bạn đang dùng shadcn/ui

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-6">Trang bạn tìm không tồn tại.</p>
            <Button
                onClick={() => navigate(-1)}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
                Quay lại trang trước
            </Button>
        </div>
    )
}

export default NotFoundPage
