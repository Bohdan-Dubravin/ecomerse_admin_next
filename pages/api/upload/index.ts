import { Product } from '@/lib/models/Product';

import { IProduct } from '@/lib/types/product.types';

import type { NextApiRequest, NextApiResponse } from 'next';
import { mongooseConnect } from '@/lib/api/mongoose';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: 'Route now working' }>
) {
  // await mongooseConnect();
  // const productDoc: IProduct = await Product.create(req.body);
  // res.json(productDoc);
  res.status(404);
  // throw new Error('Route now working');
}
