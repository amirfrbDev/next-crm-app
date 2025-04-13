import React, { useState } from 'react'
import Form from '../modules/Form'
import axios from 'axios';
import { useRouter } from 'next/router';

function AddCustomerPage() {

    const [form, setForm] = useState({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        zipCode: "",
        date: "",
        products: []
    });

    const router = useRouter();


    const saveHandler = async () => {
        try {
            const res = await axios.post("/api/customer", { data: form });
            console.log(res)
            if (res.status === "success") router.push("/")
        } catch (error) {
            console.log("Error in sending information!")
        }
    };
    const cancelHandler = () => {
        setForm({
            name: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            zipCode: "",
            date: "",
            products: []
        })
    };

    return (
        <div className='customer-page'>
            <h4>Add New Customer</h4>
            <Form form={form} setForm={setForm} />
            <div className='customer-page__buttons'>
                <button className='first' onClick={cancelHandler}>Cancel</button>
                <button className='second' onClick={saveHandler}>Save</button>
            </div>
        </div>
    )
}

export default AddCustomerPage