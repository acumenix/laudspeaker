import setDate from "./setDate";
import { format } from "date-fns";

export default (offset = 60000) => {
  cy.get("#timeDelay > .p-0 > .justify-between").click();
  cy.get(".MuiFormControl-root button").click();
  cy.get("#data-option-SpecificTime").click();
  cy.get(".css-1lwbda4-MuiStack-root > input").then((input) => {
    const date = new Date(new Date().getTime() + offset);

    setDate(input[0], format(date, "yyyy-MM-dd") + "T" + format(date, "hh:mm"));
  });
  cy.wait(1000);
  cy.get("#save-trigger").click();
};
