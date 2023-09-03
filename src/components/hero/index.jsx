import AllImages from "../../allImages";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import Button from "../button";

const Hero = () => {
  return (
    <div className="pt-36 lg:pt-52 px-[9%] bg-[#fcfcfd]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="grid gap-4 xl:gap-0 text-start md:text-center lg:text-start lg:place-items-start">
          <img
            className="hidden md:block w-[140px] h-[140px] xl:-mb-3 mx-auto lg:mx-0"
            src={AllImages.logo}
            alt="logo"
          />
          <h2 className="text-5xl font-bold xl:-mb-5">
            Turn your words into artworks
          </h2>
          <p className="text-xl text-[#777E91]">
            DaVinci machines will help you to convert your imaginations by
            keywords and styles into reality art images in seconds.
          </p>
          <div className="flex justify-start sm:justify-center lg:justify-start space-x-6 pt-4 xl:pt-0">
            <Button
              icon={AiFillApple}
              download="Download on the"
              appSource="App Store"
            />
            <Button
              icon={FaGooglePlay}
              download="Get it on"
              appSource="Google play"
            />
          </div>
        </div>
        <div>
          <img
            className="lg:w-[470px] lg:h-[502px] lg:object-contain"
            src={AllImages.mobileMockups}
            alt="mobile mockup"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
