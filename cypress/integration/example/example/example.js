import { Given } from "cypress-cucumber-preprocessor/steps";

const url = "https://wikipedia.com";

Given(`I open wikipedia page`, () => {
  cy.visit(url);
});

Then('I should see the following number of links per section', dataTable => {
   //good luck
});
