import Button from '../Button/Button';
import { useRouter } from "next/router";
import { useState } from 'react';
import { StyledForm } from './styled';
import axios from 'axios';

interface Props {
    api: string
}

export default function SignInForm({ api }: Props) {
    const Router = useRouter();
    const [ login, setLogin ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        let body = {
            login,
            password
        }
        
        const res = await axios.post(api + "/api/user/signIn", body, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(res.data.success) {
            let token = res.data.token;

            localStorage.setItem("token", token);

            Router.replace("/admin/dashboard");
        } else {
            setError(true);
        }
    }

    return (
        <StyledForm onSubmit={e => handleSubmit(e)}>
            <label htmlFor="login">Login</label>
            <input type="text" onChange={e => { setLogin(e.currentTarget.value); }} name="login" placeholder="Wpisz swój login"/>
            <label htmlFor="login">Hasło</label>
            <input type="password" onChange={e => { setPassword(e.currentTarget.value); }} name="password" placeholder="Wpisz swoje hasło"/>
            <p className={error ? "error" : "hidden"}>Nieprawidłowy login lub hasło!</p>
            <Button content="Zaloguj się" />
        </StyledForm>
    )
}