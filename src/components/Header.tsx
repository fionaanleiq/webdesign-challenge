import Image from "next/image"
import aiqueLogo from '../../public/aique_logo.png'
import { NavigationBar } from "./NavigationBar"

export const Header = () => {
    return (
        <div className="flex items-center justify-between w-full h-[88px] px-[15px] md:px-[124px] gap-x-4 pt-[64px] md:pt-0">
            <Image src={aiqueLogo} alt="Aique logo" className="w-[25px] h-[25px]" />
            <NavigationBar />
        </div>
    )
}