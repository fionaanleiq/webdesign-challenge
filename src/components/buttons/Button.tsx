import Image from "next/image";

export type buttonOption = { src: string, width: number, height: number, alt: string }

export const Button: React.FC<{ label: string, obj?: buttonOption }> = ({ label, obj }) => {
    return (
        <button className="text-sm border-1 cursor-pointer w-[151px] h-[48px] py-2 rounded-3xl active:text-white active:bg-purple transition-all">
            {obj && <Image src={obj.src} width={obj.width} height={obj.height} alt={obj.alt}/>}
            {label}
        </button>
    );
}