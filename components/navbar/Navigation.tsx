import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="text-white p-4 bg-neutral-800 ">
      <nav className="flex flex-col gap-4">
        <Link className="flex gap-2 items-center " href={"/"}>
          <Image src="/home.svg" width={32} height={32} alt="home" />
          Dashboard
        </Link>
        <Link className="flex gap-2 items-center " href={"/"}>
          <Image src="/product.svg" width={32} height={32} alt="home" />
          Products
        </Link>
        <Link className="flex gap-2 items-center" href={"/"}>
          <Image src="/orders.svg" width={32} height={32} alt="home" />
          Orders
        </Link>
        <Link className="flex gap-2 items-center" href={"/"}>
          <Image src="/settings.svg" width={32} height={32} alt="home" />
          Settings
        </Link>
      </nav>
    </div>
  );
};
export default Navigation;
