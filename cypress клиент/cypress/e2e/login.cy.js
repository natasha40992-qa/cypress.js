describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки Забыл пароль
        cy.get('#mail').type('german@dolnikov.ru'); //ВВела верный логин
        cy.get('#pass').type('qa_one_love1'); //Ввела верный пароль
        cy.get('#loginButton').click(); // Нажала войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что элемент содержит текст
        cy.get('#messageHeader').should('be.visible'); //Есть текст и он виден для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользовател
    })
    it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки Забыл пароль
        cy.get('#mail').type('german@dolnikov.ru'); //ВВела верный логин
        cy.get('#pass').type('ghcf1'); //Ввела неверный пароль
        cy.get('#loginButton').click(); // Нажала войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что элемент содержит текст
        cy.get('#messageHeader').should('be.visible'); //Есть текст и он виден для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользовател
    })
    it('Проверка валидации', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки Забыл пароль
        cy.get('#mail').type('germandolnikov.ru'); //ВВела логин без @
        cy.get('#pass').type('qa_one_love1'); //Ввела неверный пароль
        cy.get('#loginButton').click(); // Нажала войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что элемент содержит текст
        cy.get('#messageHeader').should('be.visible'); //Есть текст и он виден для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользовател
    })
    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки Забыл пароль


        cy.get('#forgotEmailButton').click(); // Нажала восстановить пароль 
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввела почту
        cy.get('#restoreEmailButton').click(); // нажала кнопку отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю, что элемент содержит текст
        cy.get('#messageHeader').should('be.visible'); //Есть текст и он виден для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользовател
    })
    it('Баг разработчика', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки Забыл пароль
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //ВВела логин разными буквами
        cy.get('#pass').type('qa_one_love1'); //Ввела верный пароль
        cy.get('#loginButton').click(); // Нажала войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что элемент содержит текст
        cy.get('#messageHeader').should('be.visible'); //Есть текст и он виден для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользовател
    })
})
