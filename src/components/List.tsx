import { List as ListType } from "../types/List.type";
import { IoIosAddCircleOutline } from "react-icons/io";

interface ListProps {
  list: ListType;
}

export function List({ list }: ListProps) {
  return (
    <div className="w-1/5 min-h-[250px] border-2 border-blue-600 flex flex-col items-center rounded-md">
      <div className="w-full flex items-center justify-between px-2 rounded-t-md  border-b-2 border-blue-600 bg-blue-100">
        <h1 className="font-bold text-md">{list.name}</h1>
        <button>
          <IoIosAddCircleOutline size={24} className="text-blue-500" />
        </button>
      </div>
    </div>
  );
}
