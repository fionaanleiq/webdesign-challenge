import { fieldDetails } from "@/constants";
import { InputFields } from "../InputFields";
import { SendButton } from "../buttons/SendButton";

export const MessageUs = () => {
    return (
        <div className="flex flex-col bg-lightPurple/40 w-[686px] p-6 rounded-md gap-y-2">
            <p className="font-bold ">
                Send us a message
            </p>
            <form className="flex flex-col gap-y-2">
                {
                    fieldDetails.map((el, index) => {
                        return (<InputFields key={index} label={el.label} placeholder={el.placeholder} type={el.type} />)
                    })
                }
                <div className="flex self-end w-24">
                    <SendButton label="Send" />
                </div>
            </form>
        </div>
    );
}