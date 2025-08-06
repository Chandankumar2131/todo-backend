const mongoose = require('mongoose')

require('dotenv').config();

const dbConnect=()=>{
mongoose.connect(process.env.DATABASE_URL)
.then(()=>console.log("DB connected successfully"))
.catch((error)=>{
    console.log("connection in DB failed");
console.error(error.massage);
process.exit(1);
});
}

module.exports=dbConnect;