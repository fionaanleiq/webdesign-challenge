import { useState } from "react";

export const InputFields: React.FC<{ label: string, placeholder: string, type: string }> = ({ label, placeholder, type = "text" }) => {
    
    // const [formData, setFormData] = useState<>({});

    // const handleChange = () => {
    //     setFormData({...formData, });
    // }

    return (
        <>
            <label htmlFor={label} className="text-xs placeholder-black active:placeholder-purple">
                {label}
            </label>
            <div>
            {
                type === 'number'
                    ? <>
                        <span className="">+63</span>
                        <input className="bg-transparent placeholder-black focus:placeholder-purple focus:outline-0" id={label} type={type} placeholder={placeholder}
                            minLength={10} maxLength={10} 
                        />
                    </>
                    : <input className="bg-transparent placeholder-black focus:placeholder-purple focus:outline-0 w-full"
                     id={label} type={type} placeholder={placeholder} />

            }
            <hr className="bg-black border-1 dark:bg-gray-700" />
            </div>
        </>
    );
}