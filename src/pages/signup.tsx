import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";

const SignUp: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <div className="grid h-screen place-items-center">
      <div className="border border-gray-500">
        <form>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
