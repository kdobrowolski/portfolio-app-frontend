import styled from 'styled-components';

export const StyledHeader = styled.header`
    width: 100vw;
    height: 100vh;
    background-color: #FAFAFA;
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
`;