import { Project } from "../pages/Project";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../store";
import { mount } from "cypress/react18";
import "../index.css";

describe("<Projects />", () => {
  beforeEach(() => {
    mount(
      <Provider store={store}>
        <BrowserRouter>
          <Project />
        </BrowserRouter>
      </Provider>
    );
  });

  it("should render component", () => {});
});
