import { motion } from "framer-motion"
import React from "react"
import { NavLink, useLocation } from "react-router-dom"
import { PolyComp } from "../PolymorphicComponent/PolyComp"
import { Separator } from "../Separator/Separator"
import { Typography } from "../Typography/Typography"

interface NavbarProps {
    homeSection?: React.ReactNode
    endSection?: React.ReactNode
    hasSeparator?: boolean
    align?: "left" | "right" | "center"
    itemList: NavItemProps[]
}

export interface NavItemProps {
    title: string
    itemKey: string
}

export const Navbar = (props: NavbarProps) => {
    const {
        endSection,
        homeSection,
        hasSeparator,
        align = "left",
        itemList,
    } = props

    return (
        <div
            className="flex min-h-full items-stretch gap-6 bg-surface-_ px-6 py-2 font-medium text-on-surface-variant"
            style={{
                WebkitUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
            }}
        >
            {homeSection && (
                <div className="flex items-center">
                    <div>{homeSection}</div>
                </div>
            )}

            {homeSection && hasSeparator && (
                <div className="flex items-center">
                    <Separator orientation="vertical" />
                </div>
            )}

            <div
                className={`flex flex-grow items-center ${
                    align === "left"
                        ? "justify-start"
                        : align === "center"
                        ? "justify-center"
                        : "justify-end"
                }`}
            >
                <div className={"flex h-full gap-6"}>
                    {itemList.map((item, i) => (
                        <NavbarItem {...item} key={i} />
                    ))}
                </div>
            </div>

            <div className="flex items-center">
                <div>{endSection}</div>
            </div>
        </div>
    )
}

const NavbarItem = ({ title, itemKey }: NavItemProps) => {
    const { pathname } = useLocation()
    const isActive = pathname.replace(/\//g, "") === itemKey

    const containerVariants = {
        hover: {
            y: -5,
        },
    }

    return (
        <motion.div
            whileHover={"hover"}
            variants={containerVariants}
            className="flex items-center"
        >
            <PolyComp as={NavLink} to={`/${itemKey}`} className="align-middle">
                <Typography
                    as={"p"}
                    className={isActive ? "font-bold text-on-surface-_" : ""}
                >
                    {title}
                </Typography>
            </PolyComp>
        </motion.div>
    )
}
Navbar.Item = NavbarItem
