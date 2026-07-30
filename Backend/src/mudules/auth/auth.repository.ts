import User from "./auth.model.js";
import { RegisterUserDto } from "./auth.types.js";

class AuthRepository {
  async findByEmail(email: string) {
    return User.findOne({ email });
  }

  async findByEmailWithPassword(email: string) {
    return User.findOne({ email }).select("+password");
  }

  async findById(id: string) {
    return User.findById(id);
  }

    async findByRefreshToken(refreshToken: string) {
    return User.findOne({refreshToken});
  }

  async create(userData: RegisterUserDto) {
    return User.create(userData);
  }
}

export default new AuthRepository();
