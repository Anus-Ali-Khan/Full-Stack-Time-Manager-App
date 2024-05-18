import React from "react";
import { Riple } from "react-loading-indicators";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-[100%] h-[50vh]">
      <Riple color="#32cd32" size="medium" text="" textColor="" />
    </div>
  );
};

export default Loading;
