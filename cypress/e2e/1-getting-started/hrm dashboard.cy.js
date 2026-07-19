    describe('OrangeHRM Dashboard Tests', () => {
        beforeEach(() => {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
            cy.get('input[name="username"]').type('Admin');
            cy.get('input[name="password"]').type('admin123');
            cy.get('button[type="submit"]').click();
            cy.wait(2000);
        });

        it('Verify Dashboard Access', () => {
            cy.url().should('include', '/dashboard');
            cy.wait(2000);
            cy.get('.oxd-topbar-header-title').should('contain', 'Dashboard');
            cy.wait(2000);
        });

        it('Check Dashboard Widgets Visibility', () => {
            cy.get('.oxd-grid-item').should('have.length.at.least', 1);
            cy.wait(2000);
        });

        it('Verify Sidebar Navigation', () => {
            cy.get('.oxd-main-menu-item').contains('Admin').click();
            cy.wait(2000);
            cy.url().should('include', '/admin');
            cy.wait(2000);
        });

        it('Logout Functionality', () => {
            cy.get('.oxd-userdropdown-name').click();
            cy.wait(2000);
            cy.contains('Logout').click();
            cy.url().should('include', '/auth/login');
            cy.wait(2000);
        });

        it('Verify Quick Launch Section', () => {
            cy.get('.orangehrm-quick-launch').should('be.visible');
            cy.wait(2000);
        });

        it('Check Employee Distribution by Subunit Chart', () => {
            cy.get('.oxd-chart-widget').should('be.visible');
            cy.wait(2000);
        });

        it('Verify Time at Work Widget', () => {
            cy.get('.orangehrm-dashboard-widget-title').contains('Time at Work').should('be.visible');
            cy.wait(2000);
        });

        it('Verify Latest Leave Requests Section', () => {
            cy.get('.orangehrm-dashboard-widget-title').contains('Latest Leave Requests').should('be.visible');
            cy.wait(2000);
        });

        it('Verify My Actions Section', () => {
            cy.get('.orangehrm-dashboard-widget-title').contains('My Actions').should('be.visible');
            cy.wait(2000);
        });

        it('Verify Pending Self Review Widget', () => {
            cy.get('.orangehrm-dashboard-widget-title').contains('Pending Self Review').should('be.visible');
            cy.wait(2000);
        });

        it('Check Buzz Latest Posts Section', () => {
            cy.get('.orangehrm-dashboard-widget-title').contains('Latest Posts').should('be.visible');
            cy.wait(2000);
        });

        it('Verify Search Functionality in Dashboard', () => {
            cy.get('.oxd-input').type('Admin');
            cy.wait(2000);
            cy.get('.oxd-main-menu-item').contains('Admin').should('be.visible');
        });

        it('Validate Notifications Section', () => {
            cy.get('.oxd-topbar-header').within(() => {
                cy.wait(2000);
                cy.get('.oxd-icon-button').click();
                cy.wait(2000);
                cy.get('.oxd-dropdown-menu').should('be.visible');
                cy.wait(2000);
            });
        });
    });
