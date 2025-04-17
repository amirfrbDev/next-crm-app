import React, { useState } from 'react'
import Form from '../modules/Form'

function CustomerEditPage({ data, id }) {
    const [form, setForm] = useState({
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone || "",
        address: data.address || "",
        zipCode: data.zipCode || "",
        phone: data.phone || "",
        products: data.products || "",
        date: data.date || "",
    })
    return (
        <div className="customer-page">
            <h4>Edit Customer</h4>
            <Form form={form} setForm={setForm} />
            <div className="customer-page__buttons">
                <button className='first'>Cancel</button>
                <button className='second'>Edit</button>
            </div>
        </div>
    )
}

export default CustomerEditPage