import { auth } from './../Middlewares/auth';
import { CreateUserController } from '../Controller/User/CreateUserController';
import { Request, Response, Router } from "express";
import { createUserController, detailUserController, loginUserController } from '../Controller/User';

const userRoutes = Router();

userRoutes.post('/', (request: Request, response: Response) => {
    return createUserController.handle(request, response)
})

userRoutes.post('/login', (request: Request, response: Response) => {
    return loginUserController.handle(request, response)
})

userRoutes.get('/me', auth, (request: Request, response: Response) => {
    return detailUserController.handle(request, response)
})

export { userRoutes }