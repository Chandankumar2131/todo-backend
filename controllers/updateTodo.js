const { default: mongoose } = require("mongoose");
const Todo = require("../models/todo");

exports.updateTodo = async (req, res) => {
    try {

        const { id } = req.params;
        const { title, description } = req.body;
        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            { title, description, updatedAt: Date.now() },
           
        )

        res.status(200).json({
            success: true,
            data: updatedTodo,
            message: "Todo updated successfully",
        });
    } catch (error) {
        console.error("Error updating todo:", error);
        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
}