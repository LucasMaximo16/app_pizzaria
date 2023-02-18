import { prismaClient } from '../../prisma';
import { IUserDTO } from './../../DTO/UserDTO/IUserDTO';

export async function userValidation(data: IUserDTO) {
    const verifyEmail = await prismaClient.user.findFirst({
        where: {
            email: data.email
        }
    })

    if (verifyEmail) {
        throw new Error('Email ja cadastrado!')
    }
    if (!data.name) {
        throw new Error("INVALID NAME")
    }
    if (!data.email) {
        throw new Error("INVALID EMAIL")
    }
    if (data.password.length < 5) {
        throw new Error("Password must contain a minimum of 5 characters")
    }
    if (data.password.length > 25) {
        throw new Error("Password must contain a maximum of 25 characters")
    }
}