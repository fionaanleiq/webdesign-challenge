import Image, { StaticImageData } from "next/image";

export type buttonOption = { src: string, width: number, height: number, alt: string }

export const SendButton: React.FC<{ label: string, obj?: buttonOption }> = ({ label, obj }) => {
    return (
        <button className="text-sm border-1 cursor-pointer w-[151px] h-[48px] mt-4 rounded-3xl text-white bg-purple transition-all">
            {label}
        </button>
    );
}