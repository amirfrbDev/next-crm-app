export default async function handler(req, res) {
    try {

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            status: "failed",
            message: "Error in connecting to database"
        })
    }
}