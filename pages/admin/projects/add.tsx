import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../../styles/AdminProjectAdd.module.css';

const AdminProjectAdd: NextPage = () => {
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
                <h2>Dodaj projekt</h2>
                <form>
                    <label htmlFor="name">Nazwa projektu</label>
                    <input type="text" name="name" />
                    <label htmlFor="description">Opis projektu</label>
                    <textarea name="description" />
                    <label htmlFor="date">Data projektu</label>
                    <input type="date" />
                    <label htmlFor="image">Zdj</label>
                    <input type="image" />
                </form>
            </main>
        </div>
    )
}

export default AdminProjectAdd