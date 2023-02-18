import jwt from 'jsonwebtoken';
import { compare } from 'bcrypt';
import { prismaClient } from '../../prisma';
import { ILoginUserDTO } from './../../DTO/UserDTO/ILoginUserDTO';
import { LoginRepository } from '../../Repository/User/loginRepository';
export class LoginUserService {

    async execute(data: ILoginUserDTO) {

        const loginRepository = new LoginRepository()

        const user = await loginRepository.loginUser(data)

        if (!user.data) {
            throw new Error("Email ou password invalidos")
        }
        const cryptographyCheck = await compare(data.password, user.data.password)

        if (!cryptographyCheck) {
            throw new Error("Invalid Password")
        }

        const token = jwt.sign({ id: user.data.id },
            String(process.env.TOKEN_KEY),
            {
                expiresIn: "2h"
            })


        return { ...user, data: { ...user.data, token } }

    }
}