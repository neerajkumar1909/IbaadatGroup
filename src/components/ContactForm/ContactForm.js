import React, { useState } from "react";
import './ContactForm.css';
// import axios from 'axios'


function ContactForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        message: ''
    });


    const [errors, setErrors] = useState({});


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm(formData);
        if (Object.keys(errors).length === 0) {
            // Submit the form
            alert("Thanks for sending us message");
            console.log('Form submitted:', formData);

        } else {
            setErrors(errors);
        }
    };


    const validateForm = (data) => {
        let errors = {};

        if (!data.username.trim()) {
            errors.username = 'Name is required!';
        }

        if (!data.email.trim()) {
            errors.email = 'Email is required!';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'email is invalid!';
        }

        if (!data.message.trim()) {
            errors.message = 'Message is required!';
        }

        return errors;
    };


    return (
        <>
            <div className="contactform-container">
                <h2>Contact us</h2>
                <form className="form" onSubmit={handleSubmit}>

                    {errors.username && <span>{errors.username}</span>}
                    <input
                        placeholder="Enter your name"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />

                    {errors.email && <span>{errors.email}</span>}
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    {errors.message && <span>{errors.message}</span>}
                    <textarea
                        type="text"
                        name="message"
                        placeholder="Write a message for us.."
                        value={formData.message}
                        onChange={handleChange}
                    />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default ContactForm;