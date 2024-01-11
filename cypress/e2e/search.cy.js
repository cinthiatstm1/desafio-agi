/// <reference types="cypress" />

import config from "C:/automação/test-case/cypress/config/url.json"
import { TEST_IDS } from "C:/automação/test-case/cypress/e2e/constants.js"
require('@shelex/cypress-allure-plugin');


describe("Pesquisar no blog Agibank", () => {
    beforeEach(() => {
        cy.visit(config.baseUrl)
    })

    it("Abrir campo de busca e pesquisar no campo busca", () => {
        cy.get(TEST_IDS.buttonMenu).should("be.visible").click()
    })

    it("Pesquisar no campo busca", () => {
        cy.get(TEST_IDS.buttonMenu).should("be.visible").click()
        cy.get(TEST_IDS.inputSearch).first().type("Agibank{enter}")
        cy.contains("h1", "Resultados da busca por: Agibank")
    })
})