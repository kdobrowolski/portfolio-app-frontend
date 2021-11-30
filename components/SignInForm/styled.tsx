import styled from 'styled-components';
import breakpoint from '../../utils/breakpoints';

export const StyledForm = styled.form`
    width: 60%;
    margin: 0 auto;
    text-align: center;
    & > input {
        width: 100%;
        border: 0;
        border-bottom: 1px solid #6c6c6c;
        padding: 10px;
        &:focus {
            outline: none;
            border-bottom: 2px solid #6574FE;
        }
    }
    & > label {
        display: block;
        margin-top: 30px;
        color: #6c6c6c;
        font-size: .9rem;
        text-align: left;
    }

    .error {
        color: red;
        display: block !important;
    }

    .hidden {
        display: none;
    }

    @media only screen and ${breakpoint.device.sm} {
        width: 50%;
    }
    @media only screen and ${breakpoint.device.md} {
        width: 40%;
    }
    @media only screen and ${breakpoint.device.lg} {
        width: 25%;
    }
`;