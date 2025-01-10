"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import logo from "../public/logo.png"
const Navbar = () => {
    const [menuFlg, setMenuFlg] = useState(false);
    function handleChange() {
        setMenuFlg(!menuFlg);
    }
    return (
        <div>
            <nav className="flex justify-between items-center bg-slate-800 text-slate-400 py-3">
                <Image src={logo} alt="image" width={200}/>
                <ul className="hidden md:flex space-x-8 text-xl px-3">
                    <li>Home</li>
                    <li>Dashboard</li>
                    <li>Records</li>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                </ul>
                <div className="md:hidden">
                    {menuFlg ? (
                        <button
                            className="text-4xl px-2"
                            onClick={handleChange}
                        >
                            <Menu />
                        </button>
                    ) : (
                        <>
                            <button
                                className="text-4xl px-2 "
                                onClick={handleChange}
                            >
                                <Menu />
                            </button>
                            <ul className="bg-slate-800 w-full absolute top-16 left-0 text-2xl text-center">
                                <li className="py-4">Home</li>
                                <li className="py-4">Dashboard</li>
                                <SignedOut>
                                    <SignInButton/>
                                </SignedOut>
                            </ul>
                        </>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
