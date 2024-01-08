(function (app) {
    app.HeaderProductList = {
        draw: function () {

            let header          = AdsBoard.Create.div('header')
            let containerHeader = AdsBoard.Create.div('container_productList-header')

            let headerLogo      = AdsBoard.Create.div('header_logo');
            headerLogo.onclick                   = AdsBoard.Functions.goToProductList;

            let logo           = AdsBoard.Create.img('header_logo_img', 'header_logo_img', 'img/logo/17.svg')
            let link        = AdsBoard.Create.paragraph('header_link', 'header_link','Billboard')

            let headerNav         = AdsBoard.Create.divWithID('header_nav', 'header_nav')

            let headerNavList  = AdsBoard.Create.button('header_a',"Лента", AdsBoard.Functions.goToProductList);
            let headerNavMyAds = AdsBoard.Create.button('header_a',"Мои объявления", AdsBoard.Functions.goToMyProducts );
            let headerNavExit  = AdsBoard.Create.button('header_a', "Выход", AdsBoard.Functions.LogOut );

            let burger                            = AdsBoard.Burger.draw();

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
})(AdsBoard);