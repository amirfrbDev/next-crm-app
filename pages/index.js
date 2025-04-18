
import connectDB from "../utils/connectDB"
import Customer from "../models/Customer"
import HomePage from "../components/templates/HomePage"

function Home({ customers }) {

  return <HomePage customers={customers} />
}

export default Home


export async function getServerSideProps() {
  try {
    await connectDB();

    const customers = await Customer.find({});
    // console.log(customers)
    return {
      props: {
        customers: JSON.parse(JSON.stringify(customers.reverse()))
      }
    }
  } catch (error) {
    throw error
  }
}