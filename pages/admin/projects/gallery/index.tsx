import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import GalleryImage from '../../../../components/GalleryImage/GalleryImage';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ImageSchema } from '../../../../utils/yupSchemas';
import Button from '../../../../components/Button/Button';

const StyledMain = styled.main`
    padding-bottom: 30px;
    text-align: center;

    form {
        .error {
            color: red;
        }
    }
`;


const AdminProjects: NextPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(ImageSchema)
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
                <h2>Dodaj zdjęcie</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register('image')} type="file" name="image"/>
                    <p className="error">{errors.image?.message}</p>
                    <Button content="Dodaj" />
                </form>
                <h2>Galeria</h2>
                <GalleryImage />
                <GalleryImage />
                <Button route="/admin/projects" content="Wróć" />
            </StyledMain>
        </div>
    )
}

export default AdminProjects