import styled from 'styled-components';
import { Nav, Logo, StyledNavList } from './styled';
import { BsList } from 'react-icons/bs';
import { Link, animateScroll as scroll } from "react-scroll";

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
                <Logo className="logo">
                    <Link to="header" smooth={true} duration={500}>KD</Link>
                </Logo>
                <StyledBsList className="navListIcon" onClick={toggleNav}/>
                <StyledNavList className="navList">
                    <Link to="about" smooth={true} duration={500}>O mnie</Link>
                    <Link to="offer" smooth={true} duration={500}>Oferta</Link>
                    <Link to="projects" smooth={true} duration={500}>Portfolio</Link>
                    <Link to="contact" smooth={true} duration={500}>Kontakt</Link>
                </StyledNavList>
                <div id="closeIcon" className="closeIcon">
                    <span onClick={toggleNav}>X</span>
                </div>
            </div>
        </Nav>
    )
}