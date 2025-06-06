import React from 'react'
import ItemList from './ItemList'
import FormInput from './FormInput';

function Form({ form, setForm }) {

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value })
    }
    
    return (
        <div>
            <FormInput
                name="name"
                label="Name"
                type="text"
                value={form.name}
                onChange={changeHandler}
            />
            <FormInput
                name="lastName"
                label="Last Name"
                type="text"
                value={form.lastName}
                onChange={changeHandler}
            />
            <FormInput
                name="email"
                label="Email"
                type="text"
                value={form.email}
                onChange={changeHandler}
            />
            <FormInput
                name="phone"
                label="Phone"
                type="tel"
                value={form.phone}
                onChange={changeHandler}
            />
            <FormInput
                name="address"
                label="Address"
                type="text"
                value={form.address}
                onChange={changeHandler}
            />
            <FormInput
                name="zipCode"
                label="ZipCode"
                type="text"
                value={form.zipCode}
                onChange={changeHandler}
            />
            <FormInput
                name="date"
                label="Date"
                type="date"
                value={form.date}
                onChange={changeHandler}
            />
            <ItemList form={form} setForm={setForm} />
        </div>
    )
}

export default Form