(function (app) {
    app.HeaderLoginReg = {
        draw: function () {

            let header             = create_header_tag();
            let container        = create_header_container();
            let headerLogo    = create_header_logo();

            container.append(headerLogo);
            header.append(container);

            // Добавление заголовка на страницу
            document.body.append(header);

        }
    }
    function create_header_tag () {
        let header = document.createElement('header');
        header.classList.add('header');
        return header;
    }

    function create_header_container () {
        let container = document.createElement('div');
        container.classList.add('container_login_header');
        return container;
    }

    function create_header_logo () {
        let headerLogo = document.createElement('a');
        headerLogo.classList.add('header_logo');
        headerLogo.setAttribute('href', '#link_to_main');
        headerLogo.textContent = 'МояОбъява.RU';
        return headerLogo;
    }

})(AdsBoard);