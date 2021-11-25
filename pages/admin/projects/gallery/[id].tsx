import type { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/router'
import { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import GalleryImage from '../../../../components/GalleryImage/GalleryImage';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ImageSchema } from '../../../../utils/yupSchemas';
import Button from '../../../../components/Button/Button';
import axios from 'axios';

const StyledMain = styled.main`
    padding-bottom: 30px;
    text-align: center;

    form {
        .error {
            color: red;
        }
    }
`;

interface Props {
    data?: any,
    api: string
}

const AdminProjectGallery: NextPage<Props> = ({ api, data }) => {
    const router = useRouter()
    const { id } = router.query
    const [ image, setImage ] = useState('');
    const images = data.images;

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(ImageSchema)
    })

    const onSubmit = async () => {
        const formData = new FormData();
        formData.append('image', image);
        const res = await axios.post(api + "/api/projects/" + id + "/images", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        })
        if(res.data.success) {
            window.location.reload();
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
                <h2>Dodaj zdjęcie</h2>
                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                    <input {...register('image')} onChange={e => { setImage(e.currentTarget.files[0]); }} type="file" name="image"/>
                    <p className="error">{errors.image?.message}</p>
                    <Button content="Dodaj" />
                </form>
                <h2>Galeria</h2>
                {images.map((image: any, i: number) => {
                    return (<GalleryImage key={i} itemID={image._id} projectID={id} image={image} api={api}/>)
                })}
                <Button route="/admin/projects" content="Wróć" />
            </StyledMain>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const id = query.id;
    const res = await fetch(process.env.API + "/api/projects/" + id + "/images", { method: "GET" })
    const json = await res.json()

    return { props: { data: json, api: process.env.API } }
}

export default AdminProjectGallery