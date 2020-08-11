import React from 'react';
import { nssLogo } from '../../Assets/img';
import './LogoSectionStyle/LogoSectionStyle.css';

export default function LogoSection() {
    return (
        <div className="logo-section">
            <img src={nssLogo} alt="" />
            <div className="logo-name">
                <h1>National Service Scheme</h1>
                <h3>College of Engineering Trivandram</h3>
            </div>
        </div>
    );
}
