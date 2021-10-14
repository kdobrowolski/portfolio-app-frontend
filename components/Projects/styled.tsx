import styled from 'styled-components';
import breakpoint from '../../utils/breakpoints';

export const StyledProjects = styled.section`
    width: 100vw;
    max-width: 100%;
    background-color: #FAFAFA;
    
    .container {
        width: 80%;
        margin: auto;
        padding-top: 1px;

        .content {
            text-align: center;
            color: #6c6c6c;
            margin: 0;
            margin-top: 30px;
            padding-bottom: 30px;
        }

        @media only screen and ${breakpoint.device.lg} {
            width: 70%;
        }

        @media only screen and ${breakpoint.device.xl} {
            width: 50%;
        }
    }
`;