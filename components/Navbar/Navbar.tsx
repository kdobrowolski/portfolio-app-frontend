import React , { useState } from 'react';
import styled from 'styled-components';
import { Nav, Logo, StyledNavList } from './styled';
import { BsList } from 'react-icons/bs';
import { Link } from "react-scroll";

const StyledBsList = styled(BsList)`
    display: block;
    float: right;
    margin-top: 10px;
    font-size: 3rem;
`;

export default function Navbar() {
    const [opened, setOpened] = useState(false);
    const toggleNav = () => {
        opened ? setOpened(false) : setOpened(true); 
    }
    const closeNav = () => {
        opened ? setOpened(false) : null;
    }
    return (
        <Nav id="nav">
            <div className={opened ? "openedNav nav-content" : "nav-content"} id="navContent">
                <Logo className="logo">
                    <Link to="header" smooth={true} duration={500}>KD</Link>
                </Logo>
                <StyledBsList className="navListIcon" onClick={toggleNav}/>
                <StyledNavList className="navList">
                    <Link onClick={closeNav} to="about" smooth={true} duration={500}>O mnie</Link>
                    <Link onClick={closeNav} to="offer" smooth={true} duration={500}>Oferta</Link>
                    <Link onClick={closeNav} to="projects" smooth={true} duration={500}>Portfolio</Link>
                    <Link onClick={closeNav} to="contact" smooth={true} duration={500}>Kontakt</Link>
                </StyledNavList>
                <div id="closeIcon" className="closeIcon">
                    <span onClick={toggleNav}>X</span>
                </div>
            </div>
        </Nav>
    )
}