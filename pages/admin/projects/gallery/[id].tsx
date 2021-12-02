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
import withAuth from '../../../../HOC/withAuth';

const StyledMain = styled.main`
    padding-bottom: 30px;
    text-align: center;

    form {
        .error {
            color: red;
            display: block !important;
        }
        .hidden {
            display: none;
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
    const images = data.images;
    const [ error, setError ] = useState(false);

    const { register, handleSubmit, formState: { errors }, getValues } = useForm({
        resolver: yupResolver(ImageSchema)
    })

    const onSubmit = async () => {
        const formData = new FormData();
        formData.append('mainImage', getValues('image')[0]);
        const res = await axios.post(api + "/api/projects/" + id + "/images", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        })
        if(res.data.success) {
            window.location.reload();
        } else {
            setError(true);
        }
    }

    return (
        <div className="container">
            <Head>
                <title>Kacper Dobrowolski - Admin Panel</title>
            </Head>

            <StyledMain>
                <h2>Dodaj zdjęcie</h2>
                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                    <input {...register('image')} type="file" name="image"/>
                    <p className="error">{errors.image?.message}</p>
                    <p className={error ? "error": "hidden"}>Wystąpił błąd!</p>
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

export default withAuth(AdminProjectGallery)