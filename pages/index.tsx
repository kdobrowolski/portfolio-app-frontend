import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../constants/Layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kacper Dobrowolski - Front-End Developer</title>
        <meta name="description" content="Strona portfolio - Kacper Dobrowolski" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Layout>
          
        </Layout>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export default Home
