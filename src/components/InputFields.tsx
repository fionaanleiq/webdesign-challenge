"use client"
import { useState } from "react";

export const InputFields: React.FC<{ label: string, placeholder: string, type: string }> = ({ label, placeholder, type = "text" }) => {

    const [data, setData] = useState<string>("")

    return (
        <>
            <label htmlFor={label} className={`text-xs md:text-base placeholder-black active:placeholder-purple ${data ? 'text-purple' : ''}`}>
                {label}
            </label>
            <div>
                {
                    label === 'Phone'
                        ? <span className={`text-sm md:text-base ${data ? 'text-purple' : ''}`}>+63 </span> : null
                }
                <input className={`bg-transparent placeholder-black text-sm md:text-base focus:outline-0 ${label === 'Phone' ? '' : 'w-full'} ${data ? 'text-purple' : ''}`} id={label} type={type} placeholder={placeholder}
                    minLength={type === 'number' ? 10 : undefined} maxLength={type === 'number' ? 10 : undefined}
                    onChange={(e) => setData(e.target.value)}
                />

                <hr className={`text-black border-1 dark:bg-gray-700  ${data ? 'text-purple' : ''}`} />
            </div>
        </>
    );
}