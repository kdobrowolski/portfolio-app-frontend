import styled from 'styled-components';
import breakpoint from '../../utils/breakpoints';

export const StyledContact = styled.section`
    width: 100vw;
    max-width: 100%;
    padding-bottom: 40px;

    .container {
        width: 80%;
        margin: auto;

        @media only screen and ${breakpoint.device.md} {
            & > .content {
                display: flex;
                margin-top: 50px;
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

export const StyledContactInfo = styled.div`
    width: 100%;
    margin-top: 40px;
    text-align: center;

    & > h3 {
        margin: 0;
        margin-top: 10px;
        font-size: 1.2rem;
    }

    & > p {
        margin: 0;
        margin-top: 5px;
        font-size: .9rem;
        color: #6c6c6c;
    }

    @media only screen and ${breakpoint.device.md} {
        position: relative;
        width: 30%;
        order: 1;
        margin: 0;

        & > h3 {
            font-size: 1rem;
        }

        & > p {
            font-size: .7rem;
        }

        &:after {
            position: absolute;
            content: "";
            height: 70%;
            width: 2px;
            right: 0;
            top: 15%;
            background-color: #6c6c6c;
        }
    }
`;

export const StyledContactForm = styled.div`
    margin-top: 20px;
     form {
         & > input, textarea {
             width: 100%;
             margin-top: 20px;
             padding: 10px;
             background-color: rgb(241, 242, 255);
             border: 0;
             border-radius: 5px;
         }
         & > textarea {
            height: 150px;
            resize: none;
            font-family: 'Roboto', sans-serif;
         }
         & > .error {
             margin-bottom: 0;
             color: red;
         }
     }

    @media only screen and ${breakpoint.device.md} {
        width: 70%;
        order: 2;
        margin: 0;

        & > form {
            width: 70%;
            margin: 0 auto;
            text-align: center;
        }
    }
`;