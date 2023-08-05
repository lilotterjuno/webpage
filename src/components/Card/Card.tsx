import React from "react"

interface CardProps {
    children?: React.ReactNode
    orientation?: "horizontal" | "vertical"
    variant?: "elevated" | "outlined" | "filled"
}

export const Card = (props: CardProps) => {
    const { children, orientation = "vertical", variant = "elevated" } = props

    return (
        <div
            className={`flex rounded-lg ${
                orientation === "horizontal" ? "flex-row" : "flex-col"
            } ${
                variant === "elevated"
                    ? "shadow-2"
                    : variant === "outlined"
                    ? "outline outline-1 outline-outline"
                    : "bg-container-primary"
            }`}
        >
            {React.Children.map(children, (child) => (
                <>{child}</>
            ))}
        </div>
    )
}

interface CardSubCompProps {
    classname?: string
}

const CardSubComp = ({
    children,
    classname,
}: React.PropsWithChildren<CardSubCompProps>) => {
    return <div className={`flex p-5 ${classname}`}>{children}</div>
}

const Header = CardSubComp
Card.Header = Header

const Body = CardSubComp
Card.Body = Body

const Footer = CardSubComp
Card.Footer = Footer
