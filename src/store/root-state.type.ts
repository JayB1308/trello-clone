import { List } from "../core/types/list.type";
import { Project } from "../core/types/project.type";
import { Task } from "../core/types/task.type";
import { User } from "../core/types/user.type";

export type RootState = {
  user: {
    users: Array<User>;
    isLoggedIn: boolean;
    currentUser: User | null;
  };
  project: {
    projects: Array<Project>;
  };
  task: {
    tasks: Array<Task>;
  };
  list: {
    lists: Array<List>;
  };
  modal: {
    id: string | null;
    isOpen: boolean;
  };
};
