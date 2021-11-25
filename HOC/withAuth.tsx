import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from 'axios';

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);

    useEffect(() => {
        const auth = async () => {
            const token = localStorage.getItem("token");
            if (!token && Router.pathname != "/admin") {
                Router.replace("/admin");
            } else {
                const res = await axios.post(process.env.NEXT_PUBLIC_API + "/api/user/auth", { token: token }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if(Router.pathname == "/admin") {
                  if(res.data.success) {
                    Router.replace("/admin/dashboard");
                  } else {
                    setVerified(true);
                  }
                } else {
                  if (res.data.success) {
                    setVerified(res.data.success);
                } else {
                    localStorage.removeItem("token");
                    Router.replace("/admin");
                }
                }
            }
        }

        auth();
    }, []);

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;