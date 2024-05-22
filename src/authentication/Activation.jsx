import React, { useState } from 'react';
import axios from 'axios';
import http from '../utils/fetchFromApi';

const ActivationPage = () => {
    const [uid, setUid] = useState('');
    const [token, setToken] = useState('');
    const [activationMessage, setActivationMessage] = useState('');

    const handleActivation = async () => {
        try {

            const response = await http.post('auth/users/activation/', {
                uid,
                token
            });

            // Handle successful activation
            if (response.data.success) {
                setActivationMessage('User activated successfully!');
            } else {
                setActivationMessage('Activation failed. Please check your UID and token.');
            }
        } catch (error) {
            console.error('Error during activation:', error);
            setActivationMessage('An error occurred during activation.');
        }
    };

    return (
        <div>
            <h1>User Activation</h1>

            <button onClick={handleActivation}>Activate User</button>
            <p>{activationMessage}</p>
        </div>
    );
};

export default ActivationPage;
