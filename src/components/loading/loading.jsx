import React from "react";

export const Loading = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-slate-200 z-50 fixed w-full top-0 left-0">
        <div class="flex flex-row gap-2">
          <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
          <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
          <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
        </div>
      </div>
    </>
  );
};
