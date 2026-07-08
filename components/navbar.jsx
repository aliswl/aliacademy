"use client";

import { useSession } from "@/lib/auth/auth-client";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import SignOutButton from "./signout";

export default function Navbar() {
    const { data: session } = useSession();


    return(
        <nav className="border-b border-gray-300 bg-white">
            <div className="container mx-auto flex h-16 items-center px-4 justify-between">
                <Link href="/" className="group flex items-center gap-2 text-xl font-semibold text-black ">
                    <img src="/logo-bg.png" alt="Logo" className="h-8 w-8 select-none transition-transform duration-300 group-hover:scale-110" />
                    <span className="select-none">Ali Academy</span>
                </Link>
                {session?.user ? 
                 <>
                    <DropdownMenu>
                        <DropdownMenuTrigger aschild={"true"}>
                        <div
                            className="relative h-8 w-8 rounded-full cursor-pointer hover:scale-110 transition duration-300 shadow-lg hover:shadow-green-500/50"
                        >
                            <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-primary text-white">
                                {session.user.name[0].toUpperCase()}
                            </AvatarFallback>
                            </Avatar>
                        </div>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className="w-56" align="end">
                            <div className="px-2 py-2">
                                <p className="text-sm font-medium select-none">
                                {session.user.name}
                                </p>

                                <p className="text-xs text-muted-foreground select-none">
                                {session.user.email}
                                </p>
                                <SignOutButton />
                                <div variant="outline" className="w-full mt-2 text-center rounded-lg cursor-pointer border-2 border-white hover:border-2 hover:border-black">
                                    <Link href="/admin">Admin</Link>
                                </div>
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    </>
                : <>
                    <Link href="/sign-in" className="border-2 border-black rounded-2xl p-1.5 hover:scale-110 transition duration-300 shadow-lg hover:shadow-green-500/50">
                       <img src="/usera.png" alt="Logo" className="h-4 w-4 select-none " />
                    </Link>
                </>}
              
            </div>
        </nav>
    )
}