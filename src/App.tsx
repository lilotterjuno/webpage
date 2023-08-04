import { BrowserRouter } from "react-router-dom"
import { NavItemProps, Navbar } from "./components"

function App() {
    const navItems: NavItemProps[] = [
        { itemKey: "home", title: "Home" },
        { itemKey: "links", title: "Links" },
        { itemKey: "commission", title: "Commission" },
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
                    <h1>Body</h1>
                </div>
                <div>Footer</div>
            </div>
        </BrowserRouter>
    )
}

export default App
