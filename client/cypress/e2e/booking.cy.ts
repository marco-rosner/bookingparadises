describe("Booking", () => {
    it("should create a booking", () => {
        const propertyId = 118729
        const bookingId = 123842

        cy.visit('http://localhost:5173')
        cy.get('#searchPlace').click().type('Maceió')
        cy.get('#searchPlace-option-0').click()
        cy.get('[data-cy="submit"]').should('be.disabled')
        cy.get('#form-start-date').type('02/20/2025')
        cy.get('#form-end-date').type('02/23/2025')
        cy.get('[data-cy="submit"]').should('not.be.disabled')
        cy.get('[data-cy="submit"]').click()

        cy.wait(3000)

        cy.get(`[data-cy="reserve-${propertyId}"]`).should("exist")
        cy.get(`[data-cy="reserve-${propertyId}"]`).click()

        cy.wait(5000)

        // check manage view
        cy.get(`[data-cy="update-booking-${bookingId}"]`).should("exist")
        cy.get(`[data-cy="delete-booking-${bookingId}"]`).should("exist")
    })

    it("should access manage booking view", () => {
        const propertyId = 118729
        const bookingId = 123842

        cy.visit('http://localhost:5173')

        // accessing manage booking view
        cy.get('[data-cy="user-menu"]').should("exist")
        cy.get('[data-cy="user-menu"]').click()
        cy.get('[data-cy="manage-user-menu"]').should("exist")
        cy.get('[data-cy="manage-user-menu"]').click()
        cy.contains("No Bookings").should('exist')
        
        cy.wait(3000)

        // booking
        cy.get('[data-cy="submit"]').should('be.disabled')
        cy.get('#searchPlace').click().type('Maceió')
        cy.get('#searchPlace-option-0').click()
        cy.get('#form-start-date').type('02/20/2025')
        cy.get('#form-end-date').type('02/23/2025')
        cy.get('[data-cy="submit"]').should('not.be.disabled')
        cy.get('[data-cy="submit"]').click()

        cy.wait(3000)

        cy.get(`[data-cy="reserve-${propertyId}"]`).should("exist")
        cy.get(`[data-cy="reserve-${propertyId}"]`).click()

        cy.wait(5000)

        // check manage view
        cy.get(`[data-cy="update-booking-${bookingId}"]`).should("exist")
        cy.get(`[data-cy="delete-booking-${bookingId}"]`).should("exist")
    })

    it('should update a booking', () => {
        const propertyId = 118729
        const bookingId = 123842

        cy.visit('http://localhost:5173')

        // booking
        cy.get('[data-cy="submit"]').should('be.disabled')
        cy.get('#searchPlace').click().type('Maceió')
        cy.get('#searchPlace-option-0').click()
        cy.get('#form-start-date').type('02/20/2025')
        cy.get('#form-end-date').type('02/23/2025')
        cy.get('[data-cy="submit"]').should('not.be.disabled')
        cy.get('[data-cy="submit"]').click()

        cy.wait(3000)

        cy.get(`[data-cy="reserve-${propertyId}"]`).should("exist")
        cy.get(`[data-cy="reserve-${propertyId}"]`).click()

        cy.wait(5000)

        // check manage view
        cy.get(`[data-cy="update-booking-${bookingId}"]`).should("exist")
        cy.get(`[data-cy="delete-booking-${bookingId}"]`).should("exist")

        // updating
        cy.get(`[data-cy="update-booking-${bookingId}"]`).click()
        cy.get('#update-start-date').type('03/07/2025')
        cy.get('#update-end-date').type('03/10/2025')

        cy.get('[data-cy="update-button"]').should("exist")
        cy.get('[data-cy="update-button"]').click()

        cy.wait(5000)

        // check manage view
        cy.get(`[data-cy="update-booking-${bookingId}"]`).should("exist")
        cy.get(`[data-cy="delete-booking-${bookingId}"]`).should("exist")
    })

    it('should delete a booking', () => {
        const propertyId = 118729
        const bookingId = 123842

        cy.visit('http://localhost:5173')

        // booking
        cy.get('[data-cy="submit"]').should('be.disabled')
        cy.get('#searchPlace').click().type('Maceió')
        cy.get('#searchPlace-option-0').click()
        cy.get('#form-start-date').type('02/20/2025')
        cy.get('#form-end-date').type('02/23/2025')
        cy.get('[data-cy="submit"]').should('not.be.disabled')
        cy.get('[data-cy="submit"]').click()

        cy.wait(3000)

        cy.get(`[data-cy="reserve-${propertyId}"]`).should("exist")
        cy.get(`[data-cy="reserve-${propertyId}"]`).click()

        cy.wait(5000)

        // check manage view
        cy.get(`[data-cy="update-booking-${bookingId}"]`).should("exist")
        cy.get(`[data-cy="delete-booking-${bookingId}"]`).should("exist")

        // deleting
        cy.get(`[data-cy="delete-booking-${bookingId}"]`).click()

        cy.wait(1000)

        cy.contains("No Bookings").should('exist')
    })
})