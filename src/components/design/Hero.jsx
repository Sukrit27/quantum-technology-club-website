import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";

import PlusSvg from "../../assests/svg/PlusSvg";

export const Gradient = () => {
  return (
    <>
      <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
      <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
    </>
  );
};

export const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </>
  );
};

// const Rings = () => {
//   return (
//     <>
//       <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2 filter blur-[1px] -z-10" />
//       <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-white/25 rounded-full -translate-x-1/2 -translate-y-1/2 filter blur-[1px] -z-10" />
//       <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-white/30 rounded-full -translate-x-1/2 -translate-y-1/2 filter blur-[0.5px] -z-10" />
//       <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-white/40 rounded-full -translate-x-1/2 -translate-y-1/2 filter blur-none -z-10" />
//     </>
//   );
// };



export const BackgroundCircles = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border-transparent rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]"
    >
      {/* Moving background colored circle balls */}
      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
  <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
    <div
      className={`w-3 h-3 -ml-1 -mt-36 bg-gradient-to-b from-[#6B1FCC] to-[#302E53] rounded-full 
      shadow-[0_0_12px_4px_rgba(107,31,204,0.5)] transition-transform duration-500 ease-out ${
        mounted ? "translate-y-0 opacity-90" : "translate-y-10 opacity-0"
      }`}
    />
  </div>

  <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
    <div
      className={`w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#5145DD] to-[#1D1B3A] rounded-full 
      shadow-[0_0_16px_8px_rgba(81,69,221,0.4)] transition-transform duration-500 ease-out ${
        mounted ? "translate-y-0 opacity-80" : "translate-y-10 opacity-0"
      }`}
    />
  </div>

  <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
    <div
      className={`hidden w-5 h-5 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#9B6CF3] to-[#352C66] rounded-full xl:block 
      shadow-[0_0_10px_6px_rgba(155,108,243,0.5)] transition-transform duration-500 ease-out ${
        mounted ? "translate-y-0 opacity-85" : "translate-y-10 opacity-0"
      }`}
    />
  </div>

  <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
    <div
      className={`w-3.5 h-3.5 -ml-1.5 mt-52 bg-gradient-to-b from-[#5F77DD] to-[#191736] rounded-full 
      shadow-[0_0_14px_6px_rgba(95,119,221,0.6)] transition-transform duration-500 ease-out ${
        mounted ? "translate-y-0 opacity-70" : "translate-y-10 opacity-0"
      }`}
    />
  </div>

  <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
    <div
      className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#8D7EEB] to-[#261A4D] rounded-full 
      shadow-[0_0_20px_8px_rgba(141,126,235,0.6)] transition-transform duration-500 ease-out ${
        mounted ? "translate-y-0 opacity-90" : "translate-y-10 opacity-0"
      }`}
    />
  </div>

  <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
    <div
      className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#73A4EE] to-[#1E1C43] rounded-full 
      shadow-[0_0_22px_10px_rgba(115,164,238,0.5)] transition-transform duration-500 ease-out ${
        mounted ? "translate-y-0 opacity-95" : "translate-y-10 opacity-0"
      }`}
    />
  </div>
</MouseParallax>

    </div>
  );
};  
