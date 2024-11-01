import sendMail from "../middlewares/sendMail.js"
import { User } from "../models/User.js"
import jwt from "jsonwebtoken"

export const loginUser = async(req,res) => {
    try {
        const {email} = req.body

        let user = await User.findOne({email})

        if(!user){
            user = await User.create({
                email,
            })
        }

        const otp = Math.floor(Math.random() * 1000000)  // for 6 digit otp

        const verifyToken = jwt.sign({user, otp}, process.env.Activation_sec, {
            expiresIn: '5m',
        })

        await sendMail(email, "ChatBot", otp)

        res.json({
            message: "Otp send to your mail",
            verifyToken
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}