import Image from "next/image";
import location from "../../public/location.png"

export const Address: React.FC<{label: string, address: string}> = ({label, address}) => {
    return (
        <div className="flex gap-x-2 items-center">
            <Image src={location} alt="Address Icon" width={40} height={40} />
            <div>
                <p className="font-bold text-xs">
                    {label}
                </p>
                <p className="text-sm"> 
                    {address}
                </p>
            </div>
        </div>
    );
}