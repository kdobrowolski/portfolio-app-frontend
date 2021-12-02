import { StyledButton } from './styled';
import Link from "next/link";
import { Link as Scroll } from 'react-scroll';

type Props = {
    content: string,
    toScroll?: string,
    route?: string,
    onClickFunction?: any
}

export default function Button({ content, toScroll, route, onClickFunction }: Props) {
    if(route) {
        return <Link href={route} passHref>
            <StyledButton> {content} </StyledButton>
        </Link>
    }
    if(toScroll == undefined || null) {
        return <StyledButton onClick={onClickFunction}> {content} </StyledButton>
    }
    return (
        <Scroll to={toScroll} smooth={true} duration={500}>
            <StyledButton>
                { content }
            </StyledButton>
        </Scroll>
    )
}