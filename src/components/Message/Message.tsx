import { useEffect, useState } from "react"


export interface MessageProps {
    type?: "success" | "error",
    msg: string
}

export default function Message({ type, msg }: MessageProps) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        if (!msg) {
            setVisible(false);
            return;
        }
        setVisible(true);
        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, [msg]);

    return (
        <>
            {visible && (
                <div className="w-full p-4 border border-solid border-black text-center mb-12">
                    {type === "success" && (
                        <span className="text-green-700 bg-green-300 border-green-300">{msg}</span>
                    )}
                    {type === "error" && (
                        <span className="text-red-700 bg-red-300 border-red-300">{msg}</span>
                    )}
                </div>
            )}
        </>
    );
}