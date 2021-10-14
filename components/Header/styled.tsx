import styled from 'styled-components';
import breakpoint from '../../utils/breakpoints';

export const StyledHeader = styled.header`
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    background-color: #FAFAFA;

    .banner-image {
        float: right;
        display: none;

        @media only screen and ${breakpoint.device.lg} {
            margin-right: 5%;
            margin-top: 75px;
            display: block;
        }
        @media only screen and ${breakpoint.device.xl} {
            margin-right: 15%;
            margin-top: 130px;
        }
        @media only screen and ${breakpoint.device.xxl} {
            margin-top: 200px;
            div {
                width: 400px;
                height: 400px;
            }
        }
    }
`;

export const StyledBanner = styled.div`
    position: relative;
    top: 150px;
    width: 80vw;
    margin: auto;

    .upper-text {
        color: #6574FE;
        font-weight: bold;
        font-size: 1.5rem;
        display: block;
        position: relative;
        top: 15px;
    }

    h1 {
        font-size: 2rem;
        color: #666666;
    }

    p {
        font-size: 1.2rem;
        color: #666666;
        font-weight: 400;
    }

    @media only screen and ${breakpoint.device.lg} {
        width: 40%;
        margin-left: 5%;
        float: left;

        .upper-text {
            font-size: 2rem !important;
        }

        h1 {
            font-size: 2.5rem !important;
        }

        p {
            font-size: 1.7rem !important;
        }
    }

    @media only screen and ${breakpoint.device.xl} {
        margin-left: 15%;

        .upper-text {
            font-size: 2.5rem !important;
        }

        h1 {
            font-size: 3rem !important;
        }

        p {
            font-size: 2.2rem !important;
        }
    }

    @media only screen and ${breakpoint.device.xxl} {
        top: 250px;
    }
`;