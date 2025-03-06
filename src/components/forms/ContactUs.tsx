import { addressDetails } from "@/constants";
import { Address } from "../Address";

export const ContactUs = () => {
    return (
        <div className="flex flex-col md:gap-y-1 px-2">
            <p className="text-sm text-purple font-bold">
                Contact Us
            </p>
            <div className="flex flex-col">
                <p className="font-bold md:font-semibold text-md md:text-4xl">
                    Get In Touch With Us
                </p>
                <p className="text-xs md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor
                </p>
            </div>
            <div className="flex flex-col gap-y-2 mt-3 md:mt-1">
                {
                    addressDetails.map((el, index) => {
                        return (<Address key={index} label={el.name} address={el.address} />)
                    })
                }
            </div>
        </div>
    );
}