import { StyledProjectContainer } from './styled';
import Image from 'next/image';
import Button from '../Button/Button';

interface Props {
    itemID: string,
    title: string,
    desc: string,
    image: string,
    date: string
}

export default function AdminProject({ itemID, title, desc, image, date }: Props) {
    const galleryRoute = `/admin/projects/gallery/${itemID}`;
    const editProjectRoute = `/admin/projects/edit/${itemID}`;
    console.log(itemID)
    return (
        <StyledProjectContainer>
            <Image width="200px" height="150px" src={image} />
            <h3>{ title }</h3>
            <p>{ desc }</p>
            <p>{ date }</p>
            <Button route={galleryRoute} content="Galeria" /> <br />
            <Button route={editProjectRoute} content="Edytuj projekt" /> <br />
            <Button content="Usun projekt" />
        </StyledProjectContainer>
    )
}