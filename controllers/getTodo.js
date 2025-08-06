const Todo = require("../models/todo");

exports.getTodo = async (req, res) => {
    try {
        const response = await Todo.find({});
        res.status(200).json({
            success: true,
            data: response,
            message: "Fetched all datas",
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: error.message,
        })


    }
}