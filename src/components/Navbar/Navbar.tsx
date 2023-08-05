import { motion } from "framer-motion"
import React from "react"
import { NavLink, useLocation } from "react-router-dom"
import { PolyComp } from "../PolymorphicComponent/PolyComp"
import { Typography } from "../Typography/Typography"

interface NavbarProps {
    homeSection?: React.ReactNode
    endSection?: React.ReactNode
    align?: "left" | "right" | "center"
    itemList: NavItemProps[]
}

export interface NavItemProps {
    title: string
    itemKey: string
}

export const Navbar = (props: NavbarProps) => {
    const { endSection, homeSection, align = "left", itemList } = props

    return (
        <div
            className="flex min-h-full items-center justify-between gap-12 bg-surface-_ p-12 text-h5 font-medium text-on-surface-variant shadow-md"
            style={{
                WebkitUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
            }}
        >
            {(homeSection || align === "center") && (
                <div
                    className={`flex ${
                        align === "left" ? "flex-none" : "flex-1"
                    }`}
                >
                    <div>{homeSection}</div>
                </div>
            )}

            <div className={"flex"}>
                <div className={"flex h-full gap-12"}>
                    {itemList.map((item, i) => (
                        <NavbarItem {...item} key={i} />
                    ))}
                </div>
            </div>

            {(endSection || align === "center") && (
                <div
                    className={`flex ${
                        align === "right" ? "flex-none" : "flex-1"
                    } justify-end`}
                >
                    <div>{endSection}</div>
                </div>
            )}
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

    const indicatorVariants = {
        active: {
            width: "100%",
            transition: {
                type: "tween",
                ease: [0.1, 0.7, 0.8, 0.3],
                duration: 0.5,
            },
        },
        inactive: {
            width: 0,
            transition: {
                type: "tween",
                ease: [0.9, 0.3, 0.2, 0.7],
                duration: 0.2,
            },
        },
    }

    return (
        <motion.div whileHover={"hover"} variants={containerVariants}>
            <PolyComp as={NavLink} to={`/${itemKey}`}>
                <Typography
                    as={"h5"}
                    className={`px-1 ${
                        isActive ? "font-bold text-on-surface-_" : ""
                    }`}
                >
                    {title}
                </Typography>
            </PolyComp>

            <div className="flex justify-center">
                <motion.div
                    className="h-1 rounded-s-full bg-_-primary"
                    variants={indicatorVariants}
                    animate={isActive ? "active" : "inactive"}
                />

                <motion.div
                    className="h-1 rounded-e-full bg-_-primary"
                    variants={indicatorVariants}
                    animate={isActive ? "active" : "inactive"}
                />
            </div>
        </motion.div>
    )
}
Navbar.Item = NavbarItem
