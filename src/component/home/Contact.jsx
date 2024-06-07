import React, { useEffect, useState } from 'react';
import http from '../../utils/fetchFromApi';

function Contact() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        http.get('/members/')
            .then((response) => setMembers(response.data))
            .catch((error) => console.error('Error fetching members:', error));
    }, []);

    return (
        <div className="all-reviews-container">
            <h1>Team Members</h1>
            <div className="reviews-wrapper" style={{ display: 'flex', flexDirection: 'column' }}>
                {members.map((member) => (
                    <div key={member.id} style={{ textAlign: 'center', margin: 15, border: '2px solid black', borderRadius: 10, padding: 20 }}>
                        <h2>First Name: {member.first_name}</h2>
                        <h2>Last Name: {member.last_name}</h2>
                        <h2>Middle Initial: {member.email}</h2>
                        <h2>Course: {member.course}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Contact;
