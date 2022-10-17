import React from 'react';
import type { NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";


const Login: NextPage = () => {
    const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  
    return (
      <>
      Login Page
      </>
    );
  };
  
  export default Login;