export const TitleText: React.FC<{text: string}> = ({text}) => {
    return (
        <p className="text-[25px]/8 md:text-[30px]/8 text-purple text-center font-semibold">
            {text}
        </p>
    )
}