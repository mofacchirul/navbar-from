"use server"
import bcrypt from "bcrypt"
import bdcoonet, { CollectonObj } from "@/lib/bdconnet";

export const Sininuser = async(payload)=>{
    const userCOllection = bdcoonet(CollectonObj.usecollection)
  const {email,password} = payload;
  if(!email || !password){
    return {error: "Email and password are required"}
  }
  const user =await  userCOllection.findOne({email:payload.email});
  if(!user){
    const hashePassword = await bcrypt.hash(password,10)
    payload.password= hashePassword;
    const result = await userCOllection.insertOne(payload);
    const {acknowledged, insertedId} = result;
    return  {acknowledged, insertedId:insertedId.toString()}
  }
  return {success: false}   
}