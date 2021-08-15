import { useState } from "react";

import { Upload } from "./upload";

interface LeftDrawerProps {
  onSubmit: (words: string) => void;
}

export const LeftDrawer = ({ onSubmit }: LeftDrawerProps) => {
  const [words, setWords] = useState("");

  return (
    <nav className="fixed w-3/10 h-full left-0 top-0 bg-yellow-900 ">
      <img src="/logo.png" />
      <div className="w-11/12 rounded-lg bg-yellow-100 mx-auto my-8 pb-1">
        <div className="font-bold text-gray-700 p-2">お面を検索</div>
        <div className="px-2">
          <input
            type="text"
            value={words}
            onChange={(e) => {
              setWords(e.target.value);
            }}
            className="w-full bg-gray-200 rounded-md px-1"
          />
          <div
            className="w-16 text-center text-white bg-yellow-800 hover:bg-yellow-900 cursor-pointer my-2"
            onClick={() => onSubmit(words)}
          >
            検索！
          </div>
        </div>
      </div>
      <div className="my-4">
        <Upload />
      </div>
    </nav>
  );
};

export default LeftDrawer;
