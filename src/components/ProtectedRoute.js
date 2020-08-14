import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './auth';
import { connect } from 'react-redux';

function ProtectedRoute({ component: Component, ...rest }){
    return (
        <Route
            {...rest}
            render={(props) => {
                // console.log(props);
                if (props.auth) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: '/nss-BloodCell/',
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(ProtectedRoute);
