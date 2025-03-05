import { addressDetails } from "@/constants";
import { Address } from "../Address";

export const ContactUs = () => {
    return (
        <div className="flex flex-col gap-y-1">
            <p className="text-sm text-purple font-bold">
                Contact Us
            </p>
            <div className="flex flex-col">
                <p className="font-semibold text-4xl">
                    Get In Touch With Us
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor
                </p>
            </div>
            <div className="flex flex-col gap-y-2 pt-1">
                {
                    addressDetails.map((el, index) => {
                        return (<Address key={index} label={el.name} address={el.address} />)
                    })
                }
            </div>
        </div>
    );
}