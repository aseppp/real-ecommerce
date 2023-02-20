import AlertModal from "@/components/AlertModal";
import Navbar from "@/components/Navbar";
import { getToken } from "@/utils";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Layout = ({ children }) => {
  const router = useRouter();
  const token = getToken();

  useEffect(() => {
    if (token === null) {
      router.push("/auth");
    }
  }, [token]);

  return (
    <>
      <Navbar />
      {/* <AlertModal /> */}
      <main>{children}</main>
    </>
  );
};

export default Layout;
