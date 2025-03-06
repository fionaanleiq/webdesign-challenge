import Image, { StaticImageData } from "next/image";
import { Button } from "../buttons/Button";

export const Card: React.FC<{ title: string, description: string, image: StaticImageData, alt: string }> = ({ title, description, image, alt }) => {
    return (
        <div className="flex flex-col rounded-md w-67 min-w-67 h-105 shadow-sm overflow-hidden">
            <div className="w-[370px] h-[160px] overflow-hidden">
                <Image src={image} width={268} height={230} alt={alt} />
            </div>
            <div className="w-full justify-self-center p-3 pt-7">
                <p className="font-bold text-md text-center text-wrap">
                    {title}
                </p>
                <p className="text-center text-wrap text-sm p-2">
                    {description}
                </p>
            </div>
            <div className="flex justify-center">
                <Button label="View Details" />
            </div>
        </div>
    );
}