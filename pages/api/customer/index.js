import Customer from "../../../models/Customer";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
    try {
        await connectDB()
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            status: "failed",
            message: "Error in connecting to database"
        })
    }

    if (req.method === "POST") {
        const { data } = req.body;
        if (!data.name || !data.lastName || !data.email) return res.status(400).json({ status: "failed", message: "Invalid Data!" })

        try {
            const doesCustomerExist = await Customer.findOne({ email: data.email });
            if (doesCustomerExist?._id) return res.status(400).json({
                status: "failed", message: "Customer with this email already exists. Email must be unique!"
            });
            const customer = await Customer.create(data)
            return res.status(201).json({
                status: "success",
                message: "Data created successfully",
                data: customer
            });
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                status: "failed",
                message: "Error in storing data!"
            });
        }
    } else if (req.method === "GET") {
        return res.status(200).json({ message: "Hello" })
    }


}