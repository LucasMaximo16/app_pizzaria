import { UserRepository } from '../../Repository/User/userRepository';
import { IUserDTO } from "../../DTO/UserDTO/IUserDTO";
import { prismaClient } from "../../prisma";
import { userValidation } from "../../validation/UserValidation/UserValidation";
import { hash } from "bcrypt"

export class CreateUserService {

    async execute(data: IUserDTO) {
        await userValidation(data)

        const cryptography = await hash(data.password, 8)

        const userRepository = new UserRepository()
        const result = await userRepository.create({ ...data, password: cryptography })

        return result

    }
}