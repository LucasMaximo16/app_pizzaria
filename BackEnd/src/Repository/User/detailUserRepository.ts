import { prismaClient } from "../../prisma"
import { IDatabaseResponse } from "../../types/IDatabaseRespose"



export class DetailUserRepository {

    async getDataUser(id: string): IDatabaseResponse {
        return await prismaClient.user.findFirst({
            where: {
                id: id
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
                status: 400,
                data: {
                    message: "INTERNAL SERVER ERROR"
                }
            }
        })
    }
}