import { Link } from "react-router-dom";
import { pathConstants } from "../router/pathConstants";
import { IoMdHome } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";

export function Navbar() {
  return (
    <div className="fixed w-full top-0 flex h-16 items-center justify-between px-4 py-1 bg-cyan-500">
      <Link
        to={pathConstants.HOME}
        className="flex w-1/12 items-center justify-between border-2 px-2 py-1 text-white font-semibold rounded-md"
      >
        <IoMdHome size={22} />
        <span className="text-xl">Home</span>
      </Link>

      <button className="border-2 border-white w-1/12 flex justify-between items-center px-2 py-1 text-white font-bold rounded-full">
        <IoIosLogOut size={22} className="stroke-2" />
        Logout
      </button>
    </div>
  );
}
