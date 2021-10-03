import styled from 'styled-components';
import { Nav, Logo } from './styled';
import { BsList } from 'react-icons/bs';

const StyledBsList = styled(BsList)`
    font-size: 3rem;
    position: absolute;
    right: 20px;
    top: 10px;
`;

export default function Navbar() {
    return (
        <Nav>
            <Logo>KD</Logo>
            <StyledBsList />
        </Nav>
    )
}