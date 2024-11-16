import { useState, useRef } from "react";

export default function App() {
  const [nums, setNums] = useState("");
  const inputRef = useRef(null);

  setTimeout(() => {
    if (inputRef.current) {
      inputRef.current.scrollLeft = inputRef.current.scrollWidth;
    }
  }, 0);

  const handleButtonClick = (value) => {
    if (value === "%") {
      setNums((prev) => {
        const match = prev.match(/(\d+\.?\d*)([+\-*/])(\d+\.?\d*)$/); // Match base, operator, and percentage
        if (!match) return prev;

        const [, base, operator, percentage] = match;
        const baseValue = parseFloat(base);
        const percentValue = parseFloat(percentage);

        const result =
          operator === "*" || operator === "/"
            ? percentValue / 100
            : (baseValue * percentValue) / 100;

        return prev.replace(
          /(\d+\.?\d*)([+\-*/])(\d+\.?\d*)$/,
          `${base}${operator}${result}`
        );
      });
    } else {
      setNums((prev) =>
        value === "="
          ? String(eval(nums))
          : value === "C"
          ? ""
          : value === "Del"
          ? prev.split("").slice(0, -1).join("")
          : !["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(
              nums[nums.length - 1]
            ) && value == nums[nums.length - 1]
          ? null
          : prev + value
      );
    }
  };

  console.log(nums);

  return (
    <div className="w-full h-screen lg:w-1/3 lg:h-auto mx-auto border bg-[#A9A9A9]">
      <div className="h-1/5">
        <input
          ref={inputRef}
          value={nums}
          readOnly
          onChange={(e) => setNums(e.target.value)}
          className="p-1 w-full h-full border-b border-slate-700 text-6xl sm:text-8xl lg:text-7xl font-bold outline-none caret-slate-400 bg-[#A9A9A9]"
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
              className={`bg-gray-500 hover:bg-gray-600 transition rounded-full text-white text-3xl h-20 w-20 sm:h-24 sm:w-24 lg:h-16 lg:w-16 xl:h-20 xl:w-20 mx-auto ${
                num === 0
                  ? "col-span-2 w-44 sm:w-60 lg:w-36 xl:w-40"
                  : ["*", "/", "+", "-", "=", "C", "%", "Del"].includes(num)
                  ? "bg-[#3B3B3B]"
                  : ""
              }`}
              onClick={() => handleButtonClick(num)}
            >
              {num}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
