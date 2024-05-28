import { Link } from "react-router-dom";

export interface LinkButtonProps {
    to: string,
    text: string,
}

export default function LinkButton ({ to, text }: LinkButtonProps) {
    return (
        <Link className="bg-black text-white mt-5 ml-16 p-3" to={to}>
            {text}
        </Link>
    );
}