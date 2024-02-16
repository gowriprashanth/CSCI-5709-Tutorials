import React from 'react';
import { useLocation } from 'react-router-dom';

function Profile() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const firstname = queryParams.get('firstname') || 'N/A';
    const lastname = queryParams.get('lastname') || 'N/A';
    const email = queryParams.get('email') || 'N/A';

    return (
        <div>
            <h1>Profile Page</h1>
            <p>First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Email: {email}</p>
        </div>
    );
}

export default Profile;