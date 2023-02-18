import { CategoryRepository } from './../../Repository/Category/categoryRepostiory';
import { Request, Response } from "express";

export class GetAllCategoriesService {
    async execute() {
        const getAllCategoryRepository = new CategoryRepository()

        const result = getAllCategoryRepository.getAllCategories()

        return result
    }
}