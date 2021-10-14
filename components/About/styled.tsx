import styled from 'styled-components';
import breakpoint from '../../utils/breakpoints';

export const StyledAbout = styled.section`
    width: 100vw;
    max-width: 100%;

    .container {
        width: 80%;
        margin: auto;
        
        @media only screen and ${breakpoint.device.md} {
            .content {
                display: inline-flex;
            }
        }

        @media only screen and ${breakpoint.device.lg} {
            width: 70%;
        }

        @media only screen and ${breakpoint.device.xl} {
            width: 50%;
        }
    }
    
`;

export const StyledPhoto = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: blue;
    margin: auto;
    margin-top: 30px;
    background-image: url("./images/myphoto.jpg");
    background-position: center;
    background-size: cover;

    @media only screen and ${breakpoint.device.md} {
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 100px;
        position: relative;
    }

    @media only screen and ${breakpoint.device.xl} {
        margin: 0;
        margin-top: 50px !important;
    }
    
`;

export const StyledDescription = styled.div`
    color: #6C6C6C;
    margin-top: 30px;
    margin-bottom: 30px;

    .text-bold {
        color: #6574FE;
        font-weight: bold;
        font-size: 1.3rem;
    }
    .text-mediumBold {
        color: #6574FE;
        font-weight: 500;
    }

    @media only screen and ${breakpoint.device.md} {
        margin-left: 30px;
    }

    @media only screen and ${breakpoint.device.xl} {
        width: 60%;
        margin-left: 75px;
    }
`;