import { injectable } from "inversify";
import { UserEntity } from "../entities/user.entity";
import { db } from "../frameworks/db/db";
import { RegisterDTO } from "../ts/dtos/RegisterDTO";
import { IAuth } from "../ts/interfaces/auth.interface";

@injectable()
export class AuthRepository implements IAuth {
  async registerUser(
    user: RegisterDTO
  ): Promise<{ message: string; userId: string }> {
    const registerUser = await db.user.create({
      data: {
        name: user.user_name,
        lastname: user.user_lastname,
        email: user.user_email,
        clerkId: user.user_clerkId,
      },
    });

    if (!registerUser) {
      throw new Error("Error registering user");
    }
    return { message: "User registered", userId: registerUser.id };
  }

  async authenticateUser(userId: string): Promise<{ message: boolean }> {
    const userExiste = await db.user.findUnique({
      where: {
        clerkId: userId,
      },
    });
    if (userExiste) {
      return { message: true };
    }

    return { message: false };
  }

  async findById(usr_id: string): Promise<UserEntity | null> {
    const user = await db.user.findUnique({
      where: {
        id: usr_id,
      },
    });

    if (user) {
      return {
        id: user.id,
        email: user.email,
        token: user.token || "",
        name: user.name,
        lastname: user.lastname,
      };
    }
    return null;
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
      return {
        id: user.id,
        email: user.email,
        token: user.token || "",
        name: user.name,
        lastname: user.lastname,
      };
    }
    return null;
  }

  async usersToken() {
    return db.user.findMany({
      select: {
        id: true,
        token: true,
      },
      where: {
        token: {
          not: null,
        },
      },
      orderBy: {
        token: "asc",
      },
    });
  }

  async deleteAccount(userId: string) {
    await db.notification.deleteMany({
      where: {
        user: {
          clerkId: userId,
        },
      },
    });
    await db.user.delete({
      where: {
        clerkId: userId,
      },
    });
  }
}
