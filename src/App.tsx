import { Router } from "./router";
import { Navbar } from "./components/Navbar";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <>
      {isLoggedIn && <Navbar />}
      <Router />
    </>
  );
}

export default App;
