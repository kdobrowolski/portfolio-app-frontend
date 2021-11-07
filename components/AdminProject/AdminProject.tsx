import { StyledProjectContainer } from './styled';
import Image from 'next/image';
import Button from '../Button/Button';

export default function AdminProject() {
    return (
        <StyledProjectContainer>
            <Image width="200px" height="150px" src="/images/coding.png" />
            <h3>Portfolio App</h3>
            <p>Moja prywatna strona do portfolio</p>
            <p>01.11.2021r.</p>
            <Button content="Edytuj projekt" />
            <Button content="Usun projekt" />
        </StyledProjectContainer>
    )
}