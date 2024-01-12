(function (app) {
    app.HeaderProductList = {  // Создание HTML страницы для хедера после авторизации пользователя

        draw: function () {

            let header                            = BillBoard.Create.div('header')
            let containerHeader                   = BillBoard.Create.div('container_productList-header')

            let headerLogo                        = BillBoard.Create.div('header_logo');
            headerLogo.onclick                    = BillBoard.Functions.goToProductList;

            let logo                              = BillBoard.Create.img('header_logo_img', 'header_logo_img', 'img/logo/logo.svg')
            let link                              = BillBoard.Create.paragraph('header_link', 'header_link','Billboard')

            let headerNav                         = BillBoard.Create.divWithID('header_nav', 'header_nav')

            let headerNavList                     = BillBoard.Create.button('header_a',"Лента", BillBoard.Functions.goToProductList);
            let headerNavMyAds                    = BillBoard.Create.button('header_a',"Мои объявления", BillBoard.Functions.goToMyProducts );
            let headerNavExit                     = BillBoard.Create.button('header_a', "Выход", BillBoard.Functions.LogOut );

            let burger                            = BillBoard.Burger.draw();

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