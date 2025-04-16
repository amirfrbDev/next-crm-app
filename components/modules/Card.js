import axios from 'axios'
import Link from 'next/link'
import React from 'react'

function Card({ customer }) {
    const { name, lastName, email, _id } = customer

    const deleteHandler = async () => {
        try {
            await axios.delete(`/api/customer/${_id}`);
            window.location.reload()
        } catch (error) {
            console.log("Something Went Wrong!", error.message)
        }
    }

    return (
        <div className="card">
            <div className="card__details">
                <p>
                    {name} {lastName}
                </p>
                <p>{email}</p>
            </div>
            <div className="card__buttons">
                <button onClick={deleteHandler}>Delete</button>
                <Link href={`/edit/${_id}`}>Edit</Link>
                <Link href={`/customer/${_id}`}>Details</Link>
            </div>
        </div>
    )
}

export default Card