import { StyledContact, StyledContactInfo, StyledContactForm } from './styled';
import { StyledSectionTitle } from '../../utils/styled';
import { BsGeoAltFill, BsTelephoneFill, BsEnvelopeFill } from 'react-icons/bs';
import styled from 'styled-components';
import Button from '../Button/Button';
import breakpoint from '../../utils/breakpoints';

const StyledGeoAlt = styled(BsGeoAltFill)`
    color: #6574FE;
    font-size: 2.5rem;
    margin-top: 30px;

    @media only screen and ${breakpoint.device.md} {
        font-size: 2rem;
    }
`;

const StyledTelephone = styled(BsTelephoneFill)`
    color: #6574FE;
    font-size: 2.5rem;
    margin-top: 30px;

    @media only screen and ${breakpoint.device.md} {
        font-size: 2rem;
    }
`;

const StyledEnvelope = styled(BsEnvelopeFill)`
    color: #6574FE;
    font-size: 2.5rem;
    margin-top: 30px;

    @media only screen and ${breakpoint.device.md} {
        font-size: 2rem;
    }
`;

export default function Contact() {
    return (
        <StyledContact>
            <div className="container">
                <StyledSectionTitle>
                    Skontaktuj się ze mną
                    <p>i ustalmy wspólny plan działania</p>
                </StyledSectionTitle>
                <div className="content">
                    <StyledContactForm>
                        <form>
                            <input type="text" name="name" placeholder="Imię i nazwisko"/>
                            <input type="email" name="email" placeholder="Adres email"/>
                            <input type="number" name="phone" placeholder="Numer telefonu"/>
                            <textarea name="msg" placeholder="Wiadomość" />
                            <Button content="Wyślij" />
                        </form>
                    </StyledContactForm>
                    <StyledContactInfo>
                        <StyledEnvelope/>
                        <h3>Adres email</h3>
                        <p>kdobrowolski12345@gmail.com</p>
                        <StyledTelephone/>
                        <h3>Numer telefonu</h3>
                        <p>+48 506 490 865</p>
                        <StyledGeoAlt/>
                        <h3>Adres</h3>
                        <p>Starogard Gdański 83-200</p>
                        <p>Polska, pomorskie</p>
                    </StyledContactInfo>
                </div>
            </div>
        </StyledContact>
    )
}