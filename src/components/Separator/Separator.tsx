interface SeparatorProps {
    orientation?: "vertical" | "horizontal"
}

export const Separator = ({ orientation = "horizontal" }: SeparatorProps) => {
    return (
        <hr
            className={`border ${
                orientation === "vertical" ? "h-full" : "w-full"
            }`}
        />
    )
}
