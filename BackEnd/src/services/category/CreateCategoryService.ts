import { CategoryRepository } from '../../Repository/Category/categoryRepostiory';
import { ICategoryDTO } from './../../DTO/CategoryDTO/ICategoryDTO';
export class CreateCategoryService {
    async execute(data: ICategoryDTO) {

        const categoryRepostiory = new CategoryRepository()

        if (!data.name) {
            throw new Error("Invalid name")
        }

        const result = await categoryRepostiory.create(data)

        return result
    }

}