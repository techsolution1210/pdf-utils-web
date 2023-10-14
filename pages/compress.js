import React from 'react'
import JSZip from 'jszip';
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {BsFillArrowDownCircleFill} from 'react-icons/bs'
import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';

const compress = () => {
   

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setpreview] = useState(null);

  const compressPDF = async () => {
    if (!selectedFile) {
      alert('Please select a PDF file');
      return;
    }

    const fileData = await selectedFile.arrayBuffer();
    const pdfDoc = await PDFDocument.load(fileData);

    const pdfBytes = await pdfDoc.save();

    const zip = new JSZip();
    zip.file('compressed.pdf', pdfBytes);

    const zipBlob = await zip.generateAsync({ type: 'blob' });

    const a = document.createElement('a');
    a.href = URL.createObjectURL(zipBlob);
    a.download = 'compressed.zip';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setpreview(URL.createObjectURL(file))
  };


  return (
    <div className={`flex h-[100vh] ml-10 md:ml-20 flex-col  bg-[#F5F7FA] items-center justify-between px-6 py-24 `}>
   
   {!selectedFile ? (
    <div className="mx-auto rounded-lg text-center py-16  ">
      <h2   class="text-3xl md:text-[40px] lg:text-[60px]  font-bold mb-8 text-gray-800">Compress PDF</h2>
      <p class="text-2xl text-gray-600 mb-8">
      Reduce file size while optimizing for maximal PDF quality.
      </p>
      <label className="relative w-[180px] md:w-[250px] h-auto md:h-[80px] cursor-pointer bg-red-600 hover:bg-red-700 text-white mx-auto font-medium rounded-lg text-xs md:text-xl px-5 py-2.5 mb-4 transition duration-300 ease-in-out inline-flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        <span>Select PDF Files</span>
        <input
          type="file"
          accept=".pdf"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
      <p className=" text-sm text-gray-600">or drop PDFs here</p>
      {/* <div className="border-dashed border-2 border-gray-400 p-8 rounded-lg text-center">
       
      </div> */}
    </div>
   ):(
    <>
          <div className="mx-auto max-w-md p-4 bg-white rounded-lg shadow-lg ">
            <div className="flex">
              {selectedFile &&
              
                  <div className="mx-2">
                 <embed className=" " src={URL.createObjectURL(selectedFile)} type="application/pdf" width="100%" height='300px'>
                   </embed>
                    <p>{selectedFile.name}</p>
                  </div>
                // ))
                }
            </div>

            <button onClick={compressPDF} className=" flex justify-center items-center gap-3 mx-auto  focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
              Compress
              <BsFillArrowRightCircleFill/>
            </button>
            
            <button onClick={compressPDF} className=" flex justify-center items-center gap-3 mx-auto  focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
              Downlopad Compressed File
              <BsFillArrowDownCircleFill/>
            </button>
          </div>
        </>
         )}
</div>
  )
}

export default compress
