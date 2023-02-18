import { GetProductByCategoryRepository } from "../../Repository/Product/GetProductByCategoryRepository";

export class GetProductByCategoryService {

    async execute(id_category: string) {

        const getProductByCategoryRepository = new GetProductByCategoryRepository()

        if (!id_category) {
            throw new Error("Invalid ID")
        }

        const result = getProductByCategoryRepository.getProductByCategory(id_category)

        return result
    }
}