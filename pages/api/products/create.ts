import { Product } from '@/lib/models/Product';

import { IProduct } from '@/lib/types/product.types';

import type { NextApiRequest, NextApiResponse } from 'next';
import { mongooseConnect } from '@/lib/api/mongoose';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct>
) {
  await mongooseConnect();
  const productDoc: IProduct = await Product.create(req.body);

  res.json(productDoc);
}
