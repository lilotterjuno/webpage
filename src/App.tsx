import { FaGithub, FaTwitter } from "react-icons/fa"
import { BrowserRouter } from "react-router-dom"
import { NavItemProps, Navbar } from "./components"
import { Footer, SocialItemsProps } from "./components/Footer"
import { CustomRoutes } from "./routes"

function App() {
    const navItems: NavItemProps[] = [
        { itemKey: "", title: "Home" },
        { itemKey: "links", title: "Links" },
        { itemKey: "commission", title: "Commission" },
    ]

    const footerSocials: SocialItemsProps[] = [
        { key: "twitter", icon: <FaTwitter /> },
        { key: "github", icon: <FaGithub /> },
    ]

    return (
        <BrowserRouter basename="/">
            <div className="flex h-full flex-col">
                <div className="h-32 min-h-max">
                    <Navbar
                        endSection="End"
                        itemList={navItems}
                        align="center"
                    />
                </div>

                <div className="flex-grow">
                    <CustomRoutes />
                </div>

                <div>
                    <Footer socialsItems={footerSocials} />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
