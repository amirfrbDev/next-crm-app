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
        const { name, lastName, email, phone, address, zipCode, date, products } = req.body;
        const { customerId } = req.query;

        const doesEmailExist = await Customer.findOne({ email });
        if (doesEmailExist?._id && +doesEmailExist._id !== +customerId) return res.status(400).json({ status: "failed", message: "Email Already exist in database" })

        const customer = await Customer.findByIdAndUpdate(
            customerId,
            { name, lastName, email, phone, address, zipCode, date, products },
            { new: true, runValidators: true }
        )

        res.status(200).json({ message: "success", data: customer })

    }
}