import React from 'react';
import PDFMerger from 'pdf-merger-js/browser';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { PDFDocument } from 'pdf-lib';

const inter = Inter({ subsets: ['latin'] });

const Merge = () => {
  const [mergedPdfUrl, setMergedPdfUrl] = useState();
  const [files, setFiles] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [preview, setpreview] = useState(null);

  useEffect(() => {
    if (!files) return;
    // const render = async () => {
    //   const merger = new PDFMerger();

    //   for(const file of files) {
    //     await merger.add(file)
    //   }

    //   const mergedPdf = await merger.saveAsBlob();
    //   const url = URL.createObjectURL(mergedPdf);

    //   return setMergedPdfUrl(url);
    // };

    // render().catch((err) => {
    //   throw err;
    // });

    // () => setMergedPdfUrl({});
  }, [files, setMergedPdfUrl]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFiles(files);
    setpreview(URL.createObjectURL(files[0]));
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files[0];

    if (file) {
      setSelectedFile(file);
    }
  };

  const mergePDFs = async () => {
    if (files.length < 2) {
      alert('Please select at least two PDF files');
      return;
    }

    const pdfDocs = await Promise.all(
      files.map((file) => {
        return file.arrayBuffer().then((data) => PDFDocument.load(data));
      })
    );

    const mergedPdf = await PDFDocument.create();

    for (const pdfDoc of pdfDocs) {
      const copiedPages = await mergedPdf.copyPages(
        pdfDoc,
        pdfDoc.getPageIndices()
      );
      copiedPages.forEach((page) => mergedPdf.addPage(page));
    }

    const mergedPdfData = await mergedPdf.save();

    const blob = new Blob([mergedPdfData], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'merged.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div
      className={`flex h-[100vh] ml-10 md:ml-20 flex-col  bg-[#F5F7FA] items-center justify-between py-16  ${inter.className}`}
    >
      {!files ? (
        <div className="mx-auto rounded-lg text-center py-16  ">
          <h2 class="text-3xl md:text-[40px] lg:text-[60px]  font-bold mb-8 text-gray-800">
            Merge PDF Files
          </h2>
          <p class="text-2xl text-gray-600 mb-8">
            Combine PDFs in the order you want, with the easiest PDF merger
            available.
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
              onChange={(e) => handleFileChange(e)}
            />
          </label>
          <p className=" text-sm text-gray-600">or drop PDFs here</p>
          {/* <div className="border-dashed border-2 border-gray-400 p-8 rounded-lg text-center">
           
          </div> */}
        </div>
      ) : (
        <>
          <div className="mx-auto mt-6  overflow-hidden bg-white rounded-lg shadow-lg ">
            <div className="flex">
              {files?.length > 0 &&
                files?.map((file) => (
                  <div key={file.name} className="mx-2 overflow-hidden">
                    <embed
                      className=" overflow-y-hidden"
                      src={URL.createObjectURL(file)}
                      type="application/pdf"
                      width="100%"
                      height="300px"
                    ></embed>
                    <p>{file.name}</p>
                  </div>
                ))}
            </div>

            {/* <button onClick={mergePDFs} className=" flex justify-center items-center gap-3 mx-auto focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
              Merge PDF
              <BsFillArrowRightCircleFill/>
            </button> */}

            <button
              onClick={mergePDFs}
              className=" flex justify-center items-center gap-3 mx-auto  focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Downlopad Merged PDF
              <BsFillArrowDownCircleFill />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Merge;
