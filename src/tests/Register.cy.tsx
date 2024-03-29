import { Register } from "../pages/Register";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../store";
import { mount } from "cypress/react18";
import "../index.css";

describe("<Register />", () => {
  beforeEach(() => {
    mount(
      <Provider store={store}>
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      </Provider>
    );
  });

  it("renders: check if elements renders correctly", () => {
    cy.get("h1").should("contain.text", "Register");
    cy.get("form").should("exist");
    cy.get('input[name="username"]').should("exist");
    cy.get('input[name="password"]').should("exist");
    cy.get('input[name="email"]').should("exist");
    cy.get('input[name="confirmPassword"]').should("exist");
    cy.get('button[type="submit"]')
      .should("exist")
      .should("contain.text", "Submit");
    cy.get("p").should("contain.text", "Already Have An Account? Login In.");
  });

  it("should input username correctly", () => {
    cy.get('input[name="username"]')
      .should("exist")
      .type("JayB")
      .should("have.value", "JayB");
  });

  it("should input email correctly", () => {
    cy.get('input[name="email"]')
      .should("exist")
      .type("jay@gmail.com")
      .should("have.value", "jay@gmail.com");
  });

  it("should input password correctly", () => {
    cy.get('input[name="password"]')
      .should("exist")
      .type("JayB")
      .should("have.value", "JayB");
  });

  it("should input confirm password correctly", () => {
    cy.get('input[name="confirmPassword"]')
      .should("exist")
      .type("JayB")
      .should("have.value", "JayB");
  });

  it("should display validations for email", () => {
    cy.get('input[name="email"]')
      .should("exist")
      .type("jay@asjdnk")
      .should("have.value", "jay@asjdnk");

    cy.get('button[type="submit"]').click();

    cy.get("p").should("contain.text", "Please enter a valid email");
  });

  it("should display validation for confirm password", () => {
    cy.get('input[name="password"]').type("JayB");
    cy.get('input[name="confirmPassword"]').type("Jay2");

    cy.get('button[type="submit"]').click();

    cy.get("p").should("contain.text", "Passwords do not match");
  });

  it("should trigger length validations for username and password", () => {
    cy.get('input[name="username"]').should("exist").type("a");

    cy.get('input[name="password"]').should("exist").type("ab");

    cy.get('button[type="submit"]').click();

    cy.get("p").should("contain.text", "Username should of length 3 atleast");
    cy.get("p").should(
      "contain.text",
      "Password should be of length 6 atleast."
    );
  });
});
