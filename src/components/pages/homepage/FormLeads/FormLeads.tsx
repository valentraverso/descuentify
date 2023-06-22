"use client"
import { useForm } from 'react-hook-form';
import styles from './FormLeads.module.scss'
import sendToNotion from '@/api/sendToNotion';
import { useState } from 'react';

function FormLeads() {

    const [company, setCompany] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        tag: 'contact'
    });
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        control
    } = useForm();


    const submitForm = async ({
        name,
        email,
        phoneNumber

    }: any) => {

        const dataCompany = {
            name: name,
            email: email,
            phoneNumber: phoneNumber
        }

        const data = await sendToNotion(dataCompany)

    };

    return (
        <>
            <div className={styles['container-section-leads']} id='Contact'>
                <div className={styles['container-inside-leads']}>
                    <h2 className={styles.h2}>¿Te gustaria fidelizar más clientes?</h2>
                    <form className={styles['container-form-leads']}
                        onSubmit={(data) => submitForm(data)}>
                        <label htmlFor="">Nombre</label>
                        <input type="text"
                            {
                            ...register('name')
                        
                            }
                        />
                        <label htmlFor="">Email</label>
                        <input type="email" />
                        <label htmlFor="">Numero</label>
                        <input type="phone" />
                        <button className={styles['submit-form-leads']} type="submit">¡Quiero ser parte!</button>
                    </form>
                </div>
                <div className={styles['image-side-form']}>

                </div>
            </div>
        </>
    )
}

export default FormLeads;