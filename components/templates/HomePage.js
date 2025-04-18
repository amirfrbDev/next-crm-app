import React from 'react'
import Card from '../modules/Card'

function HomePage({ customers }) {
  
  return (
    <div>
      {
        customers.length ? customers.map(customer => (
          <Card key={customer._id} customer={customer} />
        )) : <h2
          style={{
            fontSize: "1.4rem",
            color: "#fff",
            background: "#232431",
            width: "300px",
            padding: "10px",
            textAlign: "center",
            borderRadius: "7px",
            margin: "auto",
            marginTop: "100px"
          }}
        >No Customers</h2>
      }
    </div>
  )
}

export default HomePage