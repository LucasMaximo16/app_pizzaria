import { IDatabaseResponse } from './../../types/IDatabaseRespose';
import { prismaClient } from "../../prisma"

export interface ICategory {
    name: string
}

export class CategoryRepository {
    async create(data: ICategory): IDatabaseResponse {

        const verifyCategory = await prismaClient.category.findFirst({
            where: {
                name: data.name
            }
        })

        if (verifyCategory !== null) {
            throw new Error("Categoria ja cadastrada")
        }

        return await prismaClient.category.create({
            data: {
                name: data.name
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

    async getAllCategories(): IDatabaseResponse {
        return await prismaClient.category.findMany({
            select: {
                id: true,
                name: true
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