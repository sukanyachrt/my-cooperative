import React from 'react';
import { useRouter } from 'next/router';

function Login() {
    const router = useRouter();

    function loginPage() {
        router.push('/');
    }
    return (

        <div className="container-fluid position-relative d-flex p-0">

            {/* <div id="spinner" className="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div> */}

            <div className="container-fluid d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
                <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <h3 className="text-primary"><i className="fa fa-user-edit me-2"></i>สหกิจคณะวิทยาศาสตร์</h3>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" autoComplete='true' placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Username:</label>
                    </div>
                    <div className="form-floating mb-4">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password:</label>
                    </div>
                    <button onClick={loginPage} className="btn btn-info text-white py-3 w-100 mb-4">LOGIN</button>
                </div>
            </div>


        </div>
    );
}
Login.Layout = "none";
Login.pageProps = { useLayoutA: true };
export default Login;
