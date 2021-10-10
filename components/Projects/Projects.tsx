import { StyledProjects } from './styled';
import { StyledSectionTitle } from '../../utils/styled';

export default function Projects() {
    return (
        <StyledProjects>
            <div className="container">
                <StyledSectionTitle right>
                    <span>Projekty</span>
                    <p>jakie zrobiłem</p>
                </StyledSectionTitle>
                <div className="content">
                    Aktualnie brak projektów, którymi mógłbym się pochwalić
                </div>
            </div>
        </StyledProjects>
    )
}