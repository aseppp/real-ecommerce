import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Layout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      console.log(token);
      if (token == null || "") {
        router.push("/auth");
      }
    }
  }, []);
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;

// export const getServerSideProps = () => {
//   const router = useRouter();
//   // const token = localStorage.getItem("token");
//   // if (!token) {
//   //   router.push("/auth");
//   // }
//   if (typeof window !== "undefined") {
//     // You now have access to `window`
//     const token = localStorage.getItem("token");
//     console.log(token);
//     // if (token == null || "") {
//     //   router.push("/auth");
//     // }
//   }
// };
