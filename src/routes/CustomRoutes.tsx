import { Route, Routes } from "react-router-dom"
import { Commission, Home, Links } from "../pages"
import { Page } from "./Page"

export const CustomRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Page title="Home">
                        <Home />
                    </Page>
                }
            />
            <Route
                path="/links"
                element={
                    <Page title="Links">
                        <Links />
                    </Page>
                }
            />
            <Route
                path="/commission"
                element={
                    <Page title="Commission">
                        <Commission />
                    </Page>
                }
            />
        </Routes>
    )
}
