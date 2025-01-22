import express from 'express'
import jwt from 'jsonwebtoken'
import { createUser,login } from './auth'
import { generateImage } from './image'
const app = express()

const secretKey = process.env.JWT_SECRET_KEY
const port = process.env.PORT | 8888

app.post('/signup',(req,res) => {
    try {
        const {email,password} = req.body
        if(email || !!email.include('@') || !password || password.trim().length < 7){
            return res.status(400).send({error : "invalid email or password"})
        }
        const token = createUser(email,password)
        res.status(201).send({message : 'user created succesfully'})
    } catch (error) {
        res.status(400).send({error : 'email is already in use'})
    }
})

app.post('/login',(req,res) => {
    try {
        const {email,password} = req.body
        const token = login(email,password)
        res.status(200).send({message : 'login successful',token})
    } catch (error) {
        if(error.status = 400){
            return res.status(400).send({error : error.message})
        }
        res.status(500).send({error : 'login failed ,check credentials'})
    }
})

app.post('/generate-image',async(req,res) => {
    const {prompt , options} = req.body
    const {image,format} = await generateImage(prompt,options)
    res.type(format)  
    res.status(200).send(image)
})

app.listen(port,() => console.log(`server running on port ${port}`))
