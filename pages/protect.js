import React from 'react'


const protect = () => {
  return (
    <div className={`flex h-[100vh] ml-10 md:ml-20 flex-col  bg-[#F5F7FA] items-center justify-between p-24 `}>
   

    <div className="mx-auto rounded-lg text-center py-16  ">
      <h2   class="text-3xl md:text-[40px] lg:text-[60px]  font-bold mb-8 text-gray-800">Protect PDF Files</h2>
      <p class="text-2xl text-gray-600 mb-8">
      Encrypt your PDF with a password to keep sensitive data confidential.
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
        
        />
      </label>
      <p className=" text-sm text-gray-600">or drop PDFs here</p>
      {/* <div className="border-dashed border-2 border-gray-400 p-8 rounded-lg text-center">
       
      </div> */}
    </div>

    <>
      <div className="mx-auto max-w-md p-4 bg-white rounded-lg shadow-lg ">
        <div className="flex">
        
        </div>

      </div>
    </>
</div>
  )
}

export default protect