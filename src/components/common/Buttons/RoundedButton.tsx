import { Bars3Icon } from "@heroicons/react/24/solid";
import Magnetic from "../Magnetic";

const RoundedButton = () => {
  return (
    <Magnetic>
      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-black cursor-pointer text-white px-15 py-3">
        <Bars3Icon className="w-6 h-6" />
      </div>
    </Magnetic>
  );
};

export default RoundedButton;
