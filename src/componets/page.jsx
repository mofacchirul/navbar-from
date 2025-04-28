"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";


export default function Navbar() {
  const { data: session } = useSession();
  console.log("Profile Session:", session);

  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <Link href="/" className="text-xl font-bold">
        My Website
      </Link>
      <div>
        
          <Link href="/singin">
            <button className="btn btn-success">Sign In</button>
          </Link>
        
      </div>
    </nav>
  );
}
