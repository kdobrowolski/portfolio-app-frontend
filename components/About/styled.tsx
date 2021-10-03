import styled from 'styled-components';

export const StyledAbout = styled.section`
    width: 100vw;

    .container {
        width: 80%;
        margin: auto;
    }
`;

export const StyledPhoto = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: blue;
    margin: auto;
    margin-top: 30px;
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
`;