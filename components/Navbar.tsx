"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import logo from "../public/logo.png";
import { usePathname } from 'next/navigation';


const Navbar = () => {
    const [menuFlg, setMenuFlg] = useState(false);
    const pathname = usePathname();

    const handleChange = () => {
        setMenuFlg(!menuFlg);
    };

    const handleLinkClick = () => {
        setMenuFlg(false);
    };

    useEffect(() => {
      setMenuFlg(false);
    }, [pathname]);

    return (
        <div>
            <nav className="flex justify-between items-center bg-slate-800 text-slate-400 font-poppins p-3">
                <Link href="/" onClick={handleLinkClick}><Image src={logo} alt="image" width={200} /></Link>
                <ul className="hidden md:flex space-x-8 text-xl px-3">
                    <li ><Link href="/dashboard" onClick={handleLinkClick}>Dashboard</Link></li>
                    <li><Link href="/records" onClick={handleLinkClick}>Records</Link></li>
                    <li><Link href="/diet" onClick={handleLinkClick}>Diet Chart</Link></li>
                    <SignedOut>
                        <li><SignInButton /></li>
                    </SignedOut>
                    <SignedIn>
                       <li><UserButton /></li>
                    </SignedIn>
                </ul>
                <div className="md:hidden">
                    <button
                        title="btn"
                        type="button"
                        className="text-4xl px-2"
                        onClick={handleChange}
                    >
                        <Menu />
                    </button>
                    {menuFlg && (
                        <ul className="bg-slate-800 w-full absolute top-16 left-0 text-2xl text-center z-10"> {/* Added z-index */}
                            <li className="py-4"><Link href="/dashboard" onClick={handleLinkClick}>Dashboard</Link></li>
                            <li className="py-4"><Link href="/records" onClick={handleLinkClick}>Records</Link></li>
                            <li className="py-4"><Link href="/diet" onClick={handleLinkClick}>Diet Chart</Link></li>
                            <li className="py-4">
                                <SignedOut>
                                    <SignInButton />
                                </SignedOut>
                                <SignedIn>
                                    <UserButton />
                                </SignedIn>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;