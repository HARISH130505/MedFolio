import React from "react";
import ecg from "../public/ecg.gif"
import Image from "next/image";

const Page = () => {
    return (
     <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
           <Image src={ecg} alt="ecg" width={700}></Image>
           <button className="bg-slate-400 rounded-md p-3 w-52">Explore</button>
        </div>
     </div>
    );
};

export default Page;
