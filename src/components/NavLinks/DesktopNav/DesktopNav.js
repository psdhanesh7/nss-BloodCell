import React from 'react';
import './DesktopNavStyle/DesktopNavStyle.css';
import { Link } from 'react-router-dom';

export default function DesktopNav({ onLogout }) {
    return (
        <div className="navLink-component-desktop">
            <ul>
                <li>
                    <span>Requirements</span>
                    <ul>
                        <li>
                            <Link to="/nss-BloodCell/main/requirements/active">
                                Active Requirements
                            </Link>
                        </li>
                        <li>
                            <Link to="/nss-BloodCell/main/requirements/closed">
                                Closed Requirements
                            </Link>
                        </li>
                        <li>
                            <Link to="/nss-BloodCell/main/requirements/add">
                                Add Requirement
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <span>Hospital</span>
                    <ul>
                        <li>
                            <Link to="/nss-BloodCell/main/hospital/view">
                                Available Hospitals
                            </Link>
                        </li>
                        <li>
                            <Link to="/nss-BloodCell/main/hospital/add">
                                Add Hospital
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <span>Donor</span>
                    <ul>
                        <li>
                            <Link to="/nss-BloodCell/main/donors/view">
                                Available Donors
                            </Link>
                        </li>
                        <li>
                            <Link to="/nss-BloodCell/main/donors/add">
                                Add Donor
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <span onClick={() => onLogout()}>Logout</span>
                </li>
            </ul>
        </div>
    );
}
