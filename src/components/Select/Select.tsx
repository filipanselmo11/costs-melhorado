import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";


export interface SelectProps {
    type?: HTMLInputTypeAttribute,
    text: string,
    name: string,
    options?: any,
    handleOnChange?: ChangeEventHandler,
    value?: string
}

export default function Select({ name, text, handleOnChange, value, options }: SelectProps) {
    return (
        <div
            className="flex flex-col mb-1">
            <label
                className="mb-2 font-bold"
                htmlFor={name}>
                {text}
            </label>
            <select
                className="p-2 border-none"
                name={name}
                id={name}
                onChange={handleOnChange}
                value={value || ''}>
                <option>Selecione uma opção</option>
                {options.map((opt) => (
                    <option value={opt.id} key={opt.id}>
                        {opt.name}
                    </option>
                ))}
            </select>
        </div>
    );
}