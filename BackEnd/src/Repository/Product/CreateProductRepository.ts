import { prismaClient } from '../../prisma';
import { IDatabaseResponse } from './../../types/IDatabaseRespose';

export interface IProduct {
    name: string
    description: string
    price: string
    banner: string
    category_id: string
}

export class CreateProductRepository {
    async create(data: IProduct): IDatabaseResponse {
        return await prismaClient.product.create({
            data: {
                name: data.name,
                description: data.description,
                price: data.price,
                banner: data.banner,
                category_id: data.category_id
            }
        }).then((result) => {
            console.log(result);

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