import { StyledButton } from './styled';

type Props = {
    content: string
}

export default function Button({ content }: Props) {
    return (
        <StyledButton>
            { content }
        </StyledButton>
    )
}