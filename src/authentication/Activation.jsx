import React, { useState } from 'react';
import axios from 'axios';

const ActivationPage = () => {
    const [uid, setUid] = useState('');
    const [token, setToken] = useState('');
    const [activationMessage, setActivationMessage] = useState('');

    const handleActivation = async () => {
        try {

            const response = await axios.post('http://127.0.0.1:8000/api/v1/auth/users/activation/', {
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
