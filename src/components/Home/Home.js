import React from 'react';
import LogoSection from '../LogoSection/LogoSection';
import { bloodHandPulse } from '../../Assets/img';
import './HomeStyle/HomeStyle.css';
import Footer from '../Footer/Footer';

export default function Home() {
    return (
        <div className="home-page">
            <LogoSection />

            <div className="home-page-content">
                <img src={bloodHandPulse} alt="" />
                <h1>Blood Cell</h1>
                <div className="quote">
                    “ A single pint can save three lives, a single gesture can
                    create a million smiles ”
                </div>
                <div className="button-login">
                    <a href="#">Login</a>
                </div>
            </div>

            <Footer />
        </div>
    );
}
