
export class CheckBoxPage{

    clickExpandAllButton(){
        cy.get("button.rct-option-expand-all").click()
    }

    checkUncheckItem(items){
        items.forEach(item => {
            cy.get(`label[for='tree-node-${item}']`).click()
        });
      
    }

}