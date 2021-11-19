import Button from "../Button/Button";
import Image from 'next/image';
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin-top: 30px;

    div, button {
        display: block;
        margin: 0 auto;
    }
    button {
        margin-top: 20px;
    }
`;

export default function GalleryImage() {
    return (
        <StyledDiv className="gallery-image">
            <Image width="200px" height="150px" src="/images/coding.png" /> 
            <Button content="Usuń" />
        </StyledDiv>
    )
}