import { Search } from "../../PageObjects/Homepage/TC_005 Search_Page";

describe("Verify the 'Search' option at Navbar", () => {

    const search = new Search();

    before(() => {
        cy.openUrl()
    })

    it("Verify 'Search' option is visible or not", () => {
        search.verifySearchBox('Boy', 'Search …', 'rgb(17, 17, 17)')
    })
})


