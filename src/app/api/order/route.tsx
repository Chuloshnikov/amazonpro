import Order from "../../../models/Order";
import mongoose from "mongoose";
import { OrderData } from '../../../../type';
import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/dbConnect";


export const POST = async (request:NextRequest) => {

    await dbConnect();
    const data = await request.json();

    try {
      const order = await Order.create(data);
  
      return new NextResponse(JSON.stringify({ order }, null, 2), { status: 201 });
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