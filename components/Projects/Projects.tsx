import { useState } from 'react';
import { StyledProjects } from './styled';
import { StyledSectionTitle } from '../../utils/styled';
import Image from 'next/image';
import Gallery from '../Gallery/Gallery';
import Button from '../Button/Button';

interface Props {
    projects?: any
}

export default function Projects({ projects }: Props) {
    function toBase64(project: any, i:number) {
        const buffer = project.mainImage.data;
        const images = project.images;
        const b64 = Buffer.from(buffer).toString("base64");
        const mimeType = 'image/png';

        const [ opened, setOpened ] = useState(false);


        return (
            <div key={i}>
                <Image height="150px" width="150px" src={`data:${mimeType};base64,${b64}`} />
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <p>{project.date}</p>
                <Gallery images={images} opened={opened}/>
                <div className="galleryBtn" onClick={() => setOpened(true)}>
                    <Button content="Galeria" />
                </div>
                <span className={opened ? "showCloseBtn" : "hidden"} onClick={() => setOpened(false)}>X</span>
            </div>
        )
    }
    return (
        <StyledProjects id="projects">
            <div className="container">
                <StyledSectionTitle right>
                    <span>Projekty</span>
                    <p>jakie zrobiłem</p>
                </StyledSectionTitle>
                <div className="content">
                    {projects.map((project: any, i: number) => {
                        return (
                            toBase64(project, i)
                        )
                    })}
                    { projects.length < 1 ? <p className="center">Brak projektów</p> : null}
                </div>
            </div>
        </StyledProjects>
    )
}