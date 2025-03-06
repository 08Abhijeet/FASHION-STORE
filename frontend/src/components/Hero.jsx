import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-red-950">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base font-poppins">OUR BESTSELLERS</p>
          </div>
          <h2 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed font-poppins italic">
  FRESH DROPS !!
</h2>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base font-poppins">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* right side */}
      <img className="w-full sm:w-1/2" src={assets.herosection} alt="" />
    </div>
  );
};

export default Hero;