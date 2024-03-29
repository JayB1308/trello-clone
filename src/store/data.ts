import { RootState } from "./root-state.type";

export const data: RootState = {
  user: {
    users: [
      {
        id: "UpC5Qf2JM37UMkL2tmuz7",
        username: "JayB",
        email: "jbudhadev@gmail.com",
        password: "JayB12",
      },
    ],
    isLoggedIn: false,
    currentUser: null,
  },
  project: {
    projects: [
      {
        id: "oIMha2gOxZSj4MxJ0Q9fY",
        title: "A project",
        description: "This a project",
      },
      {
        id: "iqJHi-73jkl9IeyMMjg42",
        title: "Another Project",
        description: "This is another project",
      },
    ],
  },
  list: {
    lists: [
      {
        id: "ArfX0Sc4V1xC7RLmkk2m8",
        name: "A list",
        projectId: "2SzOEih9b2-fTb_E_0-Ok",
      },
      {
        id: "0krOThmFGB6BBSgEFURTy",
        name: "Another list",
        projectId: "2SzOEih9b2-fTb_E_0-Ok",
      },
      {
        id: "0hejQASpDL1lWbRnweHHB",
        name: "A list #1",
        projectId: "oIMha2gOxZSj4MxJ0Q9fY",
      },
      {
        id: "8Yo8WyOcptEJ1-O3aXDmH",
        name: "A List #2",
        projectId: "oIMha2gOxZSj4MxJ0Q9fY",
      },
      {
        id: "jCWsx-itbsfYqFqyyX_5g",
        name: "A List #3",
        projectId: "oIMha2gOxZSj4MxJ0Q9fY",
      },
    ],
  },
  task: {
    tasks: [
      {
        id: "NIrkM742cYu1XxEICVG4_",
        title: "akjsndkajsn",
        description: "aksjdnkajsdn",
        assignedUser: "",

        listId: "ArfX0Sc4V1xC7RLmkk2m8",
      },
      {
        id: "y5SHiuqxClXvS5kePAtcM",
        title: "This is a task",
        description: "aksjdnakjsd ",
        assignedUser: "kajsnkdj",

        listId: "0krOThmFGB6BBSgEFURTy",
      },
      {
        id: "kPiFlpKVHYs_bJmFIYeT5",
        title: "A task",
        description: "kajsndkja",
        assignedUser: "kjadsn",

        listId: "0hejQASpDL1lWbRnweHHB",
      },
      {
        id: "XcITMW1CiRIDzR_T3VPpw",
        title: "Another Task",
        description: "kajsndkj",
        assignedUser: "",

        listId: "0hejQASpDL1lWbRnweHHB",
      },
      {
        id: "vusp8lcIU-6TcqoeMvRWF",
        title: "Task #1",
        description: "kajsndkj",
        assignedUser: "",

        listId: "0hejQASpDL1lWbRnweHHB",
      },
      {
        id: "y5ZbzKg3PqmYypvLLuhNR",
        title: "laknsdk",
        description: "aslkdasdnajs",
        assignedUser: "",

        listId: "0hejQASpDL1lWbRnweHHB",
      },
    ],
  },
  modal: {
    id: null,
    isOpen: false,
  },
};
