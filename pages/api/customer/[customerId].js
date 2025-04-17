import Customer from "../../../models/Customer";

export default async function handler(req, res) {
    if (req.method === "DELETE") {
        const { customerId } = req.query

        if (!customerId) return res.status(400).json({
            status: "failed", message: "No Id"
        });
        await Customer.findByIdAndDelete(customerId)
        return res.status(200).json({ status: "success", message: "Data successfully deleted" })
    } else if (req.method === "PATCH") {
        try {
            const { name, lastName, email, phone, address, zipCode, date, products } = req.body.data;
            const { customerId } = req.query;

            const doesEmailExist = await Customer.findOne({ email });
            if (doesEmailExist?._id && doesEmailExist._id.toString() !== customerId) return res.status(400).json({ status: "failed", message: "Email Already exist in database" })

            const customer = await Customer.findByIdAndUpdate(
                customerId,
                { name, lastName, email, phone, address, zipCode, date, products },
                { new: true, runValidators: true }
            )

            return res.status(200).json({ message: "success", data: customer })
        } catch (error) {
            return res.status(500).json({ status: "failed", message: "Updating user info failed!" })
        }
    } else if (req.method === "GET") {
        const { customerId } = req.query;
        try {
            const customer = await Customer.findById(customerId)
            return res.status(200).json({ status: "success", data: customer })
        } catch (error) {
            return res.status(500).json({ status: "failed", message: "Getting user info failed!" })
        }
    }
}