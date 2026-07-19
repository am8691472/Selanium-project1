describe('Automate my fitst Practice Form', () => {
    it('Fills and submits the form', () => {
        cy.visit('https://demoqa.com/automation-practice-form');

    // Fill in the text fields
         cy.get('#firstName').type('ahmed');
         cy.get('#lastName').type('madni');
        cy.get('#userEmail').type('am8691472@gmail.com');

        // Select Gender
        cy.get('input[name="gender"][value="Male"]').click({ force: true });

         // Enter Mobile Number
        cy.get('#userNumber').type('03324786889');

         // Date of Birth Selection
         cy.get('#dateOfBirthInput').click();
         cy.get('.react-datepicker__year-select').select('1999');
         cy.get('.react-datepicker__month-select').select('fed');
         cy.get('.react-datepicker__day--001').click(); // Selects 1th

        // Enter Subject
        cy.get('.subjects-auto-complete__value-container').type('Maths{enter}');

         // Select Hobbies
         cy.get('input[type="checkbox"][value="Sports"]').click({ force: true });  

       // Upload File
         cy.get('#uploadPicture').selectFile('cypress/fixtures/sample.png');

         // Enter Address
         cy.get('#currentAddress').type('123 Main Street, New York, USA');

         // Select State and City
         cy.get('#state').click().get('div').contains('NCR').click();
         cy.get('#city').click().get('div').contains('Delhi').click();

         // Submit the form
         cy.get('#submit').click();

         // Validate submission success
         cy.get('.modal-content').should('be.visible');
     });
});