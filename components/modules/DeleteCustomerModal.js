import React, { useState } from 'react'
import Modal from 'react-modal'
import axios from 'axios'
import { useRouter } from 'next/router'
import deleteCustomer from '../../utils/deleteCustomer'

Modal.setAppElement('#__next') // Required for accessibility

function DeleteCustomerModal({ customerId, isOpen, setIsOpen }) {
    const router = useRouter()

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            contentLabel="Confirm Delete"
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark overlay with some opacity
                },
                content: {
                    backgroundColor: "red",
                    color: '#fff',
                    padding: '20px',
                    borderRadius: '10px',
                    maxWidth: '400px',
                    maxHeight: "200px",
                    height: "fit-content",
                    margin: 'auto',
                }
            }}
        >
            <h2>Are you sure?</h2>
            <p>This action will delete the customer permanently.</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                <button onClick={() => setIsOpen(false)} className='cancel-button'>Cancel</button>
                <button onClick={() => deleteCustomer(customerId, router)} className='delete-button'>Delete</button>
            </div>
        </Modal>
    )
}

export default DeleteCustomerModal
