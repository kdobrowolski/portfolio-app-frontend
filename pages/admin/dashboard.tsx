import type { NextPage } from 'next';
import Head from 'next/head';
import Button from '../../components/Button/Button';
import styles from '../../styles/AdminDashboard.module.css';

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

            <main className={styles.main}>
                <h2>Admin panel</h2>
                <Button content="Zarządzaj projektami" />
                <Button content="Wyloguj się" />
            </main>
        </div>
    )
}

export default AdminDashboard