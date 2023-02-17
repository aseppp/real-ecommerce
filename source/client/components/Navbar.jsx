import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FiMoon, FiSun } from "react-icons/fi";
import { BsCart4 } from "react-icons/bs";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <div>
            <FiSun size="20px" />
          </div>
        </button>
      );
    } else {
      return (
        <button
          type="button"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <div>
            <FiMoon size="20px" />
          </div>
        </button>
      );
    }
  };

  return (
    <>
      <header className="bg-gray-100 dark:bg-darkBg shadow-md dark:shadow-bottom">
        <div className="flex justify-between items-center md:w-1/2 m-auto">
          <Link href="/" className="flex items-center">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={50}
              height={50}
              className="rotate-90 w-12 md:w-16"
              priority
            />
            <p className="hidden md:block">realcommerce</p>
          </Link>

          <div className="flex items-center divide-x-[2px] gap-3 divide-gray-400">
            <div className="flex gap-3">
              <Link href="#">
                <p className="text-sm md:text-md">Wishlist</p>
              </Link>
              <Link href="/profile">
                <p className="text-sm md:text-md">Profile</p>
              </Link>
            </div>

            <div className="flex">
              <Link href="/cart" className="mx-2">
                <div>
                  <BsCart4 size="20px" />
                </div>
              </Link>

              <div className="mr-1 flex items-center justify-center">
                {toggleDarkMode()}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
