import styled from 'styled-components';

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
`;