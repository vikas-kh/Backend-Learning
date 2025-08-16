import User from  "../models/user.js";

export const register=async(req,res)=>{
    try{
        const {fullName, email, password}=req.body;
        if(!fullName || !email || !password){
            return res.status(400).json({success:false,message:"All fields are required"});
        }

        const user = await User.findOne(email);
        if(user){
            return res.status(400).json({
                success:false,
                message:"This email is already registerd"
            });
        }

        await User.create({
            fullName,
            user,
            password
        });
        return res.status(201).json({
            success:true,
            message:"Account created successfully"
        });
    }catch(error){
        console.log(error);
    }
}