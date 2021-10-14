import styled from 'styled-components';
import breakpoint from '../../utils/breakpoints';

export const Nav = styled.nav`
    width: 100vw;
    height: 70px;
    max-width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    z-index: 99999 !important;
    border-bottom: 2px solid #FAFAFA;

    .nav-content {
        width: 80%;
        margin: 0 auto;
        height: 70px;

        @media only screen and ${breakpoint.device.lg} {
            width: 90%;
        }

        @media only screen and ${breakpoint.device.xl} {
            width: 70%;
        }
    }

    @media only screen and ${breakpoint.device.md} {
        .nav-content > .navListIcon {
            display: none;
        }
    }
`;

export const Logo = styled.span`
    display: block;
    font-size: 2.5rem;
    margin-top: 10px;
    float: left;
`;

export const StyledNavList = styled.ul`
    position: relative;
    top: 25px;
    display: none;
    margin: 0;
    float: right;
    li {
        display: inline-block;
        margin-right: 20px;
    }

    @media only screen and ${breakpoint.device.md} {
        display: block;
    }
`;