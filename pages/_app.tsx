import '../styles/globals.css'
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Loading from '../components/Loading/Loading';

interface Props {
  Component: any,
  pageProps: any
}

function MyApp({ Component, pageProps }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 300)
    });
  
    return (
      <>
            <Loading loading={loading} />  
            <Component {...pageProps} />
      </>
    );
  }
  
  export default MyApp;