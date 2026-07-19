describe('OrangeHRM Login Automation', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });

    it('Valid Login', () => {
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.wait(2000);
        // Verify successful login
        cy.url().should('include', '/dashboard');
        cy.get('.oxd-topbar-header-title').should('contain', 'Dashboard');
        cy.wait(2000);
    });

    it('Invalid Login', () => {
        cy.get('input[name="username"]').type('InvalidUser');
        cy.get('input[name="password"]').type('InvalidPass');
        cy.get('button[type="submit"]').click();
        cy.wait(2000);
        // Verify error message
        cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
        cy.wait(2000);
    });

    it('Login with Empty Fields', () => {
        cy.get('button[type="submit"]').click();
        cy.wait(2000);
        // Verify validation messages
        cy.get('.oxd-input-group:has(input[name="username"]) .oxd-text').should('contain', 'Required');
        cy.get('.oxd-input-group:has(input[name="password"]) .oxd-text').should('contain', 'Required');
        cy.wait(2000);
    });
});
