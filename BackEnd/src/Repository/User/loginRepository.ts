import { compare } from "bcrypt"
import { prismaClient } from "../../prisma"
import { IDatabaseResponse } from "../../types/IDatabaseRespose"


export interface IUserLogin {
    email: string
    password: string
}

export class LoginRepository {
    async loginUser(data: IUserLogin): IDatabaseResponse {
        return await prismaClient.user.findFirst({
            where:
            {
                email: data.email
            }
        }).then((result) => {
            return {
                status: 200,
                data: result
            }
        }).catch((error) => {
            return {
                status: 400,
                data: {
                    message: "INTERNAL SERVER ERROR"
                }
            }
        })
    }
}