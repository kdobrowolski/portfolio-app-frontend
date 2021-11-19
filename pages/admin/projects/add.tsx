import type { NextPage } from 'next';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../../components/Button/Button';
import styled from 'styled-components';
import { ProjectSchema } from '../../../utils/yupSchemas';

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
    }
`;

const AdminProjectAdd: NextPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(ProjectSchema)
    })

    const onSubmit = () => {
        console.log('elo');
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">Nazwa projektu</label>
                    <input {...register('name')} type="text" name="name" />
                    <p className="error">{errors.name?.message}</p>
                    <label htmlFor="description">Opis projektu</label>
                    <textarea {...register('description')} name="description" />
                    <p className="error">{errors.description?.message}</p>
                    <label htmlFor="date">Data projektu</label>
                    <input {...register('date')} type="date" name="date"/>
                    <p className="error">{errors.date?.message}</p>
                    <label htmlFor="image">Główne zdjęcie</label>
                    <input {...register('image')} type="file" name="image"/>
                    <p className="error">{errors.image?.message}</p>
                    <Button content="Dodaj" />
                </form>
                <Button route="/admin/projects" content="Wróć" />
            </StyledMain>
        </div>
    )
}

export default AdminProjectAdd