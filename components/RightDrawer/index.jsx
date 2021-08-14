import { useState } from "react";

export default ({mask}) => {

  const [radio, setRadio] = useState('man');
  return (
    <nav className="bg-blue-300" style={{ width: "30%" }}>
      <div>
        <input type="radio" id="man" value="man"
        onChange = {() => setRadio('man')}
        checked = {radio === 'man'}
        />
        <label htmlFor="man">男</label>
      </div>

      <div>
        <input type="radio" id="woman"  value="woman"
        onChange = {() => setRadio('woman')}
        checked = {radio === 'woman'}
        />
        <label htmlFor="woman">女</label>
      </div>

      <p>{radio}</p>
      {radio === 'man'?
      <img src = "https://1.bp.blogspot.com/-vTn-xUxYn3o/YEGQFi9UWHI/AAAAAAABdec/J_dKnbLbh3oGY7IF6YA3p8-sV2fBQni-gCNcBGAsYHQ/s726/nigaoe_ryuuzouji_takanobu.png"/>
      :
      <img src = "https://1.bp.blogspot.com/-ZOg0qAG4ewU/Xub_uw6q0DI/AAAAAAABZio/MshyuVBpHUgaOKJtL47LmVkCf5Vge6MQQCNcBGAsYHQ/s1600/pose_pien_uruuru_woman.png"/>}
      
    </nav>
  );
}