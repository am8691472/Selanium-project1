describe('OrangeHRM Search Bar Tests', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.wait(2000); // Wait for 2 seconds after login
    });

    it('Verify Search Bar is Visible', () => {
        cy.wait(2000); // Adding wait to slow down execution
        cy.get('.oxd-input').should('be.visible');
    });

    it('Search for a Valid Menu Item', () => {
        cy.get('.oxd-input').type('Admin');
        cy.wait(2000);
        cy.get('.oxd-main-menu-item').contains('Admin').should('be.visible');
    });

    it('Search for an Invalid Menu Item', () => {
        cy.get('.oxd-input').type('InvalidItem');
        cy.wait(2000);
        cy.get('.oxd-main-menu-item').should('not.exist');
    });

    it('Search with Partial Keyword', () => {
        cy.get('.oxd-input').type('Da');
        cy.wait(2000);
        cy.get('.oxd-main-menu-item').contains('Dashboard').should('be.visible');
    });

    it('Clear Search Input', () => {
        cy.get('.oxd-input').type('Admin');
        cy.wait(2000);
        cy.get('.oxd-input').clear();
        cy.wait(2000);
        cy.get('.oxd-main-menu-item').should('have.length.at.least', 1);
    });

    it('Search for Case Sensitivity', () => {
        cy.get('.oxd-input').type('admin');
        cy.wait(2000);
        cy.get('.oxd-main-menu-item').contains('Admin').should('be.visible');
    });

    it('Verify Search Suggestions are Clickable', () => {
        cy.get('.oxd-input').type('Admin');
        cy.wait(2000);
        cy.get('.oxd-main-menu-item').contains('Admin').click();
        cy.wait(2000);
        cy.url().should('include', '/admin');
    });

    it('Verify Empty Search Does Not Break UI', () => {
        cy.get('.oxd-input').type(' ');
        cy.wait(2000);
        cy.get('.oxd-main-menu-item').should('have.length.at.least', 1);
    });

    it('Search for Numeric Input', () => {
        cy.get('.oxd-input').type('123');
        cy.wait(2000);
        cy.get('.oxd-main-menu-item').should('not.exist');
    });
});
