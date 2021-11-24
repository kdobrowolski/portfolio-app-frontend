import { StyledContact, StyledContactInfo, StyledContactForm } from './styled';
import { useState } from 'react';
import { StyledSectionTitle } from '../../utils/styled';
import { BsGeoAltFill, BsTelephoneFill, BsEnvelopeFill } from 'react-icons/bs';
import styled from 'styled-components';
import Button from '../Button/Button';
import breakpoint from '../../utils/breakpoints';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import 'yup-phone';
import { ContactSchema } from '../../utils/yupSchemas';
import axios from 'axios';

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

interface Props {
    api: string
}

export default function Contact({ api }: Props) {
    const [ name, setName ] = useState(""); 
    const [ email, setEmail ] = useState(""); 
    const [ phone, setPhone ] = useState(""); 
    const [ msg, setMsg ] = useState(""); 
    const [ success, setSuccess ] = useState(false);

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(ContactSchema),
    });
    const onSubmit = async () => {
        let body = {
            name,
            email,
            tel: phone,
            msg
        }

        const res = await axios.post(api + "/api/user/sendEmail", body, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(res.data.success) {
            setSuccess(true);
        }
    }
    return (
        <StyledContact id="contact">
            <div className="container">
                <StyledSectionTitle>
                    Skontaktuj się ze mną
                    <p>i ustalmy wspólny plan działania</p>
                </StyledSectionTitle>
                <div className="content">
                    <StyledContactForm>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register('name')} onChange={e => { setName(e.currentTarget.value); }} type="text" name="name" placeholder="Imię i nazwisko"/>
                            <p className="error">{errors.name?.message}</p>
                            <input {...register('email')} onChange={e => { setEmail(e.currentTarget.value); }} type="email" name="email" placeholder="Adres email"/>
                            <p className="error">{errors.email?.message}</p>
                            <input {...register('phone')} onChange={e => { setPhone(e.currentTarget.value); }} type="text" name="phone" placeholder="Numer telefonu"/>
                            <p className="error">{errors.phone?.message}</p>
                            <textarea {...register('msg')} onChange={e => { setMsg(e.currentTarget.value); }} name="msg" placeholder="Wiadomość" />
                            <p className="error">{errors.msg?.message}</p>
                            <p className={success ? "success": "hidden"}>Wysłano pomyślnie!</p>
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