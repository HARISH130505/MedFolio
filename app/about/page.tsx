import { Database, Globe, Shield, SmartphoneNfc } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className='text-white font-poppins flex flex-col justify-center items-center m-5'>
        <div className='flex flex-col justify center items-center'>
            <h1 className='text-sky-700 text-3xl'>About MedFolio</h1>
            <p className=' w-[300] text-center md:w-[800] p-4'>MedFolio is revolutionizing healthcare by creating a secure, global network for patient records management using blockchain technology.</p>
        </div>
        <div className='md:grid grid-cols-2 gap-6 m-4'>
            <div className='w-[300] my-4 bg-slate-800 p-6 rounded-md md:w-[500]'>
                <h1 className='flex font-semibold'>Global Accessibility<Globe className='text-sky-700 mx-2'/></h1>
                <p className='py-2'>Access medical records instantly from anywhere in the world, breaking down geographical barriers in healthcare.</p>
            </div>
            <div className='w-[300] my-4 bg-slate-800 p-6 rounded-md md:w-[500]'>
                <h1 className='flex font-semibold'>Uncompromised Security<Shield className='text-sky-700 mx-2'/></h1>
                <p className='py-2'>State-of-the-art blockchain technology ensures your medical data remains private and tamper-proof.</p>
            </div>
            <div className='w-[300] my-4 bg-slate-800 p-6 rounded-md md:w-[500]'>
                <h1 className='flex font-semibold'>Decentralized Storage <Database className='text-sky-700 mx-2'/></h1>
                <p className='py-2'>Distributed storage system eliminates single points of failure and ensures data availability.</p>
            </div>
            <div className='w-[300] my-4 bg-slate-800 p-6 rounded-md md:w-[500]'>
                <h1 className='flex font-semibold'>Smart Integration<SmartphoneNfc className='text-sky-700 mx-2'/></h1>
                <p className='py-2'>Seamlessly connects with existing healthcare systems and electronic health records.</p>
            </div>
        </div>
        <div className=' bg-slate-800 p-6 rounded-md md:w-[1020]'>
            <h1 className='font-semibold'>Our Mission</h1>
            <p className='py-2'>To create a seamless, secure, and accessible global healthcare ecosystem where patient records are readily available to authorized healthcare providers worldwide, while maintaining the highest standards of privacy and security.</p>
        </div>
    </div>
  )
}

export default page