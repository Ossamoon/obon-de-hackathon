import { useState } from "react";

export const RightDrawer = ({ omen }) => {
  const [manUrl, womanUrl] = [
    "https://1.bp.blogspot.com/-jlZlCg-8FAM/Xub_u8HTD1I/AAAAAAABZis/ZhUI05AZBEQpVinedZ6Xy-eIucmNuY2SQCNcBGAsYHQ/s1600/pose_pien_uruuru_man.png",
    "https://1.bp.blogspot.com/-ZOg0qAG4ewU/Xub_uw6q0DI/AAAAAAABZio/MshyuVBpHUgaOKJtL47LmVkCf5Vge6MQQCNcBGAsYHQ/s1600/pose_pien_uruuru_woman.png",
  ];

  const [radio, setRadio] = useState('man');

  return (
    <nav className="fixed w-3/10 h-full right-0 top-0 bg-blue-300">
            <div className="flex flex-row justify-center mt-8 text-xl">
        <div className="mr-6">
          <label htmlFor="man">男</label>
          <input type="radio" id="man" value="man"
            onChange={() => setRadio('man')}
            checked={radio === 'man'}
          />
        </div>


        <div>
          <label htmlFor="woman">女</label>
          <input type="radio" id="woman" value="woman"
            onChange={() => setRadio('woman')}
            checked={radio === 'woman'}
          />
        </div>
      </div>


      <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        {radio === 'man' ? (
          <image href={manUrl} height="100%" width="100%" />
        ) : (
          <image href={womanUrl} height="100%" width="100%" />
        )}

        {omen && (
          <image href={omen.src} height="200" width="100%" />
        )}
      </svg>
    </nav>
  );
}

export default RightDrawer