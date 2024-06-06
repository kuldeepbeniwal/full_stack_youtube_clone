import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from './app.js'
dotenv.config(
 
    {
        path:'./.env'
    }
)
connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log("running at port 8000")
    })
}).catch(error=>console.log(error))





























// ;(async function connectDB(){
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     console.log('connected')
    
//   } catch (error) {
//     console.log("error:issue in db connection",error);
//     throw(error)
//   }
// })()