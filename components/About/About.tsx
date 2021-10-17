import { StyledAbout, StyledPhoto, StyledDescription } from './styled';
import { StyledSectionTitle } from '../../utils/styled';

export default function About() {
    return (
        <StyledAbout id="about">
            <div className="container">
                <StyledSectionTitle>
                    O mnie
                    <p>kilka słów</p>
                </StyledSectionTitle>
                <div className="content">
                    <StyledPhoto></StyledPhoto>
                    <StyledDescription className="description">
                        <span className="text-bold">Cześć!</span><br />
                        Nazywam się Kacper i jestem <span className="text-mediumBold">Front-End Web Developerem.</span> Moją przygodę z tworzeniem aplikacje internetowych jak i z kodem rozpocząłem w wieku 16 lat, lecz w wieku 20 lat dopiero zacząłem myśleć o tym jako mojej przyszłej pracy. Aktualnie studiuje Informatykę o specjalizacji Front-End Web Developer na Wyższej Szkole Bankowej w Gdańsku.  Moimi głównymi technologiami, z którymi pracuje jest <span className="text-mediumBold">React.js oraz Next.js.</span>
                    </StyledDescription>
                </div>
            </div>
        </StyledAbout>
    )
}