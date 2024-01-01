(function (app) {
    app.HeaderProductList = {
        draw: function () {

            let header             = create_div ('header');

            let containerHeader   = create_div ('container_productList-header');
            let headerLogo     = create_header_logo ('header_logo', '#link_to_main', 'МояОбъява.RU')
            let headerNav         = create_div ('header_nav');
            let headerNavList  = create_button('header_a',"Лента", goToProductList);
            let headerNavMyAds = create_button('header_a',"Мои объявления", goToMyProducts );
            let headerNavExit  = create_button('header_a', "Выход", LogOut );

            headerNav.append(headerNavList);
            headerNav.append(headerNavMyAds);
            headerNav.append(headerNavExit);
            containerHeader.append(headerLogo);
            containerHeader.append(headerNav);

            header.append(containerHeader);

            // Добавление заголовка на страницу
            document.body.append(header);
        }
    }

    function create_div (divClass) {
        let content = document.createElement('div');
        let array = divClass.split(' ');
        for (let i = 0, length = array.length; i < length; i++) {
            content.classList.add(array[i]);
        }
        return content;
    }

    function create_header_logo (headerLogoClass, link, text) {
        let headerLogo = document.createElement('a');
        headerLogo.classList.add(headerLogoClass);
        headerLogo.setAttribute('href', link);
        headerLogo.textContent = text;
        return headerLogo;
    }

    function create_header_nav_link (headerNavLinkClass, link, text, clickFunction) {
        let headerLink = document.createElement("a");
        headerLink.classList.add(headerNavLinkClass);
        headerLink.setAttribute('href', link);
        headerLink.textContent = text;
        headerLink.addEventListener("onclick", clickFunction);

        return headerLink;
    }

    function create_button(buttonClass, text, clickFunction) {
        let button = document.createElement('button');
        button.classList.add(buttonClass);
        button.textContent = text;
        button.addEventListener("click", clickFunction);
        return button;
    }

})(AdsBoard);