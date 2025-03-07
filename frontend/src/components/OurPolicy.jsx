import { assets } from "../assets/frontend_assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-slate-50">
      <div>
        <img
          src={assets.exchange_icon}
          className="w-12 m-auto mb-5 bg-white rounded-full"
          alt=""
        />
        <p className="font-semibold text-red-950">Easy Exchange Policy</p>
        <p className="text-red-950">We offer hassle free exchange policy</p>
      </div>
      <div>
        <img
          src={assets.quality_icon}
          className="w-12 m-auto mb-5 bg-white rounded-full "
          alt=""
        />
        <p className="font-semibold text-red-950">7 Days Return Policy</p>
        <p className="text-red-950">We provide 7 days free return policy</p>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="50px"
          viewBox="0 -960 960 960"
          width="50px"
          fill="#000000"
          className="w-12 m-auto mb-5"
        >
          <path d="M440-120v-80h320v-284q0-117-81.5-198.5T480-764q-117 0-198.5 81.5T200-484v244h-40q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v49q0 33-23.5 56.5T760-120H440Zm-80-280q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm240 0q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400Zm-359-62q-7-106 64-182t177-76q89 0 156.5 56.5T720-519q-91-1-167.5-49T435-698q-16 80-67.5 142.5T241-462Z" />
        </svg>
        <p className="font-semibold text-red-950">Best customer support</p>
        <p className="text-red-950">We provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
