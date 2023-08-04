import { PolyCompProp } from "../PolymorphicComponent/PolyComp"

export const Typography = <Comp extends React.ElementType>(
    props: PolyCompProp<Comp>
) => {
    const { as, children } = props
    const Component = as || "p"
    return <Component {...props}>{children}</Component>
}
