import { HeroIcon } from '@/components/ui/hero-icon/Heroicon';
import Link from 'next/link';
import ProductList from './products-list/ProductList';

const Products = () => {
  return (
    <div className="bg-white px-4 py-2">
      <Link
        href={'/products/new'}
        className="flex gap-1 items-center text-neutral-800 font-bold text-md border rounded-md w-fit pl-2 pr-4 border-neutral-300"
      >
        <HeroIcon icon="PlusIcon" className="text-neutral-800 w-8" /> Add new
        product
      </Link>
      <ProductList />
    </div>
  );
};
export default Products;
