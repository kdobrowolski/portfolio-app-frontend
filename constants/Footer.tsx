import styled from 'styled-components';
import { BsGithub, BsFacebook } from 'react-icons/bs';
import breakpoint from '../utils/breakpoints';
import { Link, animateScroll as scroll } from "react-scroll";

const StyledFooter = styled.footer`
    width: 100vw;
    max-width: 100%;
    background-color: #1b1b1b;
    color: white;
    & > .navList {
        padding: 0;
        margin: 0;
        margin-left: 30px;
        padding-top: 10px;
        list-style: none;
        & > li {
            margin-top: 15px;
            & > a:hover {
                cursor: pointer;
            }
        }

        @media only screen and ${breakpoint.device.sm} {
            width: 50%;
            float: left;
            display: block;
            margin-left: 0;
            text-align: center;
        }
    }
    & > .contactInfo {
        margin-top: 30px;
        & > p {
            margin-left: 30px;
        }

        @media only screen and ${breakpoint.device.sm} {
            width: 50%;
            float: left;
        }
    }
    & > .copyright {
        margin: 0;
        margin-left: 30px;
        margin-top: 30px;
        padding-bottom: 20px;
        font-size: .8rem;

        @media only screen and ${breakpoint.device.sm} {
            width: 100%;
            display: inline-block;
            margin-top: 30px;
            margin-left: 0;
            text-align: center;
            & > p {
                margin: 0 auto;
            }
        }
    }
`;

const StyledFbIcon = styled(BsFacebook)`
    margin-left: 30px;
    font-size: 2rem;
`;

const StyledGithubIcon = styled(BsGithub)`
    margin-left: 30px;
    font-size: 2rem;
`;

export default function Footer() {
    return (
        <StyledFooter>
            <ul className="navList">
                <li>
                    <Link to="header" smooth={true} duration={500}>Home</Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>O mnie</Link>
                </li>
                <li>
                    <Link to="offer" smooth={true} duration={500}>Oferta</Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={500}>Portfolio</Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>Kontakt</Link>
                </li>
            </ul>
            <div className="contactInfo">
                <p>kdobrowolski12345@gmail.com</p>
                <p>Tel. +48 506 490 865</p>
                <p>Starogard Gdański 83-200, Polska</p>
                <a href="https://www.facebook.com/KacperDobrowolski222/" target="_blank">
                    <StyledFbIcon />
                </a>
                <a href="https://github.com/kdobrowolski" target="_blank">
                    <StyledGithubIcon />
                </a>
            </div>
            <div className="copyright">
                <p>@ Copyright 2021 Kacper Dobrowolski</p>
            </div>
        </StyledFooter>
    )
}