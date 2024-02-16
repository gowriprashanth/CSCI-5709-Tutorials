import React from 'react';
import { useLocation } from 'react-router-dom';

function Profile() {    
    const url = useLocation();
    const params = new URLSearchParams(url.search);
    const firstname = params.get('firstname') || 'N/A';
    const lastname = params.get('lastname') || 'N/A';
    const email = params.get('email') || 'N/A';

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