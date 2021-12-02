import { StyledProjectContainer } from './styled';
import Image from 'next/image';
import Button from '../Button/Button';

interface Props {
    itemID: string,
    title: string,
    desc: string,
    image: any,
    date: string,
    api: string
}

export default function AdminProject({ itemID, title, desc, image, date, api }: Props) {
    const galleryRoute = `/admin/projects/gallery/${itemID}`;
    const editProjectRoute = `/admin/projects/edit/${itemID}`;
    const buffer = image.data;
    const b64 = Buffer.from(buffer).toString("base64");
    const mimeType = 'image/png';

    const deleteProject = async () => {
        const res = await fetch(api + "/api/projects/" + itemID, { method: "DELETE" })
        const json = await res.json()
        if(json.success) {
            window.location.reload();
        }
    }
    return (
        <StyledProjectContainer>
            <Image height="200px" width="200px" src={`data:${mimeType};base64,${b64}`} alt="Project image"/>
            <h3>{ title }</h3>
            <p>{ desc }</p>
            <p>{ date }</p>
            <Button route={galleryRoute} content="Galeria" /> <br />
            <Button route={editProjectRoute} content="Edytuj projekt" /> <br />
            <Button content="Usun projekt" onClickFunction={deleteProject}/>
        </StyledProjectContainer>
    )
}