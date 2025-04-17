import moment from 'moment'
import React from 'react'

function CustomerDetailsPage({ data }) {
    console.log(data)
    return (
        <div className='customer-detail'>
            <h4>Customer's Details</h4>
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
                    <p>{data.name}</p>
                </div>
                <div className='customer-detail__item'>
                    <span>Address: </span>
                    <p>{data.name}</p>
                </div>
                <div className='customer-detail__item'>
                    <span>Zip Code: </span>
                    <p>{data.zipCode}</p>
                </div>
                <div className='customer-detail__item'>
                    <span>Date: </span>
                    <p>{moment(data.date).utc().format("YYYY-MM-DD")}</p>
                </div>
            </div>
            <table className='customer-detail__products'>
                <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                </tr>
                {
                    data.products.map(product => (
                        <tr>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                            <td>{product.quantity}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

export default CustomerDetailsPage