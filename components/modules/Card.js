import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import deleteCustomer from '../../utils/deleteCustomer'
import { useRouter } from 'next/router'

function Card({ customer }) {
    const { name, lastName, email, _id } = customer

    const router = useRouter();

    return (
        <div className="card">
            <div className="card__details">
                <p>
                    {name} {lastName}
                </p>
                <p>{email}</p>
            </div>
            <div className="card__buttons">
                <button onClick={() => deleteCustomer(_id, router)}>Delete</button>
                <Link href={`/edit/${_id}`}>Edit</Link>
                <Link href={`/customer/${_id}`}>Details</Link>
            </div>
        </div>
    )
}

export default Card