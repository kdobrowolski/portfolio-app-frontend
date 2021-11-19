import type { NextPage } from 'next';
import Head from 'next/head';
import Button from '../../components/Button/Button';
import styled from 'styled-components';

const StyledMain = styled.main`
    margin-top: 100px;
    text-align: center;
    button {
        width: 60%;
    }
`;

const AdminDashboard: NextPage = () => {
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
                <h2>Admin panel</h2>
                <Button route="/admin/projects" content="Zarządzaj projektami" />
                <Button content="Wyloguj się" />
            </StyledMain>
        </div>
    )
}

export default AdminDashboard