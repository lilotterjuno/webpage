import { useState } from "react"

export function useNavbar(keyList: string[], defaultActiveKey: string) {
    const [key, setKey] = useState(defaultActiveKey && keyList[0])

    const activeList = Object.fromEntries(
        keyList.map((k) => [k, k === key ? true : false])
    )

    return { setKey, activeList }
}
