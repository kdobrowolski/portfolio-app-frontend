import { StyledContact, StyledContactInfo, StyledContactForm } from './styled';
import { useState } from 'react';
import { StyledSectionTitle } from '../../utils/styled';
import { BsGeoAltFill, BsTelephoneFill, BsEnvelopeFill } from 'react-icons/bs';
import styled from 'styled-components';
import Button from '../Button/Button';
import breakpoint from '../../utils/breakpoints';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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
    const [ success, setSuccess ] = useState(false);
    const [ error, setError ] = useState(false);

    const { register, handleSubmit, formState:{ errors }, getValues } = useForm({
        resolver: yupResolver(ContactSchema),
    });
    const onSubmit = async () => {
        let body = {
            name: getValues('name'),
            email: getValues('email'),
            tel: getValues('phone'),
            msg: getValues('msg')
        }

        const res = await axios.post(api + "/api/user/sendEmail", body, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(res.data.success) {
            setSuccess(true);
        } else {
            setError(true);
        }
    }
    return (
        <StyledContact id="contact">
            <div className="container">
                <StyledSectionTitle>
                    Skontaktuj si?? ze mn??
                    <p>i ustalmy wsp??lny plan dzia??ania</p>
                </StyledSectionTitle>
                <div className="content">
                    <StyledContactForm>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register('name')} type="text" name="name" placeholder="Imi?? i nazwisko"/>
                            <p className="error">{errors.name?.message}</p>
                            <input {...register('email')} type="email" name="email" placeholder="Adres email"/>
                            <p className="error">{errors.email?.message}</p>
                            <input {...register('phone')} type="text" name="phone" placeholder="Numer telefonu"/>
                            <p className="error">{errors.phone?.message}</p>
                            <textarea {...register('msg')} name="msg" placeholder="Wiadomo????" />
                            <p className="error">{errors.msg?.message}</p>
                            <p className={success ? "success": "hidden"}>Wys??ano pomy??lnie!</p>
                            <p className={error ? "error": "hidden"}>Wyst??pi?? b????d!</p>
                            <Button content="Wy??lij" />
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
                        <p>Starogard Gda??ski 83-200</p>
                        <p>Polska, pomorskie</p>
                    </StyledContactInfo>
                </div>
            </div>
        </StyledContact>
    )
}