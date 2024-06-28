import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();

export const register = async (req, res) => {
    const { username, password, email } = req.body;
    
    try{
        const prisma = new PrismaClient();

        const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS));

        const newUser = await prisma.user.create({
            data:{
                username,
                password:hashedPassword,
                email
            }
        });

        res.status(200).json({message:"Account Creation Successfull"});
        console.log(newUser);
    }catch(err){
        res.status(500).json({message:"Account Creation Failed"});
        console.log(err);
    }


}

export const login = async(req, res) => {
    const {username, password} = req.body;

    try{
        const prisma = new PrismaClient();

        const user = await prisma.user.findUnique({
            where:{
                username
            }
        });
        if(!user){
            return res.status(500).json({message:"Account Credentials wrong"});
        }

        const check = await bcrypt.compare(password, user.password);

        if(!check){
            return res.status(500).json({message:"Account Credentials wrong"});
        }

        const token = jwt.sign({id: user.id}, process.env.SECRET_KEY, {expiresIn:"15m"})

        const age = 1000 * 60 * 60 * 24 * 7;
        return  res.cookie("token", token, {
            httpOnly: true,
            maxAge: age
        }).status(200).json({message:"Account Login Successfull"});
        
    }catch(err){
        res.status(500).json({message:"Account Login Failed"});
        console.log(err);
    }
}

export const logout = (req, res) => {
    return res.clearCookie("token").status(200).json({message:"Logout Successful"})
}