import styled from 'styled-components';
import { Nav, Logo, StyledNavList } from './styled';
import { BsList } from 'react-icons/bs';

const StyledBsList = styled(BsList)`
    font-size: 3rem;
    float: right;
    display: block;
    margin-top: 10px;
`;

export default function Navbar() {
    return (
        <Nav>
            <div className="nav-content">
                <Logo>KD</Logo>
                <StyledBsList className="navListIcon"/>
                <StyledNavList>
                    <li>O mnie</li>
                    <li>Oferta</li>
                    <li>Portfolio</li>
                    <li>Kontakt</li>
                </StyledNavList>
            </div>
        </Nav>
    )
}