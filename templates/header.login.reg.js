(function (app) {
    app.HeaderLoginReg = { // Создание хедера для HTML страницы авторизации и регистрации пользователя

        draw: function () {

            let header          = app.Create.div('header');
            let container       = app.Create.div('container_login_header');
            let headerLogo      = app.Create.div('header_logo');
            headerLogo.onclick  = app.Functions.goToLogin;
            let logo            = app.Create.img('header_logo_img', 'header_logo_img', 'img/logo/logo.svg')
            let link            = app.Create.paragraph('header_link','header_link', 'Billboard')

            headerLogo.append(logo);
            headerLogo.append(link)
            container.append(headerLogo);
            header.append(container);

            document.body.append(header);

        }
    }

})(BillBoard);