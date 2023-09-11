"use client";
import Link from "next/link";

import { signIn, signOut, useSession } from "next-auth/react";

const AuthButton = () => {
    const { data: session } = useSession();
    console.log(session?.user);
  if (session) {
    return (
      <>
        {session?.user?.name}
        <br />
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  }
  return (
    <>
      Not Signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default function NavMenu() {
  return (
    <>
      <AuthButton />
    </>
  );
}
