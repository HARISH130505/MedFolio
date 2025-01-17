import React from "react";
import ecg from "../public/ecg.gif"
import Image from "next/image";
import { Cross, MoveRight, Shield, Stethoscope } from "lucide-react";
import Link from "next/link";

const Page = () => {
    return (
     <div className="flex justify-center items-center text-white">
        <div className="flex flex-col justify-center items-center">
           <div className="w-[250] shadow-lg shadow-sky-800 mt-12 md:w-[500] ">
              <Image src={ecg} alt="ecg" width={600}></Image>
           </div>
           <h1 className="font-comforta  text-3xl p-4">Med<span className="text-cyan font-comforta text-3xl">Folio</span></h1>
           <p className="text-center font-poppins md:text-xl">Revolutionizing medical portfolios with cutting-edge technology.</p>
           <div className="flex space-x-4 items-center mt-5">
            <Link href="/about">
                <button className="flex justify-around  bg-cyan text-black font-poppins rounded-md p-3 w-52 ">Get Started<MoveRight/></button>
            </Link>
            <Stethoscope className="text-cyan"/>
            <Shield className="text-violet-400"/>
            <Cross className="text-cyan"/>
           </div>
        </div>
     </div>
    );
};

export default Page;
