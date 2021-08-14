import { useState } from "react";

export default () => {
  const [words, setWords] = useState("");

  const onSubmit = () => {
    console.log(words);
  };

  return (
    <nav className="bg-blue-300" style={{ width: "20%" }}>
      <div className="w-11/12 h-96 rounded-lg bg-gray-200 mx-auto my-8">
        <div className="font-bold text-gray-700 p-2">お面を検索</div>
        <div className="px-2">
          <input
            type="text"
            value={words}
            onChange={(e) => {
              setWords(e.target.value);
            }}
            className="w-full bg-gray-50 rounded-md px-1"
          />
          <div
            className="w-16 text-center bg-blue-400 cursor-pointer my-2"
            onClick={onSubmit}
          >
            検索！
          </div>
        </div>
      </div>
    </nav>
  );
};
