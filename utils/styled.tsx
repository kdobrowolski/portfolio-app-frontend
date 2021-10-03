import styled from 'styled-components';

export const StyledSectionTitle = styled.div`
    color: #6574FE;
    font-weight: bold;
    margin-left: 10px !important;
    font-size: 1.5rem;
    position: relative;
    margin-left: 10px;
    margin-top: 30px;

    &:after {
        content: '';
        width: 3px;
        height: 25px;
        background-color: #6574FE;
        position: absolute;
        display: block;
        top: 0;
        left: -10px;
    }

    p {
        margin: 0;
        font-size: .8rem !important;
        color: #666666;
    }
`;