import { Product } from "@/lib/models/Product";
import clientPromise from "@/lib/mongodb";
import { IProduct } from "@/lib/types/product.types";
import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct>
) {
  mongoose.Promise = clientPromise;
  const productDoc: IProduct = await Product.create(req.body);

  res.json(productDoc);
}
