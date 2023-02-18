import { hash } from "bcrypt"
import { prismaClient } from "../../prisma"
import { IDatabaseResponse } from "../../types/IDatabaseRespose"
import { userValidation } from "../../validation/UserValidation/UserValidation"

export interface IUser {
    name: string
    email: string
    password: string
}

export class UserRepository {
    async create(data: IUser): IDatabaseResponse {
        return await prismaClient.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: data.password,
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        }).then((result) => {
            return {
                status: 200,
                data: result
            }
        }).catch((error) => {
            return {
                status: 200,
                data: {
                    message: "INTERNAL SERVER ERROR"
                }
            }
        })
    }
}