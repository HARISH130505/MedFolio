import React from 'react'

const page = () => {
  const patientdet = [
    {
        id:1,
        dn:"Dr.Pranav",
        hn:"Appolo",
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
        <div className='text-white h-screen w-screen font-poppins'>
            <h1 className='font-poppins text-3xl'>Records</h1>
            <div className='flex flex-col m-10  text-white'>
            {patientdet.map((det,index)=>(
                <div className=' rounded-md  p-5 mb-5 bg-gray-800'>
                    <div className='flex justify-between'>
                       <h1 className='text-slate-400 '>Record#{det.id}</h1>
                       <a className='text-sky-700 font-semibold'>View Full Details</a>
                    </div>
                    
                    <ul className='pt-4'>
                        <li>Doctor's Name: {det.dn}</li>
                        <li>Hospital Name: {det.hn}</li>
                        <li>Diagnosis: {det.diagnosis}</li>
                    </ul>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default page