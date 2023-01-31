import React from 'react';
import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

const Contact = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (status === 'success') clearFields();
    }, [status])

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
            email.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email
            })
    }

    const clearFields = () => {
        setEmail('');
    }

    return (
        <section id='contact' className='contact'>
            <div className='container'>
                <div className="feature-container">
                    <div className='col-12'>
                        <div className="feature mx-auto text-center d-flex flex-column justify-content-center align-items-center">
                            <p className='text-center'>Practice Advice</p>
                            <h1 className='text-center'>Featured Products</h1>
                            <p className="p text-center">Problems trying to resolve the conflict betweeen <br />
                                the two major realms of classical physics: Newtonian mechanics</p>

                        </div>
                    </div>
                </div>

                <div className="newsletter-bx wow slideInUp mt-2 mb-2">
                    <div className='Col-12'>
                        {status === 'sending' && <Alert>Sending...</Alert>}
                        {status === 'error' && <Alert variant="danger">{message}</Alert>}
                        {status === 'success' && <Alert variant="success">{message}</Alert>}
                    </div>
                    <div className='col-12'>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Your Mail" className='ml-3'/>
                                <button type="submit">Suscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Contact
