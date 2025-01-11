import { CircleFadingPlus } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

const page = () => {
  const patientdet = [
    {
        id:1,
        dn:"Dr.Pranav",
        hn:"Apollo",
        diagnosis:"Asthma",
    },
    {
        id:2,
        dn:"Dr.Ram",
        hn:"Malar",
        diagnosis:"Cancer"
    },
    {
        id:3,
        dn:"Dr.Ravi",
        hn:"Medicare",
        diagnosis:"Heart Problem"
    },
    {
        id:4,
        dn:"Dr.David",
        hn:"Kaveri",
        diagnosis:"Diabetes"
    }
  ]
  return (
    <div>
        <div className='text-white space-x-12 font-poppins px-5 mt-4'>
            <div>
            <div className='flex justify-between'>
                <h1 className='text-3xl font-poppins'>Records</h1>
                <Link href="/addr">
                    <CircleFadingPlus/>
                </Link>
            </div>
            <div className=' text-white mt-6'>
            {patientdet.map((det,index)=>(
                <div className=' rounded-md  p-5 mb-5 bg-gray-800 flex justify-between items-center' key={index}>
                    <div>
                        <h1 className='text-slate-400 '>Record#{det.id}</h1>
                        <ul className='pt-4'>
                            <li>Doctor's Name: {det.dn}</li>
                            <li>Hospital Name: {det.hn}</li>
                            <li>Diagnosis: {det.diagnosis}</li>
                        </ul>
                    </div>
                    <button className='bg-sky-700 p-2 rounded-md h-fit'>View Full Report</button>
                </div>
            ))}
            </div>
            </div>
        </div>
    </div>
  )
}

export default page