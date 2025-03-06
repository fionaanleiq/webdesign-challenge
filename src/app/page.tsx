import Image from "next/image";
import icon from "../../public/icon.png"
import rocketBtnIcon from "../../public/rocket-wht-btn-icon.svg";
import { TitleText } from "../components/TitleText"
import { CheckButton } from "@/components/buttons/CheckButton";
import { CardGroup } from "../components/cards/CardGroup";
import { ContactUs } from "@/components/forms/ContactUs";
import { MessageUs } from "@/components/forms/MessageUs";

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-exceeded justify-items-center min-h-screen px-[12px] md:px-[124px] pb-20 gap-14 md:gap-16 font-[family-name:var(--font-geist-sans)]">
      {/* <main className="flex flex-col gap-y-8 items-center sm:items-start"> */}
      <div className="flex gap-y-2 flex-col sm:flex-col items-center pt-10">
        <Image src={icon}
          alt="Rocket emoji"
          width={40} />
        <TitleText text={"Build and Launch Reliable and Market-Ready Products"} />
        <p className="text-xs w-3/4 text-center mb-3">
          This 2025, Aique DANG aims to optimize internal structures and processes, ensuring enhanced reliability, integrity, and efficiency, ultimately driving increased profitability for its clients.
        </p>
        <CheckButton label="Check our solutions" image={rocketBtnIcon} />
      </div>
      <CardGroup />

      <footer className="flex flex-col md:flex-row justify-between w-full md:pb-4 gap-y-8 md:gap-x-12">
        <ContactUs />
        <MessageUs />
      </footer>
    </div>
  );
}
