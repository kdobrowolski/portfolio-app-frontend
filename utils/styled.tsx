import styled from 'styled-components';

export const StyledSectionTitle = styled.div<{right?: Boolean}>`
    color: #6574FE;
    font-weight: bold;
    margin-left: 10px !important;
    font-size: 1.5rem;
    position: relative;
    margin-left: ${props => props.right ? "0" : "10px"};
    margin-top: 30px;
    text-align: ${props => props.right ? "right" : "left"};

    &:after {
        content: '';
        width: 3px;
        height: 25px;
        background-color: #6574FE;
        position: absolute;
        display: block;
        top: 0;
        left: ${props => props.right ? "inherit" : "-10px"};
        right: ${props => props.right ? "0px" : "inherit"};
    }

    p {
        margin: 0;
        font-size: .8rem !important;
        color: #666666;
    }

    span, p {
        display: block;
        margin-right: ${props => props.right ? "10px" : "0"};
    }
`;