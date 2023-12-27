export {default} from "next-auth/middleware";
import type { NextApiRequest, NextApiResponse } from "next";

export const config = {
    matcher: ["/cart", "/wishlist"],
}


