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
    <div className="w-full h-screen lg:w-1/3 lg:h-auto mx-auto border">
      <div className="h-1/5">
        <input
          ref={inputRef}
          value={nums}
          onChange={(e) => setNums(e.target.value)}
          className="w-full h-full border text-[100px] font-bold outline-none caret-slate-400"
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
              className={`bg-black rounded-full text-white text-3xl h-24 w-24 mx-auto ${
                num === 0
                  ? "col-span-2 w-52"
                  : ["*", "/", "+", "-", "=", "C", "%", "Del"].includes(num)
                  ? "bg-gray-900"
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
