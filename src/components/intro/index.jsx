const Intro = (props) => {
  return (
    <div className="pt-28">
      <div className="bg-[#FDFDFE] pl-[9%] py-16 md:py-32">
        <h1 className="text-4xl md:text-[64px] font-bold leading-[50px] md:leading-[80px]">
          {props.heading1}
          <br />
          {props.heading2}
        </h1>
        <p className="text-xl text-black flex items-center space-x-2 pt-6">
          <span className="text-base md:text-xl">
            {props.information}
          </span>
          <props.icon className={props.iconColor} />
        </p>
      </div>
    </div>
  );
};

export default Intro;
