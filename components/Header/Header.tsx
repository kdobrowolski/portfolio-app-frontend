import Button from '../Button/Button';
import { StyledHeader, StyledBanner } from './styled';
import Image from 'next/image';

export default function Header() {
    return (
        <StyledHeader>
            <StyledBanner>
                <span className="upper-text">Hej, jestem Kacper</span>
                <h1>Frontend Web Developer</h1>
                <p>Stworzę dla Ciebie aplikacje internetową w React.js lub Next.js!</p>
                <Button content="Zapoznaj się" />
            </StyledBanner>
            <div className="banner-image">
                <Image src="/images/devices.png" width="350" height="350"/>
            </div>
        </StyledHeader>
    )
}