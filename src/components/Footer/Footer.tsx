import { motion } from "framer-motion"
import { IconContext } from "react-icons"

interface FooterProps {
    socialsItems: SocialItemsProps[]
}

export interface SocialItemsProps {
    key: string
    icon: React.ReactNode
}

export const Footer = ({ socialsItems }: FooterProps) => {
    return (
        <div className="flex h-48 flex-col-reverse items-center justify-center gap-4 bg-surface-_ text-on-surface-_">
            <div className="flex gap-4">
                <IconContext.Provider value={{ size: "32px" }}>
                    {socialsItems.map((item) => (
                        <motion.a
                            key={item.key}
                            href="https://google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {item.icon}
                        </motion.a>
                    ))}
                </IconContext.Provider>
            </div>

            <p>© 2023 CookieCollie. All rights reserved.</p>
        </div>
    )
}
