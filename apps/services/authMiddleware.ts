import { 
    NextFunction, 
    Request, 
    Response 
} from "express";


export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.Authorization;
}