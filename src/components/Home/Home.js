import React, { Component } from 'react';
import LogoSection from '../LogoSection/LogoSection';
import { bloodHandPulse } from '../../Assets/img';
import './HomeStyle/HomeStyle.css';
import Footer from '../Footer/Footer';
import LoginBox from '../LoginBox/LoginBox';
import ActiveRequirement from '../innerComponents/ActiveRequirement/ActiveRequirement';
import { connect } from 'react-redux';
import Main from '../Main';

class Home extends Component {

    renderHelper() {
        // console.log(this.props);
        switch(this.props.auth) {
            case null:
                return 'We are still waiting for info';
            case false:
                return (
                    <div>
                        <LogoSection />
                        <div className="home-page-content">
                            <img src={bloodHandPulse} alt="" />
                            <h1>Blood Cell</h1>
                            <LoginBox props={this.props} />
                        </div>
                    </div>
                )
            default:
                return (
                    <div>
                        <Main />
                    </div>
                );
        }
    }

    render() {
        return (
            <div className="home-page">
                { this.renderHelper() }
                <Footer />
            </div>
        );
    } 
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Home);
