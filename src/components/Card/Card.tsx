
import { Link } from "react-router-dom";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";

export interface CardProps {
    id: string | any,
    name: string,
    budget: string,
    category: "Infra" | "Desenvolvimento" | "Design" | "Planejamento",
    handleRemove?: any
}

export default function Card({ id, name, budget, category, handleRemove }: CardProps) {
    const remove = (e: Event | any) => {
        e.preventDefault();
        handleRemove(id);
    }

    return (
        <div className="p-4 border-solid border-zinc-700 w-3/4 m-3">
            <h4 className="bg-black text-amber-500 p-2 mb-6 text-2xl">
                {name}
            </h4>
            <p className="text-gray-700 mb-4">
                <span className="font-bold">
                    Orçamento: R$ {budget}
                </span>
            </p>
            <p className="flex items-center">
                {category === "Infra" && (
                    <span className="block w-3 h-3 bg-slate-400 mr-1">{category}</span>
                )}
                 {category === "Desenvolvimento" && (
                    <span>{category}</span>
                )}
                 {category === "Design" && (
                    <span>{category}</span>
                )}
                 {category === "Planejamento" && (
                    <span>{category}</span>
                )}
            </p>
            <div className="border-none bg-white text-black text-sm py-2 px-1 cursor-pointer mr-4 flex items-center justify-center transition">
                <Link
                 to={`/projeto/${id}`}>
                    <BsPencil/> Editar
                 </Link>
                 <button onClick={remove}>
                    <BsFillTrashFill className="mr-2"/> Excluir
                 </button>
            </div>
        </div>
    );
}