import { Router } from "./router";
import { Navbar } from "./components/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "./store/root-state.type";

function App() {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  return (
    <>
      {isLoggedIn && <Navbar />}
      <Router />
    </>
  );
}

export default App;
