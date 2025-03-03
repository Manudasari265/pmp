import { 
    NextFunction, 
    Request, 
    Response 
} from "express";
import jwt from "jsonwebtoken";


export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if(token == null) {
        res.status(401).json({
            message: "Unauthorized"
        });
        return;
    }

    console.log(process.env.JWT_PUBLIC_KEY)
    const decodedToken = jwt.verify(token, process.env.JWT_PUBLIC_KEY!, {
        algorithms: ["RS256"]
    });

    if(!decodedToken) {
        res.status(401).json({
            message: "Unauthorized"
        });
        return;
    }

    const userId = (decodedToken as any).sub;

    if(!userId) {
        res.status(401).json({
            message: "Unauthorized"
        })
        return;
    }

    req.userId = userId;
    next();
}