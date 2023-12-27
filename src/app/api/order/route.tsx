import type { NextApiRequest, NextApiResponse } from "next";
import Order from "../../../models/Order";
import dbConnect from "../../../lib/dbConnect";
import { OrderData } from '../../../../type';
import { NextResponse } from "next/server";


export const POST = async (req:NextApiRequest) => {

    dbConnect();
    

    try {
        const {
            clientName,
            clientEmail,
            productData,
            amount,
            status
        } = req.body;
      const order = await Order.create({
            clientName,
            clientEmail,
            productData,
            amount,
            status
      });
  
      return new NextApiResponse(JSON.stringify(order, { status: 201 }));
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
      );
    }
  };





{/*

export default async function handler(req: NextApiRequest, res: NextApiResponse<OrderData>) {
   

    const {method} = req;
    console.log(req);

    await dbConnect();

    if (method === 'POST') {
        try {
            const {
                clientName,
                clientEmail,
                productData,
                amount,
                status
            } = await req.body;
            const orderdata = await Order.create({
                clientName,
                clientEmail,
                productData,
                amount,
                status
            });
            res.status(201).json(orderdata);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

}



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
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

*/}