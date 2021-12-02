import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Button from '../../components/Button/Button';
import styled from 'styled-components';
import withAuth from '../../HOC/withAuth';

const StyledMain = styled.main`
    margin-top: 100px;
    text-align: center;
    button {
        width: 60%;
    }
`;

const AdminDashboard: NextPage = () => {
    const Router = useRouter();

    const logout = () => {
        localStorage.removeItem('token');

        Router.replace('/admin');
    }
    return (
        <div className="container">
            <Head>
                <title>Kacper Dobrowolski - Admin Panel</title>
            </Head>

            <StyledMain>
                <h2>Admin panel</h2>
                <Button route="/admin/projects" content="Zarządzaj projektami" />
                <Button content="Wyloguj się" onClickFunction={logout}/>
            </StyledMain>
        </div>
    )
}

export default withAuth(AdminDashboard)