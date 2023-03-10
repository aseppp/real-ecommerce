import { formatMoney } from "@/utils";
import endpoint from "@/utils/url";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { BsCart4 } from "react-icons/bs";
import { IoMdArrowRoundBack } from "react-icons/io";
import useSwr from "swr";

const ProductView = () => {
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data } = useSwr(
    `${endpoint.BASE_URL}/product/${router.query.productId}`,
    fetcher
  );

  const detailsProduct = data?.data?.product;

  const variant = () => {
    if (data?.status === "success") {
      return (
        <>
          {data.data?.product &&
            JSON.parse(data.data?.product?.product_variant).map((item, key) => (
              <li
                key={key}
                className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
              >
                <div className="flex items-center pl-3">
                  <input
                    id="horizontal-list-radio-license"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="w-4 h-4 text-blue-600 "
                  />
                  <label
                    htmlFor="horizontal-list-radio-license"
                    className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {item}
                  </label>
                </div>
              </li>
            ))}
        </>
      );
    }
  };

  return (
    <>
      <Head>
        <title>{detailsProduct?.product_name} </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="p-2 md:w-1/2 m-auto h-h2">
        <div className="my-3">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-1"
          >
            <span>
              <IoMdArrowRoundBack />
            </span>
            Back
          </button>
        </div>

        <div>
          <div className="">
            <img
              className="w-full object-contain md:max-w-lg m-auto max-h-96"
              src={`${endpoint.IMAGE_URL}/${detailsProduct?.product_image}`}
              alt=""
            />
          </div>

          <div className="px-2 md:mt-16 mt-2">
            <h5 className="text-xl md:text-xl tracking-tight text-gray-900 dark:text-white">
              {detailsProduct?.product_name}
            </h5>
          </div>

          <div className="px-2 mt-1">
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Third star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fourth star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-4 h-4 text-gray-300 dark:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fifth star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
          </div>

          <div className="my-3">
            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-gray-100 border border-gray-200 rounded-lg sm:flex dark:bg-darkBg dark:border-gray-600 dark:text-white">
              {variant()}
            </ul>
          </div>

          <div className="p-2">
            <div className="flex justify-between items-center">
              <p>Rp {formatMoney(detailsProduct?.product_price)}</p>
            </div>
          </div>
        </div>

        <div>
          <button className="w-80 m-auto flex items-center justify-center gap-2 fixed bottom-5 left-0 right-0 p-2 bg-blue-500 rounded-lg">
            Add to cart
            <span>
              <BsCart4 />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductView;
