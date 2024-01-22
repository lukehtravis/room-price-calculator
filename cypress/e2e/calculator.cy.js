describe("Create Rooms and Attributes Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/calculator");
  });

  it("calculates one attribute correctly", () => {
    createRentAndRooms(1000);
    createAttribute("square feet", 90);
    checkTotals(900, undefined, 900);
  });

  it("calculates two attributes correctly", () => {
    createRentAndRooms(1000);
    createAttribute("square feet", 90);
    createAttribute("privacy", 10);
    checkTotals(900, 100, 1000);
  });

  it("prevents user from adding percentages more than 100", () => {
    createRentAndRooms(1000);
    createAttribute("square feet", 90);
    cy.get('[data-testid="generate-create-attributes-dialogue"]').click();
    cy.get('[data-testid="attribute-name-input"]').type(`privacy`);
    cy.get('[data-testid="attribute-percentage-input"]').type(`20`);
    cy.get('[data-testid="create-attribute-button"]').click();
    alertMessage(
      "Attribute percentage total cannot exceed 100. Current total is 110"
    );
  });
});

describe("Edit Rooms and Attributes Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/calculator");
  });

  it("Edits attributes correctly", () => {
    createRentAndRooms(1000);
    createAttribute("squarefeet", 90);
    createAttribute("privacy", 10);
    cy.get('[data-testid="generate-edit-attributes-dialogue"]').click();
    cy.get('[data-testid="edit-attribute-input-squarefeet"]').clear();
    cy.get('[data-testid="edit-attribute-input-squarefeet"]').type("80");
    cy.get('[data-testid="edit-attribute-input-privacy"]').clear();
    cy.get('[data-testid="edit-attribute-input-privacy"]').type("20");
    cy.get('[data-testid="edit-attributes-button"]').click();
    checkTotals(800, 200, 1000);
  });

  it("Tries to add attributes that sum to more than 100", () => {
    createRentAndRooms(1000);
    createAttribute("squarefeet", 90);
    createAttribute("privacy", 10);
    cy.get('[data-testid="generate-edit-attributes-dialogue"]').click();
    cy.get('[data-testid="edit-attribute-input-squarefeet"]').clear();
    cy.get('[data-testid="edit-attribute-input-squarefeet"]').type("80");
    cy.get('[data-testid="edit-attribute-input-privacy"]').clear();
    cy.get('[data-testid="edit-attribute-input-privacy"]').type("30");
    cy.get('[data-testid="edit-attributes-button"]').click();
    alertMessage(
      `Unfortunately your attribute percentage is 110, which is over 100. Try and  modify things so that they add up to less and try again.`
    );
  });

  it("Edits rooms correctly", () => {
    createRentAndRooms(1000);
    createAttribute("squarefeet", 100);
    cy.get('[data-testid="generate-edit-rooms-dialogue"]').click();
    editRoom("a", "squarefeet", 300);
    cy.get(`[data-testid="modify-rooms-button"]`).click();
    cy.get(`[data-testid="room-a-attribute-squarefeet"]`).should(
      "have.text",
      `$600`
    );
  });
});

const createRentAndRooms = (rentAmount) => {
  // for simplicity, always create 2 rooms
  cy.get('[data-testid="total-rent-input"]').type(`${rentAmount}`);
  cy.get('[data-testid="set-rent-button"]').click();
  cy.get('[data-testid="number-of-rooms-input"]').type("2");
  cy.get('[data-testid="submit-rooms-button"]').click();
  cy.get('[data-testid="room-name-input-0"]').type("a");
  cy.get('[data-testid="room-name-input-1"]').type("b");
  cy.get('[data-testid="create-rooms-button"]').click();
};

const createAttribute = (attributeName, attributePercentage) => {
  cy.get('[data-testid="generate-create-attributes-dialogue"]').click();
  cy.get('[data-testid="attribute-name-input"]').type(`${attributeName}`);
  cy.get('[data-testid="attribute-percentage-input"]').type(
    `${attributePercentage}`
  );
  cy.get('[data-testid="create-attribute-button"]').click();
  cy.get('[data-testid="room-input-a"]').type("200");
  cy.get('[data-testid="room-input-b"]').type("200");
  cy.get('[data-testid="submit-attribute-details-button"]').click();
};

const checkTotals = (attribute1, attribute2, totalRent) => {
  cy.get('[data-testid="attribute-total-0"]').should(
    "have.text",
    `$${attribute1}`
  );
  if (attribute2) {
    cy.get('[data-testid="attribute-total-1"]').should(
      "have.text",
      `$${attribute2}`
    );
  }
  cy.get('[data-testid="grand-total"]').should("have.text", `$${totalRent}`);
};

const editRoom = (roomName, attributeName, newAmount) => {
  cy.get(`[data-testid="label-edit-rooms-radio-input-${roomName}"]`).click();
  cy.get(`[data-testid="room-edit-${roomName}-${attributeName}"]`).click();
  cy.get(`[data-testid="room-edit-${roomName}-${attributeName}"]`).clear();
  // need to divide by ten here because cypress does a weird thing where when you clear a number input
  // it leaves a zero in what should be an empty form field, so when we start typing, the
  // zero cypress left in is actually getting added to the end of our number
  // we can get around this by dividing by 10
  cy.get(`[data-testid="room-edit-${roomName}-${attributeName}"]`).type(
    newAmount / 10
  );
};

const alertMessage = (message) => {
  // Assert that the alert was called with the correct message
  // Cypress itself operates asynchronously. Even though the alert is synchronous and blocking in a typical browser environment, Cypress works around this by not actually rendering the alert in the test browser.
  // for this reason, we need to test alerts asynchronously
  // Stub the alert and store the message in a variable
  let alertMessage;
  cy.on("window:alert", (msg) => {
    alertMessage = msg;
  });
  cy.wrap(null).then(() => {
    expect(alertMessage).to.eq(message);
  });
};
