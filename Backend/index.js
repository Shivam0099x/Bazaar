import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import { connectDb } from './lib/db.js'

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true,
    methods: 'GET,POST,PUT,DELETE'
}))
app.use(express.urlencoded({extended:true}))


import authRoutes from './routes/auth.routes.js'

app.use('/api/v1',authRoutes)






connectDb()
.then(()=>{
    app.listen(PORT,(err)=>{
    console.log(`Server connected to http://localhost:${PORT}`)
})
})
.catch(err=>{
    console.log(`Error on connectDb function`)
})


