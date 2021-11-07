import Button from '../Button/Button';
import { StyledForm } from './styled';

export default function SignInForm() {
    return (
        <StyledForm>
            <label htmlFor="login">Login</label>
            <input type="text" name="login" placeholder="Wpisz swój login"/>
            <label htmlFor="login">Hasło</label>
            <input type="password" name="password" placeholder="Wpisz swoje hasło"/>
            <Button content="Zaloguj się" />
        </StyledForm>
    )
}