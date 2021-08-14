import { useState } from "react";

export default ({mask}) => {
  const [manUrl, womanUrl, omeUrl] = [
    "https://1.bp.blogspot.com/-vTn-xUxYn3o/YEGQFi9UWHI/AAAAAAABdec/J_dKnbLbh3oGY7IF6YA3p8-sV2fBQni-gCNcBGAsYHQ/s726/nigaoe_ryuuzouji_takanobu.png",
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
      <img src = {omeUrl}/>

      {radio === 'man'?
      <img src = {manUrl}/>
      :
      <img src = {womanUrl}/>}
      
    </nav>
  );
}