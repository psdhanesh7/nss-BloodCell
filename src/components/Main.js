import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import AddRequirement from './innerComponents/AddRequirement/AddRequirement';
import ActiveRequirement from './innerComponents/ActiveRequirement/ActiveRequirement';
import ClosedRequirement from './innerComponents/ClosedRequirement/ClosedRequirement';
import HospitalList from './innerComponents/HospitalList/HospitalList';
import AddHospital from './innerComponents/AddHospital/AddHospital';
import DonorsList from './innerComponents/DonorsList/DonorsList';
import AddDonor from './innerComponents/AddDonor/AddDonor';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function Main(props) {
    return (
        <Router>
            <Header props={props} />
            <Route
                path="/nss-BloodCell/main/requirements/add"
                exact
                component={AddRequirement}
            />
            <Route
                path="/nss-BloodCell/main/requirements/active"
                exact
                component={ActiveRequirement}
            />
            <Route
                path="/nss-BloodCell/main/requirements/closed"
                exact
                component={ClosedRequirement}
            />
            <Route
                path="/nss-BloodCell/main/hospital/view"
                exact
                component={HospitalList}
            />
            <Route
                path="/nss-BloodCell/main/hospital/add"
                exact
                component={AddHospital}
            />
            <Route
                path="/nss-BloodCell/main/donors/view"
                exact
                component={DonorsList}
            />
            <Route
                path="/nss-BloodCell/main/donors/add"
                exact
                component={AddDonor}
            />
            <Footer />
        </Router>
    );
}
