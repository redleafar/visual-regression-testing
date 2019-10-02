describe('Los estudiantes create account fail', function() {
    it('Visits los estudiantes and fails at sign up', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()

        //Registro fallido
        cy.contains('Ingresar').click()
        cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Juan")
        cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Perez")
        cy.get('.cajaSignUp').find('input[name="correo"]').click().type("correofalso9999@gmail.com")
        cy.get('.cajaSignUp').contains('Estudio una maestria').click()
        cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('Maestría en Ingeniería de Software')
        cy.get('.cajaSignUp').find('input[name="password"]').click().type("P!assword123")
        cy.get('.cajaSignUp').contains('Acepto los términos y condiciones y la política de privacidad.').click()
        cy.get('.cajaSignUp').contains('Registrarse').click()        
    })
})