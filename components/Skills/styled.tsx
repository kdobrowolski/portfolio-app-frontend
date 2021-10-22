import styled from 'styled-components';
import breakpoint from '../../utils/breakpoints';

export const StyledSkills = styled.section`
    width: 100vw;
    max-width: 100%;
    background-color: #FAFAFA;
    padding-top: 1px;
    padding-bottom: 30px;

    .container {
        width: 80%;
        margin: auto;

        ul {
            margin-top: 30px;
            margin-bottom: 0;
            padding: 0;
            list-style: none;
            text-align: center;
            font-weight: 500;
            color: #6C6C6C;
            li {
                margin: 20px;
                margin-top: 15px;
            }
        }

        @media only screen and ${breakpoint.device.md} {
            ul {
                display: flex;
                flex-wrap: wrap;
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