import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Headlights } from 'phosphor-react';

const SellerOrder = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch orders for the current seller
        const token = localStorage.getItem('token');
        if (token) {
            axios.get('http://localhost:8000/api/v1/seller/orders/', {
                headers: {
                    Authorization: `Token ${token}`
                }
            })
                .then(response => {
                    setProducts(response.data);
                })
                .catch(error => {
                    console.error('Error fetching seller orders:', error);
                });
        }
    }, []);

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Your Products rrdered by Customers</h1>
            <div style={styles.productGrid}>
                {products.map(product => (
                    <div key={product.id} style={styles.productBox}>
                        <div style={styles.productContent}>
                            <h2 style={styles.productName}>Order Id: {product.id}</h2>
                            <h2 style={styles.productName}>Buyer: User {product.user}</h2>
                            <p style={styles.productDescription}>Address: {product.address}</p>
                            <p style={styles.productPrice}>Total: ${product.total_amount}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        margin: '20px',
        padding: '20px',
        border: '1px solid #ccc',
    },
    heading: {
        fontSize: '24px',
        marginBottom: '20px',
    },
    productGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
    },
    productBox: {
        border: '1px solid #ddd',
        padding: 10,
        borderRadius: '5px',
        overflow: 'hidden',
        maxWidth: '300px', // Set maximum width for the product box
        margin: 'auto', // Center the product box
    },
    productContent: {
        padding: '15px',
    },
    productName: {
        fontSize: '20px',
        marginBottom: '10px',
    },
    productDescription: {
        fontSize: '16px',
        marginBottom: '8px',
    },
    productPrice: {
        fontSize: '18px',
        marginBottom: '8px',
    },
    editButton: {
        display: 'block',
        marginTop: '10px',
        padding: '8px 16px',
        backgroundColor: '#007bff',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
        textAlign: 'center',
        cursor: 'pointer',
    },
};

export default SellerOrder;
