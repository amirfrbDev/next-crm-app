import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const deleteCustomer = async (id, router) => {


    try {
        await axios.delete(`/api/customer/${id}`).then(() => {
            // router.push("/");
            toast.success("Customer was deleted successfully!")
        })
        // window.location.reload()
    } catch (error) {
        console.log("Something Went Wrong!", error.message)
    }
}

export default deleteCustomer