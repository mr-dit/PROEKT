import React from 'react';
import { redirect } from 'react-router-dom';

function withAuth(Component) {
    return function AuthenticatedComponent(props) {
        const token = localStorage.getItem('token');

        if (!token) {
            redirect('/auth')
        }

        return <Component {...props} />;
    };
}

export default withAuth;
