import type { NextApiRequest, NextApiResponse } from "next";
import Order from "../../../models/Order";
import dbConnect from "../../../lib/dbConnect";
import { OrderData } from '../../../../type';




export const POST = async (req: NextApiRequest) => {

    await dbConnect();

    const {
        clientName,
        clientEmail,
        productData,
        amount,
        status
    } = req.body;
    const orderdata = await Order.create({
        clientName,
        clientEmail,
        productData,
        amount,
        status
    });
    res.json(orderdata);
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<OrderData>
) {
    const { method } = req;

    

   
    if (method === 'GET') {
        // Обробка GET-запиту
        try {
            const { email } = req.query;
            const orders = await Order.find();
            const matchingOrders = orders.filter((order) => order.clientName.some((name) => name === clientName));
            res.status(200).json(matchingOrders);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}