import { StyledButton } from './styled';
import { Link } from "react-scroll";

type Props = {
    content: string,
    toScroll?: string
}

export default function Button({ content, toScroll }: Props) {
    if(toScroll == undefined || null) {
        return <StyledButton> {content} </StyledButton>
    }
    return (
        <Link to={toScroll} smooth={true} duration={500}>
            <StyledButton>
                { content }
            </StyledButton>
        </Link>
    )
}