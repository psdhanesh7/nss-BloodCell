import React from 'react';
import LogoSection from '../LogoSection/LogoSection';
import { bloodHandPulse } from '../../Assets/img';
import './HomeStyle/HomeStyle.css';
import Footer from '../Footer/Footer';
import LoginBox from '../LoginBox/LoginBox';

export default function Home(props) {
    return (
        <div className="home-page">
            <LogoSection />

            <div className="home-page-content">
                <img src={bloodHandPulse} alt="" />
                <h1>Blood Cell</h1>
                <LoginBox props={props} />
            </div>

            <Footer />
        </div>
    );
}
