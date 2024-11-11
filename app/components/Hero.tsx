
import { faFemale } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const GirlsWearComponent = () => {
  return (
    <div className="w-full h-auto flex justify-center mt-8 px-4">
      <div className="bg-black w-full md:w-[80%] h-full flex flex-col md:flex-row justify-between p-4">
        {/* Right Side */}
        <div className="text-white flex flex-col justify-center md:w-[50%]">
          <div className="flex items-center justify-start">
            <span>
              💕 <FontAwesomeIcon icon={faFemale} className="w-[30px] text-pink-500 ml-2" />
            </span>
          </div>
          <div className="w-full md:w-[200px] mt-4">
            <h1 className="text-2xl md:text-3xl font-sans font-bold ml-2 md:ml-5">
              Upto 10% Off Voucher
            </h1>
            <button className="font-bold underline underline-offset-8 ml-2 md:ml-5 mt-4 md:mt-5">
              Shop Now
            </button>
          </div>
        </div>

        {/* Left Side - Image */}
        <div className="mt-4 md:mt-0 md:w-[50%] flex justify-center">
          <Image
            src="/images/web8.png"
            width={490}
            height={200}
            alt="Girls Wear Image"
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default GirlsWearComponent;
