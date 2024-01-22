import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import users from '../models/auth.js'

export const signup = async (req , res) =>{
    const {name , email, password} = req.body;
    try{
        const  exisitinguser = await users.findOne({email});
        if(exisitinguser){
            return res.status(404).json({message:"User already exists"})
        }
        const hashedpassword = await bcrypt.hash(password, 12)
        const newuser = await users.create({name, email, password: hashedpassword})
        const token = jwt.sign({email: newuser.email, id: newuser._id}, process.env.JWT_SECRET,{expiresIn: '1h'});
        res.status(200).json({result: newuser, token})
    }catch(error){
        res.status(500).json("Something went wrong...")
    }
}
export const login = async (req, res) =>{
    const { email, password } = req.body;
    try {
        const  exisitinguser = await users.findOne({email});
        if(!exisitinguser){
            return res.status(404).json({message:"User don't exists"})
        }
        const ispasswordcrt = await bcrypt.compare(password,exisitinguser.password)
        if(!ispasswordcrt){
            return res.status(404).json({message:"Invalid Credentials"})
        }
        const token = jwt.sign({email: exisitinguser.email, id: exisitinguser._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.status(200).json({result: exisitinguser, token})
    } catch (error) {
        res.status(500).json("Something went wrong...")
    }
}