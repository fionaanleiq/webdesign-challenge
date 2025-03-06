import { NavigationButton } from "./buttons/NavigationButtons"
import { navigationLabels } from "@/constants";

export const NavigationBar = () => {
 
    return (
        <div className="flex gap-x-1">
            {navigationLabels.map((el, index) => {
                return <NavigationButton key={index} label={el.name}/>
            })}
        </div>

    )
}