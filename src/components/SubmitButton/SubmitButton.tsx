
export interface SubmitButtonProps {
    text: string;
}

export default function SubmitButton ({ text }:SubmitButtonProps) {
    return (
        <div>
            <button className="bg-black text-white mt-6 py-3 px-5 cursor-pointer border-none transition hover:text-amber-400">
                {text}
            </button>
        </div>
    );
}