import { getKindeServerSession, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import Link from "next/link";
import SessionButton from "./SessionButton";
export default async function Navbar() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isAuth = await isAuthenticated();
  const user = (await getUser());

  return (
    <nav className="h-15 fixed left-0 top-0 flex w-full flex-row justify-between border-b-2 border-borderColor bg-Navbar p-1 text-white">
      <Link href="/" className="flex cursor-pointer flex-row space-x-2 pl-10">
        <Image src="/logo.png" alt="bug" width={50} height={50} />
        <strong className="pt-3">Bug beater</strong>
      </Link>
      <SessionButton isAuth={isAuth} user={user} />
    </nav>
  );
}
