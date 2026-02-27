import { Request,Response,NextFunction } from "express";
import jwt ,{JwtPayload} from "jsonwebtoken";
import {IUser} from "../model/User.js"


export interface AuthenticatedRequest extends Request {
    user?: IUser | null;
}

export const isAuth  = async (req:AuthenticatedRequest,res:Response,next:NextFunction): Promise<void> =>{
    try {
        const authHeader = req.headers.authorization;
        // console.log(authHeader)
        if(!authHeader || !authHeader.startsWith("Bearer ")){
            res.status(401).json({
                message:"Please login - no auth header"
            })
            return;
        }

        const token  = authHeader.split(" ")[1];

        if(!token){
            res.status(401).json({
                message:"Please login - Token missing"
            })
            return;
        }
        const decodedValue = jwt.verify(token,process.env.JWT_SEC as string) as JwtPayload;

        console.log(decodedValue.user);
        
        if(!decodedValue || !decodedValue.user){
             res.status(401).json({
                message:"Invalid Token"
            })
            return;
        }
        
        req.user = decodedValue.user;
        next();

    } catch (error) {
         res.status(401).json({
                message:"Please login - JWT error",
            })
    }
}