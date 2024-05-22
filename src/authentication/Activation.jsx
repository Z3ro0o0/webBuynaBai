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
                setActivationMessage('User activated successfully!');
            }
        } catch (error) {
            console.error('Error during activation:', error);
            setActivationMessage('An error occurred during activation.');
        }
    };

    return (
        <div>
            <h1>User Activation</h1>
            <input
                type="text"
                placeholder="UID"
                value={uid}
                onChange={(e) => setUid(e.target.value)}
            />
            <input
                type="text"
                placeholder="Token"
                value={token}
                onChange={(e) => setToken(e.target.value)}
            />
            <button onClick={handleActivation}>Activate User</button>
            <p>{activationMessage}</p>
        </div>
    );
};

export default ActivationPage;
