import React, { useState } from 'react';
import { hamburgerCross, logout } from '../../../Assets/img';
import { Link } from 'react-router-dom';

import './MobileNavStyle/MobileNavStyle.css';

export default function MobileNav({ changeHamburgerStatus, onLogout }) {
    const [activeLink, setActiveLink] = useState([
        { ActiveRequirement: true },
        { ClosedRequirement: false },
        { AddRequirement: false },
        { hospital: false },
        { addHospital: false },
        { donor: false },
        { AddDonor: false }
    ]);

    const findActiveLink = (link) => {
        changeHamburgerStatus();
        console.log(activeLink.length);
        activeLink.forEach((item) => {});
        // switch (link) {
        //     case 'requirement':
        //         setActiveLink({ ...activeLink });
        //         break;

        //     default:
        //         break;
        // }
    };

    return (
        <div className="navLink-component-mobile">
            <img src={hamburgerCross} onClick={changeHamburgerStatus} alt="" />

            <ul>
                <li>
                    <span>Requirements</span>
                    <ul>
                        <li>
                            <Link
                                to="/nss-BloodCell/main/requirements/active"
                                className={activeLink && 'active-link'}
                                onClick={findActiveLink}
                            >
                                Active Req.
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/nss-BloodCell/main/requirements/closed"
                                onClick={findActiveLink}
                            >
                                Closed Req.
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/nss-BloodCell/main/requirements/add"
                                onClick={findActiveLink}
                            >
                                Add Req.
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <span>Hospital</span>
                    <ul>
                        <li>
                            <Link
                                to="/nss-BloodCell/main/hospital/view"
                                onClick={findActiveLink}
                            >
                                Available Hospitals
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/nss-BloodCell/main/hospital/add"
                                onClick={findActiveLink}
                            >
                                Add Hospital
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <span>Donor</span>
                    <ul>
                        <li>
                            <Link
                                to="/nss-BloodCell/main/donors/view"
                                onClick={findActiveLink}
                            >
                                Available Donors
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/nss-BloodCell/main/donors/add"
                                onClick={findActiveLink}
                            >
                                Add Donor
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <span className="logout-mobile" onClick={() => onLogout()}>
                        <img src={logout} alt="" />
                        Logout
                    </span>
                </li>
            </ul>
        </div>
    );
}
