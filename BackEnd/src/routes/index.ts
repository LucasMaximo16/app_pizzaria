import { Router } from "express";
import { categoryRoutes } from "./category.routes";
import { orderRoutes } from "./order.routes";
import { productRoutes } from "./product.routes";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use('/user', userRoutes)
routes.use('/category', categoryRoutes)
routes.use('/product', productRoutes)
routes.use('/order', orderRoutes)
export { routes }