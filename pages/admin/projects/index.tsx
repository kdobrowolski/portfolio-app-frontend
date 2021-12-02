import type { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import AdminProject from '../../../components/AdminProject/AdminProject';
import Button from '../../../components/Button/Button';
import styled from 'styled-components';
import withAuth from '../../../HOC/withAuth';

const StyledMain = styled.main`
    text-align: center;
    padding-bottom: 30px;
`;

interface Props {
    data?: any,
    api: string
}

const AdminProjects: NextPage<Props> = ({ data, api }) => {
    const projects = data.projects;
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
                <h2>Projekty</h2>
                <Button route="/admin/projects/add" content="Dodaj projekt" />
                {projects.map((project: any, i: number) => {
                    return (<AdminProject key={i} itemID={project._id} title={project.title} desc={project.description} date={project.date} image={project.mainImage} api={api}/>)
                })}
                <br />
                <Button route="/admin/dashboard" content="Wróć"/>
            </StyledMain>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(process.env.API + "/api/projects", { method: "GET" })
    const json = await res.json()

    return { props: { data: json, api: process.env.API } }
}

export default withAuth(AdminProjects)