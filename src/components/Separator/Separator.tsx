interface SeparatorProps {
    orientation?: "vertical" | "horizontal"
}

export const Separator = ({ orientation = "horizontal" }: SeparatorProps) => {
    return (
        <hr
            className={`border text-neutral-variant-90 ${
                orientation === "vertical" ? "h-full" : "w-full"
            }`}
        />
    )
}
