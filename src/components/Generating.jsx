import { kekiLogoCorazones } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-[#642F30] rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img
        className="center flex w-10 h-10 mr-5"
        src={kekiLogoCorazones}
        alt="Loading"
      />
      Keki es Seguro
    </div>
  );
};

export default Generating;
