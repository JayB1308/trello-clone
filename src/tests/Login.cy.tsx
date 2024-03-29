import { Login } from "../pages/Login";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../store";
import { mount } from "cypress/react18";
import "../index.css";

describe("<Login />", () => {
  it("renders", () => {
    mount(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
  });
});
