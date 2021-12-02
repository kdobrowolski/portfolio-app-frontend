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

interface Props {
    image: any,
    itemID: string,
    api: string,
    projectID: any
}

export default function GalleryImage({ image, itemID, api, projectID }: Props) {
    console.log(projectID);
    const buffer = image.image.data;
    const b64 = Buffer.from(buffer).toString("base64");
    const mimeType = 'image/png';

    const deleteImage = async () => {
        const res = await fetch(api + "/api/projects/" + projectID + "/images/" + itemID, { method: "DELETE" })
        const json = await res.json()
        if(json.success) {
            window.location.reload();
        }
    }

    return (
        <StyledDiv className="gallery-image">
            <Image height="200px" width="200px" src={`data:${mimeType};base64,${b64}`} alt="Gallery image"/>
            <Button content="Usuń" onClickFunction={deleteImage}/>
        </StyledDiv>
    )
}