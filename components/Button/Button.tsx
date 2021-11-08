import { StyledButton } from './styled';
import Link from "next/link";
import { Link as Scroll } from 'react-scroll';

type Props = {
    content: string,
    toScroll?: string,
    route?: string
}

export default function Button({ content, toScroll, route }: Props) {
    if(route) {
        return <Link href={route}>
            <StyledButton> {content} </StyledButton>
        </Link>
    }
    if(toScroll == undefined || null) {
        return <StyledButton> {content} </StyledButton>
    }
    return (
        <Scroll to={toScroll} smooth={true} duration={500}>
            <StyledButton>
                { content }
            </StyledButton>
        </Scroll>
    )
}