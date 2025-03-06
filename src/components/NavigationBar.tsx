"use client"
import { useState } from "react";
import { NavigationButton } from "./buttons/NavigationButtons"
import { navigationLabels } from "@/constants";

export const NavigationBar = () => {
    const [activeButton, setActiveButton] = useState<string>("");

    const handleClick = (button: string) => {
        setActiveButton(button);
    }

    return (
        <div className="flex gap-x-1">
            {navigationLabels.map((el, index) => {
                return <NavigationButton key={index} label={el.name}/>
            })}
        </div>

    )
}