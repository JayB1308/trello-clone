import { Dashboard } from "../pages/Dashboard";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../store";
import { mount } from "cypress/react18";
import "../index.css";

describe("<Dashboard />", () => {
  beforeEach(() => {
    mount(
      <Provider store={store}>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </Provider>
    );
  });

  it("should render component", () => {
    cy.get("h1").should("exist").should("contain.text", "Projects");

    cy.get("button").should("exist").should("contain.text", "Create Project");
  });

  it("should open modal on clicking create project", () => {
    cy.get("button")
      .should("exist")
      .should("contain.text", "Create Project")
      .click();
  });
});
