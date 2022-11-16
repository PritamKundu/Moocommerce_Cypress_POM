import { Menus } from "../../PageObjects/Homepage/TC_009 Menus_Page ";

describe("Verify All menus", () => {

    const menus = new Menus();

    before(() => {
        cy.openUrl()
    })

    it("Verify the 'Hjem' menu ", () => {
        menus.verifyMenus('Hjem')
    })

    it("Verify the 'Inspirasjon' menu ", () => {
        menus.verifyMenus('Inspirasjon')
    })

})


