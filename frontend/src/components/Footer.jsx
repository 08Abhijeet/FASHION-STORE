import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="text-red-950">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div>
          <img className="mb-5 w-32 " src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-red-950">
            Welcome to Vesteria, your online destination for curated fashion that empowers you to express your unique style. We believe that fashion is a powerful tool for self-expression, and we're here to help you discover the pieces that make you feel confident and beautiful.  Our collection features a blend of established designers and emerging brands, offering a diverse range of styles to suit every taste and occasion.  At Vesteria, we're committed to providing a seamless shopping experience with exceptional customer service and a focus on quality and sustainability.  Step into the world of Vesteria and let your personal style bloom.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-red-950">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-red-950">
            <li>+1-212-456-7890</li>
            <li>contact@vesteria.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ vesteria.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
