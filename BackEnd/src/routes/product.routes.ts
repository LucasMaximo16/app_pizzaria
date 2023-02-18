import { auth } from './../Middlewares/auth';
import { Request, Response, Router } from "express";
import { createProductController } from '../Controller/Product';
import multer from 'multer';
import uploadConfig from '../config/multer'
import { getAllCategoryController } from '../Controller/Category';

const productRoutes = Router()

const upload = multer(uploadConfig.upload("./tmp"))

productRoutes.post('/', auth, upload.single('file'), (request: Request, response: Response) => {
    return createProductController.handle(request, response)
})

productRoutes.get('/:id_category', auth, (request: Request, response: Response) => {
    return getAllCategoryController.handle(request, response)
})


export { productRoutes }