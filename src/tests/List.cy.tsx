import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../store";
import { mount } from "cypress/react18";
import "../index.css";
import { List } from "../components/List";
import { data } from "../store/data";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

describe("<List />", () => {
  beforeEach(() => {
    mount(
      <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
          <BrowserRouter>
            <List list={data.list.lists[1]} />
            <List list={data.list.lists[2]} />
          </BrowserRouter>
        </DndProvider>
      </Provider>
    );
  });

  it("should render lists correnctly", () => {
    cy.get("h1").should("exist").should("contain.text", "Another list");
    cy.get("h1").should("exist").should("contain.text", "A list #1");
  });

  it("should drag a task to another list", () => {
    //Selecting task card
    cy.get('[data-testid="kPiFlpKVHYs_bJmFIYeT5"]').as("draggedTask");

    //Selecting list to drop
    cy.get('[data-testid="0krOThmFGB6BBSgEFURTy"]').as("dropTarget");

    cy.get("@draggedTask").invoke("position").as("initialPosition");

    //Moving the task
    cy.get("@draggedTask")
      .trigger("mousedown", { which: 1 })
      .trigger("mousemove", { clientX: 0, clientY: 500 })
      .trigger("mouseup", { force: true });

    cy.get("@draggedTask").invoke("position").as("finalPosition");

    //Checking if the task moved
    cy.get("@finalPosition").then((finalPosition) => {
      expect(finalPosition.left).to.be.greaterThan(0);
      expect(finalPosition.top).to.be.greaterThan(0);
    });

    cy.get("@dropTarget").should("contain", "This is a task");
  });
});
