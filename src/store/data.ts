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
        title: "alskdkajsdn",
        description: "kajsdnkajsdn",
      },
      {
        id: "iqJHi-73jkl9IeyMMjg42",
        title: "alskmdkajsn",
        description: "kajsndkajsd",
      },
    ],
  },
  list: {
    lists: [
      {
        id: "ArfX0Sc4V1xC7RLmkk2m8",
        name: "kjadnkaj",
        projectId: "2SzOEih9b2-fTb_E_0-Ok",
      },
      {
        id: "0krOThmFGB6BBSgEFURTy",
        name: "akjsndkajd",
        projectId: "2SzOEih9b2-fTb_E_0-Ok",
      },
      {
        id: "0hejQASpDL1lWbRnweHHB",
        name: "alskdmalskd",
        projectId: "oIMha2gOxZSj4MxJ0Q9fY",
      },
      {
        id: "8Yo8WyOcptEJ1-O3aXDmH",
        name: "alskdm",
        projectId: "oIMha2gOxZSj4MxJ0Q9fY",
      },
      {
        id: "jCWsx-itbsfYqFqyyX_5g",
        name: "alksmd",
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
        title: "akjsdnkajsdn",
        description: "aksjdnakjsd ",
        assignedUser: "kajsnkdj",

        listId: "0krOThmFGB6BBSgEFURTy",
      },
      {
        id: "kPiFlpKVHYs_bJmFIYeT5",
        title: "aksjdnkajsd",
        description: "kajsndkja",
        assignedUser: "kjadsn",

        listId: "0hejQASpDL1lWbRnweHHB",
      },
      {
        id: "XcITMW1CiRIDzR_T3VPpw",
        title: "alksdmk",
        description: "kajsndkj",
        assignedUser: "",

        listId: "0hejQASpDL1lWbRnweHHB",
      },
      {
        id: "vusp8lcIU-6TcqoeMvRWF",
        title: "kajsndkajs",
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
