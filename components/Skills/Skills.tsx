import { StyledSkills } from './styled';
import { StyledSectionTitle } from '../../utils/styled';

export default function Skills() {
    return (
        <StyledSkills>
            <div className="container">
                <StyledSectionTitle right>
                    <span>Technologie</span>
                    <p>,które potrafię</p>
                </StyledSectionTitle>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>NextJS</li>
                    <li>ReactJS</li>
                    <li>SASS</li>
                    <li>Bootstrap</li>
                    <li>Tailwind CSS</li>
                    <li>RWD</li>
                    <li>Redux</li>
                    <li>TypeScript</li>
                </ul>
            </div>
        </StyledSkills>
    )
}