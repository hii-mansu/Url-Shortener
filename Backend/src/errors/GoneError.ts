import { AppError } from "./AppError.js";

export class GoneError extends AppError{
    constructor(message: string){
        super(410, message);
    }
}