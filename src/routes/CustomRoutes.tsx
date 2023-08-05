import { Route, Routes } from "react-router-dom"
import { Commission, Home, Links } from "../pages"

export const CustomRoutes = () => {
    return (
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/links" Component={Links} />
            <Route path="/commission" Component={Commission} />
        </Routes>
    )
}
