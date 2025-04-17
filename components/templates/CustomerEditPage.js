import React, { useState } from 'react'
import Form from '../modules/Form'
import { useRouter } from 'next/router'
import axios from 'axios'
import moment from 'moment'

function CustomerEditPage({ data, id }) {
    const date = data?.date ? moment(data.date).utc().format("YYYY-MM-DD") : ""
    console.log(data)
    const [form, setForm] = useState({
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone || "",
        address: data.address || "",
        zipCode: data.zipCode || "",
        phone: data.phone || "",
        products: data.products || "",
        date,
    })

    const router = useRouter()

    const cancelHandler = () => router.push("/");

    const saveHandler = async () => {
        try {
            axios
                .patch(`/api/customer/${id}`, { data: form })
                .then(res => router.push('/'))
        } catch (error) {
            console.log("Editing page went wrong!", error.message)
        }
    }

    return (
        <div className="customer-page">
            <h4>Edit Customer</h4>
            <Form form={form} setForm={setForm} />
            <div className="customer-page__buttons">
                <button className='first' onClick={cancelHandler}>Cancel</button>
                <button className='second' onClick={saveHandler}>Edit</button>
            </div>
        </div>
    )
}

export default CustomerEditPage