"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import logo from "../public/logo.png"
const Navbar = () => {
    const [menuFlg, setMenuFlg] = useState(false);
    function handleChange() {
        setMenuFlg(!menuFlg);
    }
    return (
        <div>
            <nav className="flex justify-between items-center bg-slate-800 text-slate-400 font-poppins p-3">
                <Link href="/"><Image src={logo} alt="image" width={200} /></Link>
                <ul className="hidden md:flex space-x-8 text-xl px-3">
                    <Link href="/dashboard">Dashboard</Link>
                    <Link href="/records">Records</Link>
                    <Link href="/diet">Diet Chart</Link>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </ul>
                <div className="md:hidden">
                    {menuFlg ? (
                    <button title="btn" type="button"
                            className="text-4xl px-2"
                            onClick={handleChange}
                        >
                            <Menu />
                        </button>
                    ) : (
                        <>
                    <button title="btn" type="button" className="text-4xl px-2 "onClick={handleChange}><Menu /></button>
                            <ul className="bg-slate-800 w-full absolute top-16 left-0 text-2xl text-center">
                                <li className="py-4"><Link href="/dashboard">Dashboard</Link></li>
                                <li className="py-4"><Link href="/records">Records</Link></li>
                                <li className="py-4"><Link href="/diet">Diet Chart</Link></li>
                                <li className="py-4">
                                    <SignedOut>
                                        <SignInButton />
                                    </SignedOut>
                                    <SignedIn>
                                        <UserButton />
                                    </SignedIn>
                                </li>
                                
                            </ul>
                        </>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
