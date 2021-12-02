import type { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import SignInForm from '../../components/SignInForm/SignInForm';
import styled from 'styled-components';
import withAuth from '../../HOC/withAuth';

const StyledMain = styled.main`
    margin-top: 120px;
    text-align: center;
`;

interface Props {
    api: string
}

const AdminPage: NextPage<Props> = ({ api }) => {
    return (
        <div className="container">
            <Head>
                <title>Kacper Dobrowolski - Admin Panel</title>
            </Head>

            <StyledMain>
                <h2>Zaloguj się do panelu administratora</h2>
                <SignInForm api={api}/>
            </StyledMain>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {

    return { props: { api: process.env.API } }
  }

export default withAuth(AdminPage)