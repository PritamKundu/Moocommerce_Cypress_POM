// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

///<reference types="cypress"/>
///<reference types="cypress-xpath"/>

// require('cy-verify-downloads').addCustomCommand();

// Cypress.Commands.add('findElementById', (id) => {
//    cy.get(`#${id}`)
// })

// Cypress.Commands.add('findElementByClassName', (classsName) => {
//    cy.get(`.${classsName}`)
// })

// Cypress.Commands.add('findElementByXpath', (xpath) => {
//    cy.xpath(`${xpath}`)
// })

// Cypress.Commands.add('findElementByTestId', (testId) => {
//    cy.get(`[data-cy='${testId}']`)
// })

Cypress.Commands.add('openUrl', () => {
   const url = "https://mooleker.moocommerce.no/"
   cy.visit(url)
   cy.url().then((get_Url) =>{ expect(get_Url).to.eq(url) })
   //cy.xpath("(//img[@alt='mooleker'])[1]").should('be.visible')
})


Cypress.Commands.add('isElementExist', (element) => {
   cy.window().then((win) => {
       const identifiedElement = win.document.xpath(element)
       cy.log('Object value = ' + identifiedElement)
   })
})
