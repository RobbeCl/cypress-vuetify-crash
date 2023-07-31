import HelloWorld from "../components/HelloWorld.vue";

describe("Test", () => {
  it("Test", () => {
    cy.mount(HelloWorld);

    cy.wait(1000)

    cy.get(`[data-cy="inputField"]`).click();
  });
});
