"use client"
import React,{useState, ChangeEvent, FormEvent} from 'react'

const page = () => {
    const [pdfFile, setPdfFile] = useState<File | null>(null);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setErrorMessage(''); // Clear previous error messages

        // Validate file type and size
        if (file) {
            if (file.type !== 'application/pdf') {
                setErrorMessage('Please upload a valid PDF file.');
                setPdfFile(null);
                return;
            }
            if (file.size > 5 * 1024 * 1024) { // 5MB limit
                setErrorMessage('File size exceeds 5MB limit.');
                setPdfFile(null);
                return;
            }
            setPdfFile(file);
        }
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (pdfFile) {
            // Handle the file upload logic here
            console.log('File ready for upload:', pdfFile.name);
            alert('File is valid and ready for upload: ' + pdfFile.name);
        }
    };
    const [dn, setDn] = useState<string>("");
    const [hn, setHn] = useState<string>("");
    const [diagnosis, setDiagnosis] = useState<string>("");

    const handleDn = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDn(e.target.value);
    };

    const handleHn = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHn(e.target.value);
    };

    const handleDiag = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDiagnosis(e.target.value);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen font-poppins">
            <form onSubmit={handleSubmit}className='bg-slate-800 rounded-lg p-4 flex flex-col justify-center'>
            <div className='flex items-center space-x-6 text-white p-5 rounded-md'>
                <h1>Enter Doctor's Name: </h1>
                <input placeholder='Enter Doctor Name' onChange={handleDn} value={dn} className='rounded-md py-1 px-2 text-black'></input>
            </div>
            <div  className='flex items-center space-x-3   text-white p-5 rounded-md'>
               <h1>Enter Hospital's Name: </h1>
               <input placeholder='Enter Hospital Name' onChange={handleHn} value={hn} className='rounded-md py-1 px-2 text-black'></input>
            </div>
            <div  className='flex items-center space-x-16  text-white p-5 rounded-md'>
                <h1>Enter Diagnosis: </h1>
                <input placeholder='Enter Diagnosis' onChange={handleDiag} value={diagnosis} className='rounded-md py-1 px-2 text-black'></input>
            </div>
            <div className='flex items-center space-x-3  text-white p-5 rounded-md'>
                <h1>Enter Report: </h1>
                <input
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    className="border border-gray-300 rounded p-2"
                    required
                />
            </div>
                <button
                    type="submit"
                    className="bg-sky-700 text-white py-2 px-4 rounded hover:bg-sky-900"
                >
                    Upload
                </button>
                {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </form>
        </div>
    );
}

export default page