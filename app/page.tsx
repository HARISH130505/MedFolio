import React from "react";
import ecg from "../public/ecg.gif";
import Image from "next/image";
import { Cross, MoveRight, Shield, Stethoscope } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex justify-center items-center text-white my-20">
      <div className="flex flex-col justify-center items-center w-full px-4 md:px-0">
        <div className="w-full shadow-lg shadow-sky-800 md:w-[500px]">
          <Image src={ecg} alt="ecg" width={600} height={400} layout="responsive" objectFit="contain" />
        </div>
        <h1 className="font-comforta text-3xl p-4 text-center">
          Med<span className="text-cyan font-comforta text-3xl">Folio</span>
        </h1>
        <p className="text-center font-poppins md:text-xl px-4">
          Revolutionizing medical portfolios with cutting-edge technology.
        </p>
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 items-center mt-5 w-full justify-center">
          <Link href="/about">
            <button className="flex justify-around bg-cyan text-black font-poppins rounded-md p-3 w-full md:w-52 mb-4 md:mb-0">
              Get Started<MoveRight />
            </button>
          </Link>
          <div className="flex space-x-4">
            <Stethoscope className="text-cyan" />
            <Shield className="text-violet-400" />
            <Cross className="text-cyan" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;