export const TitleText: React.FC<{text: string}> = ({text}) => {
    return (
        <p className="text-[30px] text-purple text-center font-semibold">
            {text}
        </p>
    )
}