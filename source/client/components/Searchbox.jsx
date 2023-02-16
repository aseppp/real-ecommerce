import React from "react";

const Searchbox = () => {
  return (
    <>
      <div className="shadow-lg">
        <input
          type="text"
          className="w-full py-2 px-3 md:py-3 md:px-5 rounded placeholder:text-sm text-sm"
          placeholder="Search product"
        />
      </div>
    </>
  );
};

export default Searchbox;
