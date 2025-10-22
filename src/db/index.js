import mongoose from "mongoose";

import { Db_Name } from "../constants";

const connectDb=async ()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${Db_Name}`)

        console.log(`\n MongoDB connected !! DB HOST:${connectionInstance.connection.host}`)

    } catch (error) {
        console.log("Mongodb connection error",error)

        process.exit(1)
    }

}

export default connectDb