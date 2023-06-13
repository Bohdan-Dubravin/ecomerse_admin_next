import { HeroIcon } from "@/components/ui/hero-icon/Heroicon";
import Link from "next/link";
import ProductList from "./products-list/ProductList";

const Products = () => {
  return (
    <div className="bg-white px-4 py-2">
      <Link
        href={"/products/new"}
        className="hover:bg-neutral-800 group hover:text-white hover:shadow-xl transition  flex gap-1 my-4 mb-6 items-center shadow-lg text-neutral-800 font-bold text-md text-lg border rounded-md w-fit pl-2 pr-4 border-neutral-300"
      >
        <HeroIcon
          icon="PlusIcon"
          className="text-neutral-800 w-8 group-hover:text-white"
        />
        Add new product
      </Link>
      <ProductList />
    </div>
  );
};
export default Products;
