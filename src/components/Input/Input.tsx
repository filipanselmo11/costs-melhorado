import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

export interface InputProps {
    type: HTMLInputTypeAttribute,
    text: string,
    name: string,
    placeholder: string,
    handleOnChange?: ChangeEventHandler,
    value?: string
}

export default function Input ({ type, text, name, placeholder, handleOnChange, value }:InputProps) {
    return (
        <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold" htmlFor={name}>
                {text}
            </label>
            <input
                className="p-2 border-none placeholder-slate-600"
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
            />
        </div>
    );

}