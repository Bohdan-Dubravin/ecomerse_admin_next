import { useSession, signIn } from "next-auth/react";
import Navbar from "@/components/ui/navbar/Navbar";
import Header from "@/components/ui/header/Header";
type Props = {
  children?: React.ReactNode;
};
export default function Layout({ children }: Props) {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="bg-neutral-800 w-screen min-h-screen flex items-center">
        <div className="w-full text-center">
          <button
            className="bg-white rounded-sm p-4"
            onClick={() => signIn("google")}
          >
            Sign in
          </button>
        </div>
      </div>
    );
  }
  return (
    <>
      <Header />
      <div className="flex min-h-[calc(100vh-56px)]">
        <Navbar />
        <div className="flex-grow bg-slate-100">{children}</div>
      </div>
    </>
  );
}
