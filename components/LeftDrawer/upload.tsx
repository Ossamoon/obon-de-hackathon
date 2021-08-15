import { useRouter } from "next/router";
import { useState, useRef } from "react";

import { uploadOmen } from "../../lib/uploadOmen";

export const Upload = () => {
  const file = useRef<File | null>(null);
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [tag1, setTag1] = useState("");
  const [tag2, setTag2] = useState("");
  const [tag3, setTag3] = useState("");
  const [tag4, setTag4] = useState("");
  const [tag5, setTag5] = useState("");
  const router = useRouter();

  return (
    <div className="w-11/12 h-96 rounded-lg bg-gray-300 mx-auto my-8">
      <div className="font-bold text-gray-700 p-2">お面をアップロード</div>
      <div className="px-2">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files) file.current = e.target.files[0];
          }}
          className="mb-1"
        />
        <div>お面の名前</div>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="w-full bg-gray-50 rounded-md px-1 mb-1"
        />
        <div>投稿者名</div>
        <input
          type="text"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
          className="w-full bg-gray-50 rounded-md px-1 mb-1"
        />
        <div>タグ</div>
        <input
          type="text"
          value={tag1}
          onChange={(e) => {
            setTag1(e.target.value);
          }}
          className="w-full bg-gray-50 rounded-md px-1 mb-1"
        />
        <input
          type="text"
          value={tag2}
          onChange={(e) => {
            setTag2(e.target.value);
          }}
          className="w-full bg-gray-50 rounded-md px-1 mb-1"
        />
        <input
          type="text"
          value={tag3}
          onChange={(e) => {
            setTag3(e.target.value);
          }}
          className="w-full bg-gray-50 rounded-md px-1 mb-1"
        />
        <input
          type="text"
          value={tag4}
          onChange={(e) => {
            setTag4(e.target.value);
          }}
          className="w-full bg-gray-50 rounded-md px-1 mb-1"
        />
        <input
          type="text"
          value={tag5}
          onChange={(e) => {
            setTag5(e.target.value);
          }}
          className="w-full bg-gray-50 rounded-md px-1 mb-1"
        />

        <div
          className="w-16 text-center bg-blue-400 cursor-pointer my-2"
          onClick={() => {
            if (file.current && name && author) {
              uploadOmen(file.current, name, author, [
                tag1,
                tag2,
                tag3,
                tag4,
                tag5,
              ]).then((status) => {
                console.log(status);
                if (status == "complete") location.reload();
              });
            }
          }}
        >
          提出！
        </div>
      </div>
    </div>
  );
};
