import styled from 'styled-components';
import breakpoint from '../../utils/breakpoints';

export const Nav = styled.nav`
    position: fixed;
    width: 100vw;
    max-width: 100%;
    top: 0;
    left: 0;
    z-index: 99999 !important;
    background-color: white;
    border-bottom: 2px solid #FAFAFA;

    .nav-content {
        width: 80%;
        height: 70px;
        margin: 0 auto;

        .closeIcon {
            position: absolute;
            top: 10px;
            right: 13%;
            display: none;
            font-size: 2.5rem;
        }

        @media only screen and ${breakpoint.device.lg} {
            width: 90%;
        }

        @media only screen and ${breakpoint.device.xl} {
            width: 70%;
        }
    }

    .openedNav {
        height: 100vh;
        .navList {
            display: block;
            float: none;
            top: 50px;
            padding: 0;
            text-align: center;
            a {
                display: block;
                margin-right: 0;
                margin-top: 30px;
                font-size: 2rem;
            }
        }
        .closeIcon {
            display: block;
        }
        .logo {
            float: none;
        }
        .navListIcon {
            display: none;
        }
    }

    @media only screen and ${breakpoint.device.md} {
        .nav-content > .navListIcon {
            display: none !important;
        }
    }
`;

export const Logo = styled.div`
    display: block;
    float: left;
    margin-top: 10px;
    font-size: 2.5rem;

    &:hover {
        cursor: pointer;
    }
`;

export const StyledNavList = styled.ul`
    position: relative;
    display: none;
    float: right;
    top: 25px;
    margin: 0;
    a {
        display: inline-block;
        margin-right: 20px;

        &:hover {
            cursor: pointer;
        }
    }

    @media only screen and ${breakpoint.device.md} {
        display: block;
    }
`;