import { Card } from "../../components"
import { Typography } from "../../components/Typography/Typography"

export const Links = () => {
    return (
        <div className="flex min-w-full flex-col justify-center gap-10">
            <div>
                <Typography as={"h3"} className="text-center">
                    All my links can be found here
                </Typography>
            </div>
            <div className="grid min-w-full grid-cols-3 justify-stretch gap-4">
                <Card variant="filled">
                    <Card.Header classname="justify-center">
                        <Typography as={"h5"}>Header</Typography>
                    </Card.Header>

                    <Card.Body>
                        <p>Body</p>
                    </Card.Body>

                    <Card.Footer>
                        <p>Footer</p>
                    </Card.Footer>
                </Card>

                <Card />
            </div>
        </div>
    )
}
