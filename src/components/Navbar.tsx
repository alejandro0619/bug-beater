import Image from "next/image";
import Link from "next/link";
export default function Navbar({ user }: { user: string }) {
  return (
    <div className="fixed left-0 top-0 flex w-full  flex-row justify-between bg-Details p-1">
      <Link href="/" className="flex cursor-pointer flex-row space-x-2">
        <Image src="/logo.png" alt="bug" width={40} height={15} />
        <strong className="pt-1"> Bug beater</strong>
      </Link>
      <h1 className="flex flex-col justify-center pr-2">
        <strong> {user} </strong>
      </h1>
    </div>
  );
}
