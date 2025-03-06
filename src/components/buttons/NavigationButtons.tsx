import { toProperCase } from "@/utils/dataUtils";

export const NavigationButton : React.FC<{ label: string, button?: string }> = ({label}) => {


    return (
        <button className={`rounded-lg md:text-sm text-xs py-[8px] px-[24px] hover:text-purple border-1 border-white hover:border-purple active:text-white active:bg-purple active: transition-border delay-150 transition delay-150 duration-300 
        ${label === 'Home' ? 'text-white bg-purple' : ''}`}>
            {toProperCase(label)}
        </button>
    );
}