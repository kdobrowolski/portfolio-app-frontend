import Button from "../Button/Button";
import Image from 'next/image';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;
`;

export default function GalleryImage() {
    return (
        <StyledDiv className="gallery-image">
            <Image width="200px" height="150px" src="/images/coding.png" />
            <Button content="Usuń" />
        </StyledDiv>
    )
}