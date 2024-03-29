import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DashboardLayout } from "../layout/DashboardLayout";
import { CreateList } from "../components/CreateList";
import { useParams } from "react-router-dom";
import { Project as ProjectType } from "../core/types/project.type";
import { ModalLayout } from "../layout/ModalLayout";
import { IoIosAddCircleOutline } from "react-icons/io";
import { open } from "../store";
import { List as ListType } from "../core/types/list.type";
import { List } from "../components/List";
import { images } from "../assets";
import { RootState } from "../store/root-state.type";

export function Project() {
  const dispatch = useDispatch();
  const [lists, setLists] = useState<Array<ListType>>([]);
  const [currentProject, setCurrentProject] = useState<ProjectType>();
  const [image, setImage] = useState<number>(0);

  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const allLists = useSelector((state: RootState) => state.list.lists);
  const modalId = useSelector((state: RootState) => state.modal.id);
  const { projectId } = useParams();

  const projects: Array<ProjectType> = useSelector(
    (state: RootState) => state.project.projects
  );

  const getProject = () => {
    const project = projects.filter(
      (project: ProjectType) => project.id === projectId
    );

    setCurrentProject(project[0]);
  };

  const getLists = () => {
    const currentLists = allLists.filter(
      (list) => list.projectId === projectId
    );

    setLists(currentLists);
  };

  useEffect(() => {
    getProject();
    getLists();

    if (currentProject?.image) {
      setImage(currentProject.image);
    }
  }, []);

  useEffect(() => {
    getLists();
  }, [allLists]);

  return (
    <DashboardLayout>
      {isOpen && modalId === "create-list" && (
        <ModalLayout>
          <CreateList />
        </ModalLayout>
      )}
      <div className="w-full h-full flex mt-4">
        <div className="w-1/4 min-h-[300px] h-[80vh] flex flex-col items-center bg-gray-100 border-2 rounded-md mt-5 shadow-md">
          <img
            src={images[image]}
            alt="card-header"
            className="h-48 w-full px-2 py-3 rounded-md"
          />
          <div className="w-full h-1/2 bg-white px-3 py-2">
            <span className="bg-blue-800 rounded-full text-white font-semibold text-xs px-3">
              Title
            </span>
            <h1 className="text-2xl font-semibold mb-2 border-2 border-slate-500 rounded-md p-1 mt-1">
              {currentProject?.title}
            </h1>
            <span className="bg-blue-800 rounded-full text-white font-semibold text-xs px-3">
              Description
            </span>
            <p className="text-sm mt-1 font-light border-2 border-slate-500 p-1 rounded-md ">
              {currentProject?.description}
            </p>
          </div>
        </div>
        <div className="w-3/4 mt-2 flex flex-col items-center px-2 py-1">
          <div className="w-full flex items-center justify-between border-b-2 border-black py-2">
            <h1 className="text-3xl font-semibold ml-2">Lists</h1>
            <button
              className="w-1/6 bg-blue-600 flex items-center justify-between text-white font-semibold rounded-full px-2 py-1"
              onClick={() => dispatch(open({ id: "create-list" }))}
            >
              <IoIosAddCircleOutline size={28} />
              Add List
            </button>
          </div>
          <div className="w-full h-full flex items-start gap-3 px-3 mt-3">
            {lists.map((list) => {
              return <List key={list.id} list={list} />;
            })}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
