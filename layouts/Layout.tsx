import { useSession, signIn } from "next-auth/react";
import Navigation from "@/components/navbar/Navigation";
import Header from "@/components/header/Header";
type Props = {
  children?: React.ReactNode;
};
export default function Layout({ children }: Props) {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="bg-neutral-800 w-screen h-screen flex items-center">
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
    // <Layout>
    <>
      <Header />
      <div className="min-h-[calc(100vh-56px)] flex">
        <Navigation />
        <div className="flex-grow bg-slate-100">{children}</div>
      </div>
    </>
  );
}
