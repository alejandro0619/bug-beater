import Image from "next/image";
import Link from "next/link";
export default function Navbar({ user }: { user: string }) {
  return (
    <div className="border-b-2 border-borderColor fixed left-0 top-0 flex h-15 w-full flex-row justify-between bg-Navbar p-1 text-white">
      <Link href="/" className="flex cursor-pointer flex-row space-x-2 pl-10">
        <Image src="/logo.png" alt="bug" width={50} height={50} />
        <strong className="pt-3"> Bug beater</strong>
      </Link>
      <h1 className="flex flex-col justify-center pr-10">
        <strong> {user} </strong>
      </h1>
    </div>
  );
}
