import { useState, useRef, useEffect } from "react";

export default function App() {
  const [nums, setNums] = useState("");
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

  console.log(nums);

  return (
    <div className="w-full h-screen lg:w-1/3 lg:h-auto mx-auto border bg-[#A9A9A9]">
      <div className="h-1/5">
        <input
          ref={inputRef}
          value={nums}
          onChange={(e) => setNums(e.target.value)}
          className="px-1 w-full h-full border-b border-slate-700 text-[100px] font-bold outline-none caret-slate-400 bg-[#A9A9A9]"
        />
      </div>
      <div className="flex h-4/5 py-2">
        <div className="w-full grid grid-cols-4 items-center gap-3">
          {[
            "C",
            "%",
            "Del",
            "/",
            7,
            8,
            9,
            "*",
            4,
            5,
            6,
            "+",
            1,
            2,
            3,
            "-",
            0,
            ".",
            "=",
          ].map((num) => (
            <button
              key={num}
              className={`bg-[#6E6E6E] rounded-full text-white text-3xl h-20 w-20 sm:h-24 sm:w-24 lg:h-16 lg:w-16 xl:h-20 xl:w-20 mx-auto ${
                num === 0
                  ? "col-span-2 w-44 sm:w-60 lg:w-36 xl:w-40"
                  : ["*", "/", "+", "-", "=", "C", "%", "Del"].includes(num)
                  ? "bg-[#3B3B3B]"
                  : ""
              }`}
              onClick={() =>
                num === "="
                  ? setNums(String(eval(nums)))
                  : num === "C"
                  ? setNums("")
                  : num === "Del"
                  ? setNums((n) => n.split("").slice(0, -1).join(""))
                  : setNums((n) => n + num)
              }
            >
              {num}
            </button>
          ))}
        </div>
        {/* <div className="w-1/3 lg:w-1/5 flex flex-col justify-center gap-4 py-5">
          {["/", "*", "+", "-", "="].map((el) => (
            <button
              key={el}
              className="h-24 w-24 bg-black rounded-full text-white mx-auto"
            >
              {el}
            </button>
          ))}
        </div> */}
      </div>
    </div>
  );
}
