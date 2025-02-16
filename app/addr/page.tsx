"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';

const Page = () => {
    const [file, setFile] = useState<File | null>(null);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [dn, setDn] = useState<string>("");
    const [hn, setHn] = useState<string>("");
    const [diag, setDiag] = useState<string>("");
    const [uploadStatus, setUploadStatus] = useState<string>('');

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0] || null;
        setErrorMessage('');
        setFile(selectedFile);

        if (selectedFile) {
            if (selectedFile.type !== 'application/pdf') {
                setErrorMessage('Please upload a valid PDF file.');
                return;
            }
            if (selectedFile.size > 5 * 1024 * 1024) {
                setErrorMessage('File size exceeds 5MB limit.');
                return;
            }
        }
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setUploadStatus('Uploading...');

        const formData = new FormData();

        if (file && !errorMessage) { // Only append if file exists AND is valid
            formData.append('file', file);
        } else if (file && errorMessage) {
            console.error(errorMessage);
            alert(errorMessage);
            setUploadStatus('Upload Failed: ' + errorMessage);
            return;
        } else {
            console.warn("No valid file selected, proceeding with other data.");
        }

        formData.append('dn', dn);
        formData.append('hn', hn);
        formData.append('diag', diag);

        try {
            const response = await fetch('https://med-back.vercel.app/uploads', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                try {
                    const data = await response.json();
                    console.log('Upload successful:', data);
                    setFile(null);
                    setDn("");
                    setHn("");
                    setDiag("");
                    setUploadStatus('Upload Successful!');
                    alert('Data uploaded successfully!');
                } catch (jsonError) {
                    console.error('Unexpected success response (not JSON):', jsonError);
                    setUploadStatus('Upload Successful, but server response was unexpected.');
                    alert('Data uploaded, but server response was unexpected.');
                }
            } else {
                try {
                    const errorData = await response.json();
                    console.error('Upload error (JSON):', errorData);
                    setUploadStatus('Upload Failed: ' + (errorData.message || 'Unknown error'));
                    alert(`Data upload failed: ${errorData.message || 'Unknown error'}`);
                } catch (jsonError) {
                    const errorText = await response.text();
                    console.error('Upload error (text):', errorText);
                    setUploadStatus(`Upload Failed: ${response.status} - ${response.statusText}`);
                    alert(`Data upload failed: ${response.status} - ${response.statusText}`);
                }
            }
        } catch (error) {
            console.error('Upload error (general):', error);
            setUploadStatus('Upload Failed: An error occurred.');
            alert('Data upload failed: An error occurred.');
        }
    };

    const handleDn = (e: React.ChangeEvent<HTMLInputElement>) => setDn(e.target.value);
    const handleHn = (e: React.ChangeEvent<HTMLInputElement>) => setHn(e.target.value);
    const handleDiag = (e: React.ChangeEvent<HTMLInputElement>) => setDiag(e.target.value);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen font-poppins">
            <form onSubmit={handleSubmit} className='bg-slate-800 rounded-lg p-4 flex flex-col justify-center'>
                <div className='flex items-center space-x-6 text-white p-5 rounded-md'>
                    <h1>Enter Doctor's Name: </h1>
                    <input placeholder='Enter Doctor Name' onChange={handleDn} value={dn} className='rounded-md py-1 px-2 text-black' required />
                </div>
                <div className='flex items-center space-x-3 text-white p-5 rounded-md'>
                    <h1>Enter Hospital's Name: </h1>
                    <input placeholder='Enter Hospital Name' onChange={handleHn} value={hn} className='rounded-md py-1 px-2 text-black' required />
                </div>
                <div className='flex items-center space-x-16 text-white p-5 rounded-md'>
                    <h1>Enter Diagnosis: </h1>
                    <input placeholder='Enter Diagnosis' onChange={handleDiag} value={diag} className='rounded-md py-1 px-2 text-black' required />
                </div>
                <div className='flex items-center space-x-3 text-white p-5 rounded-md'>
                    <h1>Enter Report: </h1>
                    <input
                        type="file"
                        accept="application/pdf"
                        onChange={handleFileChange}
                        className="border border-gray-300 rounded p-2 text-black" // Added text-black for visibility
                    />
                </div>
                <button type="submit" className="bg-sky-700 text-white py-2 px-4 rounded hover:bg-sky-900">
                    Upload
                </button>
                {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
                <p className="mt-2 text-white">{uploadStatus}</p>
            </form>
        </div>
    );
};

export default Page;