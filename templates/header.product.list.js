(function (app) {
    app.HeaderProductList = {
        draw: function () {

            let header             = create_div ('header');

            let containerHeader   = create_div ('container_productList-header');
            let headerLogo     = create_header_logo ('header_logo', '#link_to_main', 'МояОбъява.RU')
            let headerNav         = create_div ('header_nav');
            let headerNavList  = create_header_nav_link('header_a','#link_to_productList',"Лента");
            let headerNavMyAds = create_header_nav_link('header_a','#link_to_MyAds',"Мои объявления" );
            let headerNavExit  = create_header_nav_link('header_a','#Exit_Messege, #link_to_LoginPage',"Выход" );

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

    function create_header_nav_link (headerNavLinkClass, link, text,) {
        let headerLink = document.createElement("a");
        headerLink.classList.add(headerNavLinkClass);
        headerLink.setAttribute('href', link);
        headerLink.textContent = text;
        // headerLink.addEventListener("click", clickFunction);

        return headerLink;
    }

    // function goToProductList() {
    //     document.querySelector(".content_product").remove();
    //     app.ProductList.draw();
    // }


})(AdsBoard);