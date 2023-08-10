import express from "express";
import multer from "multer";
import path from "path";
import {v4 as uuidv4} from "uuid-v4";
import storage from "../Config/FirebaseStorage.js";


const Uploadrouter = express.Router();

const upload = multer({
    storage:multer.memoryStorage(),
});

Uploadrouter.post("/", upload.single("file"), async(req,res)=>{
    try{

        const file = req.file;
        if(file){
            const fileName = `${uuidv4()}${path.extname(file.originalname)}`;
            const blob = storage.bucket().file(fileName);
            const blobStream = blob.createWriteStream({
                resumable:false,
                metadata:{
                    contentType:file.mimetype,
                },
            });
            blobStream.on("error",(error)=>{
                res.status(404).json({message:error.message});
            });
            blobStream.on("finish",()=>{
                const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${storage.name}/o/${encodeURI(fileName)}?alt=media`;
                res.status(201).json({publicUrl});
            }
            );

        }
        else{
            res.status(404).json({message:"File not found"});
        }
        



    }
    catch(error){

        res.status(404).json({message:error.message});

    }
})

