import Image from "next/image"
import aiqueLogo from '../../public/aique_logo.png'
import { NavigationBar } from "./NavigationBar"

export const Header = () => {
    return (
        <div className="flex items-center justify-between max-w- w-full h-[88px] px-[124px]">
            <Image src={aiqueLogo} alt="Aique logo" className="w-[32px] h-[32px]" />
            <NavigationBar />
        </div>
    )
}