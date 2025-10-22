// require('dotenv').config({path:'./env'})/
import dotenv from "dotenv"

import express from "express"
import connectDb from "./db";

dotenv.config({
    path:"./env"
})






















// Approch to coonect db

/*;( async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${Db_Name}`)
        app.on("error",(error)=>{
            console.log(error)
            throw error
        })
        app.listen(process.env.PORT,() => {
          console.log(`App is listenning on port ${process.env.PORT}`)
        }
        )
    } catch (error) {
        console.log("ERROR",error)
        throw err
    }


}) ()
    */