import { StyledAbout, StyledPhoto, StyledDescription } from './styled';
import { StyledSectionTitle } from '../../utils/styled';

export default function About() {
    return (
        <StyledAbout>
            <div className="container">
                <StyledSectionTitle>
                    O mnie
                    <p>kilka słów</p>
                </StyledSectionTitle>
                <StyledPhoto></StyledPhoto>
                <StyledDescription className="description">
                    <span className="text-bold">Cześć!</span><br />
                    Nazywam się Kacper i jestem <span className="text-mediumBold">Front-End Web Developerem.</span> Moją przygodę z tworzeniem aplikacje internetowych jak i z kodem rozpocząłem w wieku 16 lat, lecz w wieku 20 lat dopiero zacząłem myśleć o tym jako mojej przyszłej pracy. Aktualnie studiuje Informatykę o specjalizacji Front-End Web Developer na Wyższej Szkole Bankowej w Gdańsku.  Moimi głównymi technologiami, z którymi pracuje jest <span className="text-mediumBold">React.js oraz Next.js</span>
                </StyledDescription>
            </div>
        </StyledAbout>
    )
}