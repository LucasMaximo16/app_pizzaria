import { prismaClient } from '../../prisma';
import { IDatabaseResponse } from './../../types/IDatabaseRespose';

export class GetProductByCategoryRepository {

    async getProductByCategory(id_category: string): IDatabaseResponse {
        return await prismaClient.product.findMany({
            where: {
                category_id: id_category
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