import type { NextPage } from 'next';
import Head from 'next/head';
import AdminProject from '../../../components/AdminProject/AdminProject';
import Button from '../../../components/Button/Button';
import styles from '../../../styles/AdminProjects.module.css';

const AdminProjects: NextPage = () => {
    return (
        <div className="container">
            <Head>
                <title>Kacper Dobrowolski - Admin Panel</title>
                <meta name="description" content="Strona portfolio - Kacper Dobrowolski" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"></link>
            </Head>

            <main className={styles.main}>
                <h2>Projekty</h2>
                <Button content="Dodaj projekt" />
                <AdminProject />
                <AdminProject />
            </main>
        </div>
    )
}

export default AdminProjects