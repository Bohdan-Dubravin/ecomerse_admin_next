import Image from 'next/image';
import Link from 'next/link';

const Navigation = () => {
  const link = 'flex gap-2 items-center font-bold pl-2 pr-5';
  const activeLink = link + ' bg-neutral-200 text-neutral-900 rounded-l-lg';
  return (
    <div className="text-white p-4 pr-0 bg-neutral-800">
      <nav className="flex flex-col gap-4">
        <Link className={activeLink} href={'/'}>
          <Image
            className="stroke-black"
            src="/home.svg"
            width={32}
            height={32}
            alt="home"
          />
          Dashboard
        </Link>
        <Link className="flex gap-2 items-center " href={'products/'}>
          <Image src="/product.svg" width={32} height={32} alt="home" />
          Products
        </Link>
        <Link className="flex gap-2 items-center" href={'/orders'}>
          <Image src="/orders.svg" width={32} height={32} alt="home" />
          Orders
        </Link>
        <Link className="flex gap-2 items-center" href={'/settings'}>
          <Image src="/settings.svg" width={32} height={32} alt="home" />
          Settings
        </Link>
      </nav>
    </div>
  );
};
export default Navigation;
