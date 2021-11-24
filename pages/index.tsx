import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Offer from '../components/Offer/Offer'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills/Skills'
import Layout from '../constants/Layout'
import Footer from '../constants/Footer';

interface Props {
  data?: any,
  api: string
}

const Home: NextPage<Props> = ({ data, api }) => {
  return (
    <div className="container">
      <Head>
        <title>Kacper Dobrowolski - Front-End Developer</title>
        <meta name="description" content="Strona portfolio - Kacper Dobrowolski" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"></link>
      </Head>

      <main className="main">
        <Layout>
            <Navbar />
            <Header />
            <About />
            <Skills />
            <Offer />
            <Projects />
            <Contact api={api}/>
        </Layout>
      </main>
      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(process.env.API + "/api/projects", { method: "GET" })
  const json = await res.json()

  return { props: { data: json, api: process.env.API } }
}

export default Home
