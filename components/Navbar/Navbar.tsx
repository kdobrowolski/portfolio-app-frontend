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
    const toggleNav = () => {
        const nav = document.getElementById("navContent");
        if(nav) nav.classList.toggle("openedNav");
    }
    return (
        <Nav id="nav">
            <div className="nav-content" id="navContent">
                <Logo className="logo">KD</Logo>
                <StyledBsList className="navListIcon" onClick={toggleNav}/>
                <StyledNavList className="navList">
                    <li>O mnie</li>
                    <li>Oferta</li>
                    <li>Portfolio</li>
                    <li>Kontakt</li>
                </StyledNavList>
                <div id="closeIcon" className="closeIcon">
                    <span onClick={toggleNav}>X</span>
                </div>
            </div>
        </Nav>
    )
}