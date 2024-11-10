import { useState, useRef, useEffect } from "react";

export default function App() {
  const inputRef = useRef(null);

  // for focus input
  useEffect(() => {
    const handleBlur = () => {
      inputRef.current.focus();
    };

    const inputElement = inputRef.current;
    inputElement.focus();
    inputElement.addEventListener("blur", handleBlur);

    return () => {
      inputElement.removeEventListener("blur", handleBlur);
    };
  }, []);

  return (
    <div className="bg-black w-full h-[100vh]">
      <div className="flex items-center w-full h-[25%] border-b">
        <input
          type="number"
          dir="rtl"
          ref={inputRef}
          className="w-full rounded-lg text-[125px] text-white outline-none caret-transparent bg-[#2A2A2A]"
        />
      </div>
      <div className="flex ">
        <div className="grid grid-cols-3 grid-rows-3 gap-5 w-[75%] h-[75vh] place-items-center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."].map((el) => (
            <div
              key={el}
              className={`w-40 h-40 text-3xl rounded-full bg-white cursor-pointer text-black flex justify-center items-center ${
                el === 0 ? "w-80 " : el === "." ? "col-span-2" : ""
              }`}
            >
              {el}
            </div>
          ))}
        </div>

        <div className="w-[25%] h-full flex flex-col gap-20 justify-center items-center">
          {["/", "*", "-", "+", "="].map((el) => (
            <div
              key={el}
              className="w-20 h-20 text-3xl rounded-full bg-white cursor-pointer text-black flex justify-center items-center"
            >
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
