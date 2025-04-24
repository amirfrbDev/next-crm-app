import moment from 'moment'
import Link from 'next/link'
import DeleteCustomerModal from '../modules/DeleteCustomerModal'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function CustomerDetailsPage({ data }) {
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null) 
    const router = useRouter();

    useEffect(() => {
        if (data === null || data === undefined) {
            router.replace("/404") 
        }
    }, [data, router])

    useEffect(() => {
        if (!data) return;
    }, [data])

    if (!data) return null

    return (
        <div className='customer-detail'>
            <h4>Customer&apos;s Details</h4>
            <div className='customer-detail__main'>
                <div className='customer-detail__item'>
                    <span>Name: </span>
                    <p>{data.name}</p>
                </div>
                <div className='customer-detail__item'>
                    <span>Last Name: </span>
                    <p>{data.lastName}</p>
                </div>
                <div className='customer-detail__item'>
                    <span>Email: </span>
                    <p>{data.email}</p>
                </div>
                <div className='customer-detail__item'>
                    <span>Phone Number: </span>
                    <p>{data.phone ? data.phone : "-"}</p>
                </div>
                <div className='customer-detail__item'>
                    <span>Address: </span>
                    <p>{data.address ? data.address : "-"}</p>
                </div>
                <div className='customer-detail__item'>
                    <span>Zip Code: </span>
                    <p>{data.zipCode ? data.zipCode : "-"}</p>
                </div>
                <div className='customer-detail__item'>
                    <span>Date: </span>
                    <p>{data.date ? moment(data.date).utc().format("YYYY-MM-DD") : "-"}</p>
                </div>
            </div>
            <table className='customer-detail__products'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.products.length ? data.products.map(product => (
                            <tr key={product._id}> 
                                <td>{product.name}</td>
                                <td>${product.price}</td>
                                <td>{product.quantity}</td>
                            </tr>
                        )) : (
                            <tr className='no-product-tr'>
                                <td colSpan="3">No Products</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <div className='customer-detail__buttons'>
                <p>Edit or Delete?</p>
                <button onClick={() => setIsOpen(true)} aria-label="Delete customer">Delete</button>
                <Link href={`/edit/${data._id}`}>Edit</Link>
            </div>
            <DeleteCustomerModal
                customerId={data._id}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                setError={setError} 
            />
            {error && <p className="error">{error}</p>}
        </div>
    )
}

export default CustomerDetailsPage
