import { useState } from "react";

export const RightDrawer = ({ omens }) => {
  const [manUrl, womanUrl, omeUrl] = [
    "https://1.bp.blogspot.com/-jlZlCg-8FAM/Xub_u8HTD1I/AAAAAAABZis/ZhUI05AZBEQpVinedZ6Xy-eIucmNuY2SQCNcBGAsYHQ/s1600/pose_pien_uruuru_man.png",
    "https://1.bp.blogspot.com/-ZOg0qAG4ewU/Xub_uw6q0DI/AAAAAAABZio/MshyuVBpHUgaOKJtL47LmVkCf5Vge6MQQCNcBGAsYHQ/s1600/pose_pien_uruuru_woman.png",
    "https://1.bp.blogspot.com/-Iavt8UbdbHQ/XhwqDLUxgnI/AAAAAAABW68/VeHORd8e7O4PreNArAUE7URQOwOyHEk5wCNcBGAsYHQ/s1600/omen_tengu.png"
  ];

  const [radio, setRadio] = useState('man');
  return (
    <nav className="bg-blue-300" style={{ width: "30%" }}>

      <select name="gender" onChange={(e) => setRadio(e.target.value)} className = "relative left-2 top-2 block mt-1 rounded border-gray-300 shadow focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
      <option hidden>性別を選択してください</option>
        <option value = "man">男性</option>
        <option value = "woman">女性</option>
        <option value = "nogender">規定しない</option>
      </select>

 

      {radio === 'man' ? (
                <svg width="300" height="400"
                xmlns="http://www.w3.org/2000/svg">
                  <image href={manUrl} x = "0" y = "20" height="100%" width="100%"/>
                  <image href={omeUrl} x = "0" y = "30" height="240" width="100%"/>
                </svg>
      ) : (
        <svg width="300" height="400"
        xmlns="http://www.w3.org/2000/svg">
          <image href={womanUrl} x = "0" y = "20" height="100%" width="100%"/>
          <image href={omeUrl} x = "0" y = "30" height="240" width="100%"/>
        </svg>
      )}

     
    </nav>
  );
}

export default RightDrawer