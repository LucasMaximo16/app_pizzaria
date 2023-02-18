import { auth } from './../Middlewares/auth';
import { Request, Response, Router } from "express";
import { createOrderController, deleteOrderController, detailOrderController, finishOrderController, getAllOrdersController, sendPutOrderController } from "../Controller/Order";
import { createItemController, deleteItemController } from '../Controller/Item';

const orderRoutes = Router()

orderRoutes.post('/', (request: Request, response: Response) => {
    return createOrderController.handle(request, response)
})

orderRoutes.post('/add', auth, (request: Request, response: Response) => {
    return createItemController.handle(request, response)
})
orderRoutes.post('/remove', auth, (request: Request, response: Response) => {
    return deleteItemController.handle(request, response)
})
orderRoutes.get('/all', auth, (request: Request, response: Response) => {
    return getAllOrdersController.handle(request, response)
})
orderRoutes.get('/:id_order', auth, (request: Request, response: Response) => {
    return detailOrderController.handle(request, response)
})
orderRoutes.delete('/:id_order', auth, (request: Request, response: Response) => {
    return deleteOrderController.handle(request, response)
})
orderRoutes.put('/', auth, (request: Request, response: Response) => {
    return sendPutOrderController.handle(request, response)
})
orderRoutes.put('/finish', auth, (request: Request, response: Response) => {
    return finishOrderController.handle(request, response)
})



export { orderRoutes }