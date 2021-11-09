/// <reference types="cypress" />
describe('hacer registro en e-commerce', () => {
    
    before('Cargar Datos',() =>{
        cy.fixture('Login').then(function (login){
            this.login = login;
        })
    })

    it('exitoso', function () {
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.login').click();
        cy.get('#email_create').type(this.login.correoRegistroExitoso);
        cy.get('#SubmitCreate > span').click();
        cy.wait(2000)
        cy.get('#id_gender1').click();
        cy.get('#customer_firstname').type(this.login.nombre);
        cy.get('#customer_lastname').type(this.login.apellido)
        cy.get('#passwd').type(this.login.contraseña)
        cy.get('#address1').type(this.login.direccion)
        cy.get('#city').type(this.login.ciudad)
        cy.get('#phone_mobile').type(this.login.telefono)
        cy.get('#id_state').select(this.login.Estado)
        cy.get('#postcode').type(this.login.codigo_postal)
        cy.get('#submitAccount > span').click();
        cy.get('.myaccount-link-list > :nth-child(4) > a > span').should('be.visible')        
    })

    it('fallido por código postal', function () {
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.login').click();
        cy.get('#email_create').type(this.login.correoRegistroExitoso2);
        cy.get('#SubmitCreate > span').click();
        cy.wait(2000)
        cy.get('#id_gender1').click();
        cy.get('#customer_firstname').type(this.login.nombre);
        cy.get('#customer_lastname').type(this.login.apellido)
        cy.get('#passwd').type(this.login.contraseña)
        cy.get('#address1').type(this.login.direccion)
        cy.get('#city').type(this.login.ciudad)
        cy.get('#phone_mobile').type(this.login.telefono)
        cy.get('#id_state').select(this.login.Estado)
        cy.get('#postcode').type(this.login.codigo_postal_fallido)
        cy.get('#submitAccount > span').click();
       cy.get('ol > li').should('contain', 'It must follow this format: 00000')     
    })

    it('Hacer login',function(){
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.login').click();
        cy.get('#email_create').type(this.login.correoRegistroExitoso);
        cy.get('#passwd').type(this.login.contraseña)
        cy.get('#SubmitLogin > span').click();
        cy.get('.info-account').should('contain', 'Welcome to your account');
    })

    it('Hacer login error de autentificacion',function(){
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.login').click();
        cy.get('#email_create').type(this.login.correoLoginFallido);
        cy.get('#passwd').type(this.login.contraseña)
        cy.get('#SubmitLogin > span').click();
        cy.get('ol > li').should('contain', 'Authentication failed.');
    })
})