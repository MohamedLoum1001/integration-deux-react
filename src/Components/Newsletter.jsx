import React from 'react'
import { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";

const Newsletter = () => {
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
        <div>

        </div>
    )
}

export default Newsletter
