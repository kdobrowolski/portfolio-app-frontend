import type { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import AdminProject from '../../../components/AdminProject/AdminProject';
import Button from '../../../components/Button/Button';
import styled from 'styled-components';

const StyledMain = styled.main`
    text-align: center;
    padding-bottom: 30px;
`;

interface Props {
    projects?: any
}

const AdminProjects: NextPage<Props> = ({ projects }) => {
    console.log(projects);
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
                    return (<AdminProject key={i} itemID={project._id} title={project.title} desc={project.description} date={project.date} image={project.mainImage}/>)
                })}
                <Button route="/admin/dashboard" content="Wróć"/>
            </StyledMain>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(process.env.API + "/api/projects", { method: "GET" })
    const json = await res.json()

    return { props: json }
  }

export default AdminProjects