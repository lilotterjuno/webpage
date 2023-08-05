import { useEffect } from "react"

interface PageProps {
    children: React.ReactNode
    title: string
}

export const Page = ({ children, title }: PageProps) => {
    useEffect(() => {
        document.title = `Test | ${title}`
    }, [title])
    return children
}
