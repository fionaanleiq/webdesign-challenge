import { fieldDetails } from "@/constants";
import { InputFields } from "../InputFields";
import { SendButton } from "../buttons/SendButton";

export const MessageUs = () => {
    return (
        <div className="flex flex-col mx-2 relative bg-lightPurple/40 md:w-[686px] p-6 rounded-md gap-y-2">
            <p className="font-bold mb-4">
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
            <div className={`apply-purpleCircle absolute bottom-[-50] left-[-18] md:right-118 w-[100px] h-[100px]  blur-[35px]`}></div>
            <div className={`apply-purpleCircle absolute top-[5] right-[-40] w-[100px] h-[100px] blur-[25px]`}></div>
        </div>
    );
}