import User from "./auth.model.js";
import { RegisterUserDto } from "./auth.types.js";



export class AuthRepository {
    static async findByEmail(email:string) {
        return User.findOne({email});
    };

    static async create(userData: RegisterUserDto){
        return User.create(userData)
    }
}