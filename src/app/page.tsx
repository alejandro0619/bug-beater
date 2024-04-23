import Link from "next/link";


export default function Home() {
  return <main>
    <h1> main </h1>
    <Link href="/login">
      Inicia sesion
    </Link>
    <Link href="/dashboard">
      Dashboard
    </Link>
  </main>;
}
