const Button = (props) => {
  return (
    <button
      type="button"
      className="flex items-center text-white bg-black hover:scale-110 transform transition duration-500 rounded-xl px-2 md:px-5 py-4"
    >
      <props.icon className="w-[26px] h-[26px] md:w-[33px] md:h-[33px]" />
      <div className="grid gap-0 ml-2 text-start">
        <span className="text-[10px] md:text-xs text-[#eee] -mb-1">{props.download}</span>
        <span className="text-md md:text-2xl font-medium">{props.appSource}</span>
      </div>
    </button>
  );
};

export default Button;
