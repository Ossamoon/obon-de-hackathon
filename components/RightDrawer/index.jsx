import { useState } from "react";

export default ({mask}) => {
  const [manUrl, womanUrl, omeUrl] = [
    "https://1.bp.blogspot.com/-jlZlCg-8FAM/Xub_u8HTD1I/AAAAAAABZis/ZhUI05AZBEQpVinedZ6Xy-eIucmNuY2SQCNcBGAsYHQ/s1600/pose_pien_uruuru_man.png",
    "https://1.bp.blogspot.com/-ZOg0qAG4ewU/Xub_uw6q0DI/AAAAAAABZio/MshyuVBpHUgaOKJtL47LmVkCf5Vge6MQQCNcBGAsYHQ/s1600/pose_pien_uruuru_woman.png",
    "https://1.bp.blogspot.com/-Iavt8UbdbHQ/XhwqDLUxgnI/AAAAAAABW68/VeHORd8e7O4PreNArAUE7URQOwOyHEk5wCNcBGAsYHQ/s1600/omen_tengu.png"
  ];

  const [radio, setRadio] = useState('man');
  return (
    <nav className="bg-blue-300" style={{ width: "30%" }}>
      <div>
      <label htmlFor="man">男:</label>
        <input type="radio" id="man" value="man"
        onChange = {() => setRadio('man')}
        checked = {radio === 'man'}
        />
        
      </div>

      <div>
      <label htmlFor="woman">女:</label>
        <input type="radio" id="woman"  value="woman"
        onChange = {() => setRadio('woman')}
        checked = {radio === 'woman'}
        />
        
      </div>

      <p>{radio}</p>
      
      {radio === 'man'?
      <img src = {manUrl} class = "relative top-11 right-2.5" />
      :
      <img src = {womanUrl} class = "relative top-11 right-2.5"/>}
      <img src = {omeUrl} class = "w-8/12 relative bottom-12 left-5" />
    </nav>
  );
}