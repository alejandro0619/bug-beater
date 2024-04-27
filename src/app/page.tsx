import Link from "next/link";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";



export default function Home() {

  return (
    <main className="flex pt-18 flex-col justify-center items-center">
      <LoginLink>Inicia sesion</LoginLink>
      <Link href="/dashboard">Dashboard</Link>
    </main>
  );
}
