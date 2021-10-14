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
    const openNav = () => {
        const navIcon = document.getElementById("navListIcon");
        if(navIcon) navIcon.style.display = "none";

        const nav = document.getElementById("nav");
        if(nav) nav.style.height = "100vh";

        const navList = document.getElementById("navList");
        if(navList) navList.classList.add("openedNav");

        const logo = document.getElementById("logo");
        if(logo) logo.style.float = "none";

        const closeIcon = document.getElementById("closeIcon");
        if(closeIcon) closeIcon.style.display = "block";
    }
    const closeNav = () => {
        const navIcon = document.getElementById("navListIcon");
        if(navIcon) navIcon.style.display = "block";

        const nav = document.getElementById("nav");
        if(nav) nav.style.height = "70px";

        const navList = document.getElementById("navList");
        if(navList) navList.classList.remove("openedNav");

        const logo = document.getElementById("logo");
        if(logo) logo.style.float = "left";

        const closeIcon = document.getElementById("closeIcon");
        if(closeIcon) closeIcon.style.display = "none";
    }
    return (
        <Nav id="nav">
            <div className="nav-content">
                <Logo id="logo">KD</Logo>
                <StyledBsList id="navListIcon" className="navListIcon" onClick={openNav}/>
                <StyledNavList id="navList">
                    <li>O mnie</li>
                    <li>Oferta</li>
                    <li>Portfolio</li>
                    <li>Kontakt</li>
                </StyledNavList>
                <div id="closeIcon" className="closeIcon">
                    <span onClick={closeNav}>X</span>
                </div>
            </div>
        </Nav>
    )
}