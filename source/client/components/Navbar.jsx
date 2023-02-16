import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FiMoon, FiSun } from "react-icons/fi";
import { BsCart4 } from "react-icons/bs";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <header className="bg-gray-100 dark:bg-darkBg shadow-md dark:shadow-bottom">
        <div className="flex justify-between items-center md:w-1/2 m-auto">
          <div className="flex items-center">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={50}
              height={50}
              className="rotate-90 w-12 md:w-16"
              priority
            />
            <p>realcommerce</p>
          </div>

          <div className="flex items-center divide-x-[2px] gap-3 divide-gray-400">
            <div className="flex gap-3">
              <Link href="#">
                <p className="text-sm md:text-md">Products</p>
              </Link>
              <Link href="#">
                <p className="text-sm md:text-md">Wishlist</p>
              </Link>
            </div>

            <div className="flex">
              <Link href="/cart" className="mx-2">
                <span>
                  <BsCart4 size="20px" />
                </span>
              </Link>

              {currentTheme === "dark" ? (
                <button
                  type="button"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <span>
                    <FiSun size="20px" />
                  </span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  <span>
                    <FiMoon size="20px" />
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
