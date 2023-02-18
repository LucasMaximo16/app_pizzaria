import { FinishOrderController } from './FinishOrderController';
import { DetailOrderController } from './DetailOrderController';
import { GetAllOrdersController } from './GetAllOrdersController';
import { SendOrderPutController } from './SendPutOrderController';
import { DeleteOrderController } from './DeleteOrederProduct';
import { CreateOrderController } from './CreateOrderController';

const createOrderController = new CreateOrderController()
const deleteOrderController = new DeleteOrderController()
const sendPutOrderController = new SendOrderPutController()
const getAllOrdersController = new GetAllOrdersController()
const detailOrderController = new DetailOrderController()
const finishOrderController = new FinishOrderController()

export {
    createOrderController,
    deleteOrderController,
    sendPutOrderController,
    getAllOrdersController,
    detailOrderController,
    finishOrderController
}