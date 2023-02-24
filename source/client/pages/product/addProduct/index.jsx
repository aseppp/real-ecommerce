import { createProduct } from "@/redux/features/actions/products";
import { getUser } from "@/utils";
import Head from "next/head";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const AddProduct = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const [variant, setVariant] = useState([]);
  const { watch, register, handleSubmit } = useForm();

  const removeVariant = (indexToRemove) => {
    setVariant([...variant.filter((_, index) => index !== indexToRemove)]);
  };
  const addVariant = (event) => {
    if (event.target.value !== "") {
      setVariant([...variant, event.target.value]);
      event.target.value = "";
    }
  };

  const alert = () => {
    if (product.isAdd) {
      return (
        <div
          className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <span className="font-medium">Add product success!</span>
        </div>
      );
    }

    if (product.loading) {
      return (
        <div
          className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
          role="alert"
        >
          <span className="font-medium">Loading</span>
        </div>
      );
    }

    if (product.isAdd === false) {
      return (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span className="font-medium">Error</span> {product.message}
        </div>
      );
    }
  };

  const onSubmit = () => {
    const data = new FormData();
    data.append("product_name", watch("product_name"));
    data.append("product_price", watch("product_price"));
    data.append("product_variant", JSON.stringify(variant));
    data.append("product_stock", watch("product_stock"));
    data.append("email", getUser());
    data.append("product_image", watch("product_image")[0]);

    dispatch(createProduct(data));
    // console.log(data.get);
  };

  return (
    <>
      <Head>
        <title>Add Product</title>
      </Head>

      <div className="md:w-1/2 m-auto my-5">
        <h3 className="text-center text-lg md:text-2xl">Add new product </h3>
      </div>

      <div className="p-2">
        <div className="md:w-1/2 m-auto">{alert()}</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:w-1/2 m-auto shadow-bottom bg-gray-100 dark:bg-darkBg rounded-lg p-1">
            <div className="mx-2 my-5 md:my-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="productName" className="text-sm">
                  Product Name
                </label>
                <input
                  {...register("product_name")}
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
                  {...register("product_price")}
                  type="text"
                  className="py-2 px-3 md:py-3 md:px-5 rounded placeholder:text-sm text-sm"
                  placeholder="eg: 11.000.000"
                />
              </div>
            </div>

            <div className="mx-2 my-5 md:my-6">
              <div className="flex flex-col gap-2 ">
                <label htmlFor="productStock" className="text-sm">
                  Product Stock
                </label>
                <input
                  {...register("product_stock")}
                  type="text"
                  className="py-2 px-3 md:py-3 md:px-5 rounded placeholder:text-sm text-sm"
                  placeholder="eg: 11.000.000"
                />
              </div>
            </div>

            <div className="mx-2 my-5 md:my-6">
              <div className="flex flex-col gap-2 ">
                <label htmlFor="productVariant" className="text-sm">
                  Product Variant
                </label>
                <div className="border p-1 flex gap-1 flex-wrap rounded-lg">
                  <ul className="flex flex-wrap">
                    {variant.map((item, index) => (
                      <li key={index} className="m-1">
                        <span
                          id="badge-dismiss-default"
                          className="inline-flex items-center px-2 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-300"
                        >
                          {item}
                          <button
                            onClick={() => removeVariant(index)}
                            type="button"
                            className="inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300"
                            data-dismiss-target="#badge-dismiss-default"
                            aria-label="Remove"
                          >
                            <svg
                              aria-hidden="true"
                              className="w-3.5 h-3.5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            <span className="sr-only">Remove badge</span>
                          </button>
                        </span>
                      </li>
                    ))}
                  </ul>

                  <input
                    className="focus:outline-0 bg-transparent min-w-min"
                    type="text"
                    onKeyUp={(event) =>
                      event.key === " " ? addVariant(event) : null
                    }
                    placeholder="Press spacebar to add"
                  />
                </div>
              </div>
            </div>

            <div className="mx-2 my-5 md:my-6">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="multiple_files"
              >
                Product Image
              </label>
              <input
                {...register("product_image")}
                className="p-3 block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="default_size"
                type="file"
              />
            </div>

            <div className="mx-2 my-5 md:my-6">
              <button
                type="submit"
                className="w-full p-2 bg-blue-500 rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
