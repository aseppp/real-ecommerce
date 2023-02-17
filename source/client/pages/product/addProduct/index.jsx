import Head from "next/head";
import React from "react";

const AddProduct = () => {
  return (
    <>
      <Head>
        <title>Add Product</title>
      </Head>

      <div className="md:w-1/2 m-auto my-5">
        <h3 className="text-center text-lg md:text-2xl">Add new product </h3>
      </div>

      <div className="p-2">
        <div className="md:w-1/2 m-auto shadow-bottom bg-gray-100 dark:bg-darkBg rounded-lg p-1">
          <div className="mx-2 my-5 md:my-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="productName" className="text-sm">
                Product Name
              </label>
              <input
                type="text"
                className="py-2 px-3 md:py-3 md:px-5 rounded placeholder:text-sm text-sm"
                placeholder="eg: Iphone 14 pro max"
              />
            </div>
          </div>

          <div className="mx-2 my-5 md:my-6">
            <div className="flex flex-col gap-2 ">
              <label htmlFor="productPrice" className="text-sm">
                Product Price
              </label>
              <input
                type="text"
                className="py-2 px-3 md:py-3 md:px-5 rounded placeholder:text-sm text-sm"
                placeholder="eg: 11.000.000"
              />
            </div>
          </div>

          <div className="mx-2 my-5 md:my-6">
            <div className="flex flex-col gap-2 ">
              <label htmlFor="productPrice" className="text-sm">
                Product Price
              </label>
              <input
                type="text"
                className="py-2 px-3 md:py-3 md:px-5 rounded placeholder:text-sm text-sm"
                placeholder="eg: 11.000.000"
              />
            </div>
          </div>

          <div className="mx-2 my-5 md:my-6">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="multiple_files"
            >
              Product Image
            </label>
            <input
              class="p-3 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer  dark:text-gray-400 focus:outline-none  dark:border-gray-600 dark:placeholder-gray-400"
              id="multiple_files"
              type="file"
              multiple
            />
          </div>

          <div className="mx-2 my-5 md:my-6">
            <button className="w-full p-2 bg-blue-500 rounded-md">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
