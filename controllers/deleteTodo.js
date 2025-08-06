const { default: mongoose } = require("mongoose");
const Todo = require("../models/todo");

exports.deleteTodo = async (req, res) => {
    try {

        const { id } = req.params;
       
       await Todo.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Todo Deleted",
        });
    } catch (error) {
        console.error("Error updating todo:", error);
        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
}