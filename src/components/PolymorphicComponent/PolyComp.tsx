type AsProp<Comp extends React.ElementType> = {
    as?: Comp
}

type PropsToOmit<Comp extends React.ElementType, Props> = keyof (AsProp<Comp> &
    Props)

export type PolyCompProp<
    Comp extends React.ElementType,
    Props = object,
> = React.PropsWithChildren<Props & AsProp<Comp>> &
    Omit<React.ComponentPropsWithoutRef<Comp>, PropsToOmit<Comp, Props>>

export const PolyComp = <Comp extends React.ElementType>(
    props: PolyCompProp<Comp>
) => {
    const { as, children } = props
    const Component = as || "div"
    return <Component {...props}>{children}</Component>
}
