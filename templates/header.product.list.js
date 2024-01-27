(function (app) {
    app.HeaderProductList = {  // Создание HTML страницы для хедера после авторизации пользователя

        draw: function () {

            let header                            = app.Create.div('header')
            let containerHeader                   = app.Create.div('container_productList-header')

            let headerLogo                        = app.Create.div('header_logo');
            headerLogo.onclick                    = app.Functions.goToProductList;

            let logo                              = app.Create.img('header_logo_img', 'header_logo_img', 'img/logo/logo.svg')
            let link                              = app.Create.paragraph('header_link', 'header_link','Billboard')

            let headerNav                         = app.Create.divWithID('header_nav', 'header_nav')

            let headerNavList                     = app.Create.button('header_a',"Лента", app.Functions.goToProductList);
            let headerNavMyAds                    = app.Create.button('header_a',"Мои объявления", app.Functions.goToMyProducts );
            let headerNavExit                     = app.Create.button('header_a', "Выход", app.Functions.LogOut );

            let burger                            = app.Burger.draw();

            headerLogo.append(logo);
            headerLogo.append(link)

            headerNav.append(headerNavList);
            headerNav.append(headerNavMyAds);
            headerNav.append(headerNavExit);
            containerHeader.append(headerLogo);
            containerHeader.append(headerNav);
            containerHeader.append(burger);

            header.append(containerHeader);

            document.body.append(header);
        }
    }
})(BillBoard);