"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';

const Page = () => {
    const [file, setFile] = useState<File | null>(null);
    const [fileErrorMessage, setFileErrorMessage] = useState<string>('');
    const [otherDetailsErrorMessage, setOtherDetailsErrorMessage] = useState<string>('');
    const [dn, setDn] = useState<string>("");
    const [hn, setHn] = useState<string>("");
    const [diag, setDiag] = useState<string>("");

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0] || null;
        setFileErrorMessage('');

        if (selectedFile) {
            if (selectedFile.type !== 'application/pdf') {
                setFileErrorMessage('Please upload a valid PDF file.');
                setFile(null);
                return;
            }
            if (selectedFile.size > 5 * 1024 * 1024) {
                setFileErrorMessage('File size exceeds 5MB limit.');
                setFile(null);
                return;
            }
            setFile(selectedFile);
        }
    };

    const handleFileSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!file) {
            setFileErrorMessage('Please select a PDF file.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('https://med-back.vercel.app/uploads', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setFile(null);
                setFileErrorMessage('');
                alert("File uploaded succesfully")
            } else {
                const errorData = await response.json();
                console.error('File upload error:', errorData);
                setFileErrorMessage(`File upload failed: ${errorData.message || 'Unknown error'}`);
                alert("File upload failed")
            }
        } catch (error) {
            console.error('File upload error (general):', error);
            setFileErrorMessage('File upload failed: An error occurred.');
            alert("File upload failed: An error occurred.")
        }
    };


    const handleDetailsSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setOtherDetailsErrorMessage('');

        const details = {
            dn,
            hn,
            diag,
        };

        try {
            const response = await fetch('https://med-back.vercel.app/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(details),
            });

            if (response.ok) {
                setDn("");
                setHn("");
                setDiag("");
                setOtherDetailsErrorMessage('');
                alert("File uploaded succesfully")
            } else {
                const errorData = await response.json();
                console.error('Details upload error:', errorData);
                setOtherDetailsErrorMessage(`Details upload failed: ${errorData.message || 'Unknown error'}`);
                alert("File upload failed")
            }

        } catch (error) {
            console.error('Details upload error:', error);
            setOtherDetailsErrorMessage('Details upload failed: An error occurred.');
            alert("File upload failed: An error occurred.")
        }
    };

    const handleDn = (e: React.ChangeEvent<HTMLInputElement>) => setDn(e.target.value);
    const handleHn = (e: React.ChangeEvent<HTMLInputElement>) => setHn(e.target.value);
    const handleDiag = (e: React.ChangeEvent<HTMLInputElement>) => setDiag(e.target.value);

    return (
        <div className="flex items-center justify-center min-h-screen font-poppins">
            <div className="container mx-auto p-8 md:p-16 md:flex justify-center items-center md:space-x-8">
                <div className="bg-slate-800 rounded-lg p-6 mb-4 w-full md:w-3/4 lg:w-1/2">
                    <form onSubmit={handleDetailsSubmit} className="flex flex-col">
                        <div className="mb-4">
                            <label htmlFor="doctorName" className="block text-white mb-2">Doctor's Name:</label>
                            <input
                                type="text"
                                id="doctorName"
                                placeholder="Enter Doctor Name"
                                onChange={handleDn}
                                value={dn}
                                className="w-full rounded-md py-2 px-3 text-black focus:outline-none focus:ring-2 focus:ring-sky-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="hospitalName" className="block text-white mb-2">Hospital's Name:</label>
                            <input
                                type="text"
                                id="hospitalName"
                                placeholder="Enter Hospital Name"
                                onChange={handleHn}
                                value={hn}
                                className="w-full rounded-md py-2 px-3 text-black focus:outline-none focus:ring-2 focus:ring-sky-500"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="diagnosis" className="block text-white mb-2">Diagnosis:</label>
                            <input
                                type="text"
                                id="diagnosis"
                                placeholder="Enter Diagnosis"
                                onChange={handleDiag}
                                value={diag}
                                className="w-full rounded-md py-2 px-3 text-black focus:outline-none focus:ring-2 focus:ring-sky-500"
                                required
                            />
                        </div>
                        <button type="submit" className="bg-sky-700 text-white py-2 px-4 rounded hover:bg-sky-900 w-full">
                            Upload Details
                        </button>
                        {otherDetailsErrorMessage && <p className="text-red-500 mt-2">{otherDetailsErrorMessage}</p>}
                    </form>
                </div>

                <div className="bg-slate-800 rounded-lg p-6 w-full md:w-3/4 lg:w-1/2">
                    <form onSubmit={handleFileSubmit} className="flex flex-col">
                        <div className="mb-4">
                            <label htmlFor="report" className="block text-white mb-2">Report:</label>
                            <input
                                type="file"
                                id="report"
                                accept="application/pdf"
                                onChange={handleFileChange}
                                className="w-full border border-gray-300 rounded py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                                required
                            />
                        </div>
                        <button type="submit" className="bg-sky-700 text-white py-2 px-4 rounded hover:bg-sky-900 w-full">
                            Upload Report
                        </button>
                        {fileErrorMessage && <p className="text-red-500 mt-2">{fileErrorMessage}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Page;