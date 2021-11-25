import type { NextPage, GetServerSideProps } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../../components/Button/Button';
import styled from 'styled-components';
import { ProjectSchema } from '../../../utils/yupSchemas';
import axios from 'axios';
import withAuth from '../../../HOC/withAuth';

const StyledMain = styled.main`
    text-align: center;
    padding-bottom: 30px;    

    form {
        label {
            display: block;
            margin-top: 20px;
            font-weight: bold;
        }
        input, textarea {
            margin-top: 10px;
        }
        textarea {
            height: 120px;
            resize: none;
        }
        .error {
            color: red;
        }
        .hidden {
            display: none;
        }
    
        .success {
            color: green;
            display: block !important;
        }
    }
`;

interface Props {
    api: string
}

const AdminProjectAdd: NextPage<Props> = ({ api }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState("");
    const [mainImage, setMainImage] = useState("");
    const [success, setSuccess] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(ProjectSchema)
    })

    const onSubmit = async () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', desc);
        formData.append('date', date);
        formData.append('mainImage', mainImage);
        const res = await axios.post(api + "/api/projects", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        })
        if(res.data.success) {
            setSuccess(true);
        }
    }

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
                <h2>Dodaj projekt</h2>
                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                    <label htmlFor="name">Nazwa projektu</label>
                    <input {...register('name')} onChange={e => { setTitle(e.currentTarget.value); }} id="title" type="text" name="name" />
                    <p className="error">{errors.name?.message}</p>
                    <label htmlFor="description">Opis projektu</label>
                    <textarea {...register('description')} onChange={e => { setDesc(e.currentTarget.value); }} id="desc" name="description" />
                    <p className="error">{errors.description?.message}</p>
                    <label htmlFor="date">Data projektu</label>
                    <input {...register('date')} onChange={e => { setDate(e.currentTarget.value); }} id="date" type="date" name="date"/>
                    <p className="error">{errors.date?.message}</p>
                    <label htmlFor="image">Główne zdjęcie</label>
                    <input {...register('image')} onChange={e => { setMainImage(e.currentTarget.files[0]); }} id="mainImage" type="file" name="image"/>
                    <p className="error">{errors.image?.message}</p>
                    <p className={success ? "success" : "hidden"}>Dodano pomyślnie!</p>
                    <Button content="Dodaj" />
                </form>
                <Button route="/admin/projects" content="Wróć" />
            </StyledMain>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    return { 
        props: {
            api: process.env.API
        }
    }
}

export default withAuth(AdminProjectAdd)