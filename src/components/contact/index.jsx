import { useState } from "react";
import Map from "../map";

const Contact = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const inputValues = Object.entries(inputs)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    alert(inputValues);
    setInputs({});
  };

  const location = {
    lat: 33.524072665970884,
    lng: 73.09371647918482,
  }
  return (
    <div className="px-[9%] z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-[32px] font-bold pb-6">Contact Us</h2>
          <p className="text-[#667085] text-xl pb-5">
            Avg. response time: 72 hours or less
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                name="name"
                className="block rounded-2xl px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border border-1 border-[#d7dae0] focus:outline-none focus:ring-0 focus:border-blue-600 focus:border-4 peer"
                placeholder=" "
                value={inputs.name || ""}
                onChange={handleChange}
              />
              <label
                htmlFor="name"
                className="absolute text-base text-[#667085] duration-300 transform -translate-y-4 scale-75 top-4 peer-focus:top-6 z-10 origin-[0] left-2.5 peer-focus:text-[#667085] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Your Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                className="block rounded-2xl px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border border-1 border-[#d7dae0] focus:outline-none focus:ring-0 focus:border-blue-600 focus:border-4 peer"
                placeholder=" "
                value={inputs.email || ""}
                onChange={handleChange}
              />
              <label
                htmlFor="email"
                className="absolute text-base text-[#667085] duration-300 transform -translate-y-4 scale-75 top-4 peer-focus:top-6 z-10 origin-[0] left-2.5 peer-focus:text-[#667085] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                E-mail
              </label>
            </div>
            <div className="relative pb-5">
              <textarea
                type="text"
                rows={4}
                name="message"
                className="block rounded-2xl px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border border-1 border-[#d7dae0] focus:outline-none focus:ring-0 focus:border-blue-600 focus:border-4 peer"
                placeholder=" "
                value={inputs.message || ""}
                onChange={handleChange}
              />
              <label
                htmlFor="message"
                className="absolute text-base text-[#667085] duration-300 transform -translate-y-4 scale-75 top-4 peer-focus:top-6 z-10 origin-[0] left-2.5 peer-focus:text-[#667085] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Message
              </label>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-4 text-base font-medium text-center text-white bg-black rounded-full focus:ring-4 focus:ring-blue-20 border-4 border-white hover:border-blue-800 transform transition duration-500"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="space-y-6">
          <h2 className="text-[32px] font-bold">Address</h2>
          <Map location={location} zoomLevel={17} />
          <p className="text-xl text-[#4e5565]">
            Çınarlı Mah., Ankara Asfaltı Cad., No:15 Kat:41 D:411
          </p>
          <p className="text-xl text-[#4e5565]">09:00 AM - 06:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
