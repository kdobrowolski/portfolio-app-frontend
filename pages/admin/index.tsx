import type { NextPage } from 'next';
import Head from 'next/head';
import SignInForm from '../../components/SignInForm/SignInForm';
import styled from 'styled-components';

const StyledMain = styled.main`
    margin-top: 120px;
    text-align: center;
`;

const AdminPage: NextPage = () => {
    return (
        <div className="container">
            <Head>
                <title>Kacper Dobrowolski - Admin Panel</title>
                <meta name="description" content="Strona portfolio - Kacper Dobrowolski" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"></link>
            </Head>

            <StyledMain>
                <h2>Zaloguj się do panelu administratora</h2>
                <SignInForm />
            </StyledMain>
        </div>
    )
}

export default AdminPage