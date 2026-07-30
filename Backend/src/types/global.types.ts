import { IUser } from "../mudules/auth/auth.types.js";


declare global {
    namespace Express {
        interface Request {
            user: IUser;
        }
    }
}

export {};