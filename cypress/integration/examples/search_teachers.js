describe('Los estudiantes search teachers', function() {
    it('Visits los estudiantes and search teachers', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()

        //Search teacher and go to the teacher page 
        cy.get('.Select-placeholder').click()
        cy.get('.Select-placeholder').get('input').type("Perez")
        cy.get('.Select-menu-outer').get('.Select-menu').get('.Select-option-group').get('.Select-option').first().click()        
        cy.screenshot()
    })
})