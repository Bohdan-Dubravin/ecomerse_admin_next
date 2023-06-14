import { HeroIcon } from "@/components/ui/hero-icon/Heroicon";
import Link from "next/link";
import CategoryList from "./categories-list/CategoryList";

const Categories = () => {
  return (
    <div className="bg-slate-100 min-h-screen px-4 py-2">
      <div className="bg-white p-4 mb-4 rounded-md">
        <Link
          href={"/categories/new"}
          className="hover:bg-white bg-blue-600 group hover:text-blue-600 hover:shadow-xl transition  flex gap-1 my-4 mb-6 items-center shadow-lg text-white font-bold text-md text-lg border rounded-md w-fit pl-2 pr-4 border-blue-600"
        >
          <HeroIcon
            icon="PlusIcon"
            className="text-white w-8 group-hover:text-blue-600"
          />
          Add new Category
        </Link>
      </div>
      <CategoryList />
    </div>
  );
};
export default Categories;
