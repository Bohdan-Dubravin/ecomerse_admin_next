import { Product } from '@/lib/models/Product';

import { IProduct } from '@/lib/types/product.types';

import type { NextApiRequest, NextApiResponse } from 'next';
import { mongooseConnect } from '@/lib/api/mongoose';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct | { message: 'Product not found' }>
) {
  await mongooseConnect();
  const { id } = req.query;
  const productDoc: IProduct | null = await Product.findOne({ _id: id });
  if (productDoc) {
    res.json(productDoc);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
}
