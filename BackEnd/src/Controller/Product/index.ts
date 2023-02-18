import { CreateProductController } from './CreateProductController';
import { GetProductByCategoryController } from './GetProductByCategoryController';

const createProductController = new CreateProductController()
const getProductByCategory = new GetProductByCategoryController()

export { createProductController, getProductByCategory }