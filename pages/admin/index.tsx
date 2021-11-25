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
                <meta name="description" content="Strona portfolio - Kacper Dobrowolski" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"></link>
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