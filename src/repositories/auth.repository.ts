import { injectable } from "inversify";
import { UserEntity } from "../entities/user.entity";
import { db } from "../frameworks/db/db";
import { LoginDTO } from "../ts/dtos/LoginDTO";
import { RegisterDTO } from "../ts/dtos/RegisterDTO";
import { IAuth } from "../ts/interfaces/auth.interface";

@injectable()
export class AuthRepository implements IAuth{

  async registerUser(user: RegisterDTO): Promise<{message: string, userId: string}> {
    const registerUser = await db.user.create({
      data: {
        name: user.user_name,
        username: user.user_username,
        lastname: user.user_lastname,
        email: user.user_email,
        password: user.user_password,
        verified_at: new Date()
      }
    })

    if (!registerUser) {
      throw new Error("Error registering user");
    }
    return {message: "User registered", userId: registerUser.id};
  }
  async loginUser(user: LoginDTO): Promise<{message: string}> {
    const loginUser = await db.user.findFirst({
      where: {
        email: user.user_email,
        password: user.user_password
      }
    })
    if (!loginUser) {
      throw new Error("Error logging in user");
    }
    return {message: "User logged in"};
  }

  async authenticateUser(user_email: string): Promise<{message: boolean}>{
    const userExiste = await db.user.findUnique({
      where: {
        email: user_email,
      }
    })
    if (userExiste) {
      return {message: true};
    }

    return {message: false};
  }

	async findById(usr_id: string): Promise<UserEntity | null> {
		const user = await db.user.findUnique({
      where: {
      id: usr_id}
    });

    if(user){
      return {
        id: user.id,
        email: user.email,
        token: user.token || '',
        username: user.username,
        name: user.name,
        lastname: user.lastname,
        password: user.password,
        is_verified: user.is_verified,
        created_at: user.createdAt,
        updated_at: user.updatedAt,
      }
    }
		return null;
	}

  async findByEmail(email: string): Promise<UserEntity | null> {
		const user = await db.user.findUnique({
      where: {
      email: email}
    });

    if(user){
      return {
        id: user.id,
        email: user.email,
        token: user.token || '',
        username: user.username,
        name: user.name,
        lastname: user.lastname,
        password: user.password,
        is_verified: user.is_verified,
        created_at: user.createdAt,
        updated_at: user.updatedAt,
      }
    }
		return null;
	}
}