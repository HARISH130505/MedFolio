"use client";
import { CircleFadingPlus } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface MedicalRecord {
    dn: string;
    hn: string;
    diag: string;
    file:string;
}

const Page = () => {
    const [patientdet, setPatientdet] = useState<MedicalRecord[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRecords = async () => {
            try {
                const response = await fetch('https://med-back.vercel.app/');
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(`HTTP error! status: ${response.status}, message: ${errorData?.message || response.statusText}`);
                }
                const data: MedicalRecord[] = await response.json();
                setPatientdet(data);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    console.error("Error fetching records:", err.message);
                    setError(err.message);
                } else {
                    console.error("An unknown error occurred", err);
                    setError("An unknown error occurred");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchRecords();
    }, []);

    if (loading) {
        return <div>Loading records...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const showFile = (file: string)=>{
        window.open(`https://med-back.vercel.app/files/${file}`)
    }

    return (
        <div>
            <div className='text-white space-x-12 font-poppins px-5 mt-4'>
                <div>
                    <div className='flex justify-between'>
                        <h1 className='text-3xl font-poppins'>Records</h1>
                        <Link href="/addr">
                            <CircleFadingPlus />
                        </Link>
                    </div>
                    <div className=' text-white mt-6'>
                        {patientdet.map((det, index) => (
                            <div className=' rounded-md p-5 mb-5 bg-gray-800 flex justify-between items-center' key={index}>
                                <div>
                                    <h1 className='text-slate-400 '>Record#{index + 1}</h1>
                                    <ul className='pt-4'>
                                        <li>Doctor's Name: {det.dn}</li>
                                        <li>Hospital Name: {det.hn}</li>
                                        <li>Diagnosis: {det.diag}</li>
                                        
                                    </ul>
                                </div>
                                <button className='bg-sky-700 p-2 rounded-md h-fit' onClick={() => showFile(det.file)}>
                                        View Full Report
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;