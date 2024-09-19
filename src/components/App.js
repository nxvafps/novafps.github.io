import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import styles from '../styles/App.module.scss';

//pages
import Layout from "../pages/Layout"
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Socials from "../pages/Socials";
import Nv1 from "../pages/Nv1";
import Account from "../pages/Account";
import LogIn from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsOfService";

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const redirect = params.get('redirect');
        if (redirect) {
            navigate(redirect);
        }
    }, [navigate]);

    return(
        <div className={styles.background}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route 
                            index 
                            element={<Home />} 
                        />
                        <Route 
                            path="portfolio" 
                            element={<Portfolio />} 
                        />
                        <Route 
                            path="socials" 
                            element={<Socials />} 
                        />
                        <Route 
                            path="nv1" 
                            element={<Nv1 />} 
                        />
                        <Route
                            path='account' 
                            element= {<Account />}
                        />
                        <Route 
                            path='login' 
                            element={<LogIn />} 
                        />
                        <Route 
                            path='signup' 
                            element={<SignUp />} 
                        />
                        <Route 
                            path='privacypolicy'
                            element={<PrivacyPolicy />}
                        />
                        <Route 
                            path='termsofservice'
                            element={<TermsOfService />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter> 
        </div>
    );
}

export default App;