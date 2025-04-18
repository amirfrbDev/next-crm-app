import React, { useState } from 'react'
import Form from '../modules/Form'
import axios from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

function AddCustomerPage() {

    const [isLoading, setIsLoading] = useState(false)

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
        setIsLoading(true)
        try {
            const res = await axios.post("/api/customer", { data: form });

            setIsLoading(false)
            toast.success("User created successfully!")

            if (res.status === 201) router.push("/")
        } catch (error) {
            console.log("Error in sending information!", error.message)
            alert(error.response.data.message)
            setIsLoading(false)
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

    // console.log("Add-customer page")

    return (
        <div className='customer-page'>
            <h4>Add New Customer</h4>
            <Form form={form} setForm={setForm} />
            <div className='customer-page__buttons'>
                <button className='first' onClick={cancelHandler}>Cancel</button>
                <button className='second' onClick={saveHandler} disabled={isLoading}>
                    {isLoading ? "Savnig..." : "Save"}
                </button>
            </div>
        </div>
    )
}

export default AddCustomerPage