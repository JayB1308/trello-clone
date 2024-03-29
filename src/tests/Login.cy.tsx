import { Login } from "../pages/Login";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../store";
import { mount } from "cypress/react18";
import "../index.css";

describe("<Login />", () => {
  beforeEach(() => {
    mount(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
  });

  it("renders: check if the component is rendering correctly", () => {
    cy.get("h1").should("contain.text", "Login");
    cy.get("form").should("exist");
    cy.get('input[name="username"]').should("exist");
    cy.get('input[name="password"]').should("exist");
    cy.get('button[type="submit"]')
      .should("exist")
      .should("contain.text", "Submit");
    cy.get("p").should("contain.text", "Don't Have An Account?");
  });

  it("should input username correctly", () => {
    cy.get('input[name="username"]')
      .should("exist")
      .type("JayB")
      .should("have.value", "JayB");
  });

  it("should input password correctly", () => {
    cy.get('input[name="password"]')
      .should("exist")
      .type("JayB12")
      .should("contain.value", "JayB12");
  });

  it("should display error messages for empty username and password fields", () => {
    cy.get('button[type="submit"]').click();

    cy.get("p").should("contain.text", "Username is required");
    cy.get("p").should("contain.text", "Password is required");
  });

  it("should toggle hide and show password", () => {
    cy.get('input[name="password"]').should("have.attr", "type", "password");

    cy.get('[data-testid="show"]').click();
    cy.get('input[name="password"]').should("have.attr", "type", "text");

    cy.get('[data-testid="hide"]').click();
    cy.get('input[name="password"]').should("have.attr", "type", "password");
  });

  it("should navigate to register page", () => {
    cy.contains("Create One").click();
    cy.url().should("include", "/register");
  });
});
