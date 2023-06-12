import { Product } from "@/lib/models/Product";

import { IProduct } from "@/lib/types/product.types";

import type { NextApiRequest, NextApiResponse } from "next";
import { mongooseConnect } from "@/lib/api/mongoose";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct>
) {
  const { id } = req.query;

  await mongooseConnect();
  const productDoc: IProduct | null = await Product.findByIdAndUpdate(
    id,
    {
      $push: { images: req.body },
    },
    { new: true }
  );
  console.log(productDoc);

  if (productDoc) {
    res.json(productDoc);
  } else {
    console.log(res);
  }
}
