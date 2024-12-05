import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { RxArrowTopRight } from "react-icons/rx";
import PropTypes from 'prop-types';
export const DashboardComp = ({
  title,
  chart,
  value,
  status,
  text,
  icon,
  color,
}) => {
  return (
    <div
      className={` w-full md:w-[30%] p-6 md:p-4 rounded-md h-[48%] ${
        color === "dark" ? "bg-[#0a0a0a]" : "glassM"
      }`}
    >
      <div className="text-sm w-full justify-between text-black flex font-bold  gap-1 items-center">
        <div className="flex gap-2 items-center">
          <span
            className={`${
              color === "dark"
                ? "bg-[#901ee4] text-white"
                : "bg-[#901ee4] text-white"
            } rounded-full text-[24px] p-2 flex justify-center items-center `}
          >
            {icon}
          </span>

          <span
            className={`${
              color === "dark" ? "text-white" : "text-black"
            } text-[20px]`}
          >
            {title}
          </span>
        </div>

        <div className="flex  gap-2">
          <IoEllipsisHorizontalSharp
            className={`${
              color === "dark"
                ? "bg-[#4b4b4b] text-white"
                : "bg-white text-black"
            } w-8 p-2 h-8 rounded-full flex justify-center items-center`}
          />

          <RxArrowTopRight
            className={`${
              color === "dark"
                ? "bg-[#4b4b4b] text-white"
                : "bg-white text-black"
            } w-8 h-8 p-2 rounded-full flex justify-center items-center`}
          />
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex flex-col gap-1 text-white">
          <span className="text-[20px] font-bold ">Current: {value}</span>
          <div className="w-[100%]h-[100px]">
            {chart}
          </div>
          <span
            className={`text-[12px] pr-2 flex w-full ${
              color === "dark" ? "text-[#ffffff91]" : "text-[#0000006e]"
            }`}
          >
            {text}
            <span
          className={`px-3 py-[3px] rounded-full h-max text-sm ${
            status === "Normal"
              ? "bg-green-100 text-green-600"
              : status === "Soft"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {status}
        </span>
          </span>
        </div>
        
      </div>
    </div>
  );
};

DashboardComp.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
  title: PropTypes.string,
  color: PropTypes.string,
  status: PropTypes.string,
  value: PropTypes.string,
  chart: PropTypes.element,
};