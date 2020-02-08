describe('First test', function(){
    it('finds the content',function () {
        cy.visit('https://petra-rabai.github.io/website')

        cy.contains('accordion')
    });
})