import connectDB from '../utils/connectDB'

import Customer from '../models/Customer'
import Card from '../components/modules/Card'
import { useRouter } from 'next/router'

function Search({ customers }) {

    const router = useRouter()

    return (
        <div>
            <h3 style={{ color: "#fff", margin: "40px 0px" }}>Customers With &quot;{router.query.query}&quot; Name:</h3>
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

export default Search


export async function getServerSideProps(context) {

    try {
        await connectDB()

        const { query } = context.query
        const searchedCustomers = await Customer.find({
            $or: [
                { name: { $regex: query, $options: "i" } },
                { lastName: { $regex: query, $options: "i" } }
            ]
        })

        return {
            props: {
                customers: JSON.parse(JSON.stringify(searchedCustomers))
            }
        }

    } catch (error) {
        console.log(error)
    }

}