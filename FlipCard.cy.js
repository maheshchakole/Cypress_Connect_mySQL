describe('Amazon test', ()=>{
    it('click on type', ()=>{
        
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').click().type('Mi Laptop')
        cy.get('#nav-search-submit-button').click()
        
        
        
        
    })
})