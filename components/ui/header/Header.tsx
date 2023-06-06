import { useSession } from "next-auth/react";
const Header = () => {
  const { data: session } = useSession();
  return (
    <header className="flex px-4 text-white justify-between bg-neutral-900 h-14 items-center">
      <h2>
        Hello, <b>{session?.user?.name}</b>
      </h2>
      <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
        <img src={session?.user?.image || ""} alt="" className="w-6 h-6" />
        <span className="px-2">{session?.user?.name}</span>
      </div>
    </header>
  );
};
export default Header;
