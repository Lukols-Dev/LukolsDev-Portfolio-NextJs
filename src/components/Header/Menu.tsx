import { MENU } from "@/lib/constans";
import { MenuItem } from "@/types/layout";
import Link from "next/link";
import Magnetic from "../common/Magnetic";

const Menu = () => {
  return (
    <nav className="flex items-center">
      <ul className="text-sm flex items-center">
        {MENU.map((item: MenuItem) => (
          <Magnetic>
            <li
              key={item.title}
              className="group flex flex-col relative p-4  bg-red-400"
            >
              <Link href={item.path}>{item.title}</Link>
              <span className="w-2 h-2 absolute top-11 left-1/2 transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-custom bg-white rounded-full group-hover:scale-100" />
            </li>
          </Magnetic>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
