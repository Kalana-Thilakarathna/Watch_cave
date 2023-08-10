import asyncHandler from "express-async-handler";
import User from "../Models/UserModels.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../middlewares/Auth.js";

const registerUser = asyncHandler(async (req,res)=>{
    const {fullName, email, password, image} = req.body
    try{
        const userExists = await User.findOne({email})
        if(userExists){
            res.status(400)
            throw new Error("User already exists")
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const user = await User.create({
            fullName,
            email,
            password:hashedPassword,
            image,
        });

        if(user){
            res.status(201).json({
                _id:user._id,
                fullName:user.fullName,
                email:user.email,
                isAdmin:user.isAdmin,
                image:user.image,
                token:generateToken(user._id)
            })
        } else{
            res.status(400).json({message:error.message})
            

        }
    } catch (error){

        return res.status(500).json({msg: error.message})

    }

})


const loginUser = asyncHandler(async (req,res)=>{
    const {email, password} = req.body
    try{
        const user = await User.findOne({email})
        if(user && (await bcrypt.compare(password,user.password))){
            res.json({
                _id:user._id,
                fullName:user.fullName,
                email:user.email,
                isAdmin:user.isAdmin,
                image:user.image,
                token:generateToken(user._id)
            })
    }
    else{
        res.status(401)
        throw new Error("Invalid email or password")
    }
    } catch (error){
        res.status(400).json({message:error.message})
    }
})

const updateUserProfile = asyncHandler(async (req,res)=>{

    const{fullName, email, image} = req.body;
    try{
        const user = await User.findById(req.user._id);
        if(user){
            user.fullName = fullName || user.fullName;
            user.email = email || user.email;
            user.image = image || user.image;

            const updatedUser = await user.save();

            res.json({
                _id:updatedUser._id,
                fullName:updatedUser.fullName,
                email:updatedUser.email,
                isAdmin:updatedUser.isAdmin,
                image:updatedUser.image,
                token:generateToken(updatedUser._id)
            })
        }else{
            res.status(404)
            throw new Error("User not found")
        }
    } catch (error){
        res.status(400).json({message:error.message})
    }
})

const deleteUserProfile = asyncHandler(async (req,res)=>{
    try{
        const user = await User.findById(req.user._id);
        if(user){
            if(user.isAdmin){
                res.status(400)
                throw new Error("Admin cannot be deleted")
            }
            await user.remove();
            res.json({message:"User removed"})
        }else{
            res.status(404)
            throw new Error("User not found")
        }
    } catch (error){
        res.status(400).json({message:error.message})
    }
})

// Change user password
 const changePassword = asyncHandler(async (req,res)=>{
    const {oldPassword, newPassword} = req.body;
    try{
        const User = await User.findById(req.user._id);
        if(User && (await bcrypt.compare(oldPassword,User.password))){
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(newPassword,salt);
            User.password = hashedPassword;
            await User.save();
            res.json({message:"Password changed successfully"})
        }else{
            res.status(401)
            throw new Error("Invalid password")
        }
    } catch (error){
        res.status(400).json({message:error.message})


    }
})

const getLikedMovies = asyncHandler(async (req,res)=>{
    
    try{
        const user = await User.findById(req.user._id).populate("likedMovies");
        if(user){
            res.json(user.likedMovies)
        }else{
            res.status(404)
            throw new Error("User not found")
        }
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
})

const addLikedMovie = asyncHandler(async (req,res)=>{
    const {movieId} = req.body;
    try{
        const user = await User.findById(req.user._id);
        if(user){
            
            if(user.likedMovies.includes(movieId)){
                res.status(400)
                throw new Error("Movie already liked")
            }
            user.likedMovies.push(movieId);
            await user.save();
            res.json(user.likedMovies)
        }else{
            res.status(404)
            throw new Error("Movie not found")
        }

                
            


    }
    catch(error){
        res.status(400).json({message:error.message})
    }
})

const deleteLikedMovie = asyncHandler(async (req,res)=>{
    try{
        const user = await User.findById(req.user._id);
        if(user){
            user.likedMovies=[];
            await user.save();
            res.json({message:"All liked movies deleted"})
        }else{
            res.status(404)
            throw new Error("Movie not found")
        }
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
})

const getUsers = asyncHandler(async (req,res)=>{
    try{
        const users = await User.find({});
        res.json(users)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
})

const deleteUser = asyncHandler(async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        if(user){
            if(user.isAdmin){
                res.status(400)
                throw new Error("Admin cannot be deleted")
            }
            await User.deleteOne({ _id: req.params.id });
            res.json({message:"User removed"})
        }else{
            res.status(404)
            throw new Error("User not found")
        }



    }
    catch(error){
        res.status(400).json({message:error.message})
    }
})
    


export {
    registerUser,
    loginUser, 
    updateUserProfile, 
    deleteUserProfile,
    changePassword,
    getLikedMovies,
    addLikedMovie,
    deleteLikedMovie,
    getUsers,
    deleteUser,
    

};