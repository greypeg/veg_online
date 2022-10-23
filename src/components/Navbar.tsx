import { useState } from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-zinc-900 flex h-24 mx-4 items-center justify-between text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">VEGLANCE.</h1>
      <ul className="hidden md:flex">
        <li className="p-4"><Link href="/">Home</Link></li>
        <li className="p-4"><Link href="/about">About</Link></li>
        <li className="p-4"><Link href="/pricing">Pricing</Link></li>
        <li className="p-4"><Link href="/contact">Contact</Link></li>
      </ul>
      <ul className="hidden md:flex">
      <button><Link href="/login">Log in</Link></button>
      <button><Link href="/signup">Sign up</Link></button>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <button>Close</button> : <button>Open</button>}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 h-full w-[70%] border-r border-r-gray-900 bg-[#000300] duration-500 ease-in-out"
            : "fixed left-[-100%] duration-500 ease-in-out"
        }
      >
        <h1 className="m-4 w-full text-3xl font-bold text-[#00df9a]">
          VEGLANCE.
        </h1>
        <li className="border-b border-gray-600 p-4">Home</li>
        <li className="border-b border-gray-600 p-4">About</li>
        <li className="border-b border-gray-600 p-4">Pricing</li>
        <li className="border-b border-gray-600 p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;

const AuthShowcase: React.FC = () => {
  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery();

  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {sessionData && (
        <p className="text-xl text-blue-500">
          Logged in as {sessionData?.user?.name}
        </p>
      )}
      {secretMessage && (
        <p
          className="text-
        xl text-blue-500"
        >
          {secretMessage}
        </p>
      )}
      <button
        className="text-md rounded-md border border-black bg-violet-50 px-4 py-2 shadow-lg hover:bg-violet-100"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
