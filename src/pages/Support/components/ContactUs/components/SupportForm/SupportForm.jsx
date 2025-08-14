import React, { useState } from 'react';
import styles from './SupportForm.module.css';
import Input from '@/components/UI/Input/Input.jsx';
import Textarea from '@/components/UI/Textarea/Textarea.jsx';
import Button from '@/components/UI/Button/Button.jsx';
import Checkbox from '@/components/UI/Checkbox/Checkbox.jsx';

const SupportForm = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        termsAgree: false,
    });

    const handleChange = (event) => {
        const input = event.target;
        const { name, type } = input;

        if (type === 'checkbox') {
            setForm((prev) => ({ ...prev, [name]: input.checked }));
        } else {
            setForm((prev) => ({ ...prev, [name]: input.value }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(Object.values(form).join(','));
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputsContainer}>
                <Input
                    className={styles.input}
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    label="First Name"
                    type="text"
                    placeholder="Enter First Name"
                />
                <Input
                    className={styles.input}
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    label="Last Name"
                    type="text"
                    placeholder="Enter Last Name"
                />
            </div>

            <div className={styles.inputsContainer}>
                <Input
                    className={styles.input}
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    label="Email"
                    type="text"
                    placeholder="Enter your Email"
                />
                <Input
                    variant={'phone'}
                    className={styles.input}
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    label="Phone Number"
                    type="text"
                    placeholder="Enter Phone Number"
                />
            </div>

            <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className={styles.textarea}
                label="Message"
                placeholder="Enter your Message"
            />

            <div className={styles.bottomContainer}>
                <Checkbox
                    name="termsAgree"
                    checked={form.termsAgree}
                    onChange={handleChange}
                    label={'I agree with Terms of Use and Privacy Policy'}
                />
                <Button className={styles.submitButton} variant="accent">
                    Send Message
                </Button>
            </div>
        </form>
    );
};

export default SupportForm;
