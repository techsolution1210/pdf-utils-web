import React, { useEffect } from "react";
import jsPDF from 'jspdf';
import { useState } from "react";
import Image from "next/image";
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {BsFillArrowDownCircleFill} from 'react-icons/bs'
 
const jpg = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);


  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
      setImagePreview(URL.createObjectURL(file)); 
    };

  
    reader.readAsDataURL(file);
  };

  const convertToPDF = () => {
    const imgData = image;
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297); // Adjust width and height as needed (A4 dimensions used here)
    pdf.save("converted.pdf");
  };

  return (
    <div className={`flex h-[100vh] ml-10 md:ml-20 flex-col  bg-[#F5F7FA] items-center justify-between p-24 `}>
   
     
   {!image ? (
    <div className="mx-auto rounded-lg text-center py-16  ">
      <h2   class="text-3xl md:text-[40px] lg:text-[60px]  font-bold mb-8 text-gray-800">Jpg to PDF</h2>
      <p class="text-2xl text-gray-600 mb-8">
      Convert JPG images to PDF in seconds. Easily adjust orientation and margins.
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
        <input  className="hidden" type="file" accept="image/*" onChange={handleFileUpload} />
      </label>
      <p className=" text-sm text-gray-600">or drop PDFs here</p>
      {/* <div className="border-dashed border-2 border-gray-400 p-8 rounded-lg text-center">
       
      </div> */}
    </div>
  ) : (
    <>
          <div className="mx-auto max-w-md p-4 bg-white rounded-lg shadow-lg ">
            <div className="flex">
              {image?.length > 0 &&
              
                  <div className="mx-2">
                    <img
                      src={imagePreview}
                      width={200}
                      height={200}
                    />
                    <p>{image.name}</p>
                  </div>
                // ))
                }
            </div>

            <button onClick={convertToPDF} className=" flex justify-center items-center gap-3 mx-auto  focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
              Convert To PDF
              <BsFillArrowRightCircleFill/>
            </button>
             
            <button onClick={convertToPDF} className=" flex justify-center items-center gap-3 mx-auto  focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
              Downlopad Converted PDF
              <BsFillArrowDownCircleFill/>
            </button>
          </div>
        </>
           )}
</div>
  );
};

export default jpg;
