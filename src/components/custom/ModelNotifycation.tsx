import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import React from "react"

interface ButtonOption {
    label: string
    onClick: () => void
    variant?: "default" | "outline" | "destructive"
}

interface ModelNotificationProps {
    isOpen: boolean
    onClose: () => void
    title: string
    content: string
    buttons: ButtonOption[]
}

const ModelNotification: React.FC<ModelNotificationProps> = ({
    isOpen,
    onClose,
    title,
    content,
    buttons,
}) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    <div className="text-sm text-gray-700 py-2">{content}</div>
                </DialogDescription>
                <DialogFooter className="flex justify-end gap-2 pt-4">
                    {buttons.map((btn, idx) => (
                        <Button key={idx} variant={btn.variant || "default"} onClick={btn.onClick}>
                            {btn.label}
                        </Button>
                    ))}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default ModelNotification
