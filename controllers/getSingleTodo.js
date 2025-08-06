const Todo = require("../models/todo")


exports.getSingleTodo = async(req,res)=>{
    try{
        const{id}= req.params;
        const todo = await Todo.findById(id);

        if(!todo){
            return res.status(400).json({
                success:false,
                message:"Todo not found",
            });
        }
        res.status(200).json({
            success:true,
            data:todo,
            message:"Fetched todo succesfully"
        });

    }catch(error){
console.log(error);
res.status(500).json({
    success: false,
      message: error.message,
})
    }
}