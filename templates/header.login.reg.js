(function (app) {
    app.HeaderLoginReg = {
        draw: function () {

            let header         = AdsBoard.Create.div('header');
            let container      = AdsBoard.Create.div('container_login_header');
            let headerLogo     = AdsBoard.Create.div('header_logo');
            headerLogo.onclick                 = AdsBoard.Functions.goToLogin;
            let logo         = AdsBoard.Create.img('header_logo_img', 'header_logo_img', 'img/logo/17.svg')
            let link      = AdsBoard.Create.paragraph('header_link','header_link', 'Billboard')

            headerLogo.append(logo);
            headerLogo.append(link)
            container.append(headerLogo);
            header.append(container);

            document.body.append(header);

        }
    }


})(AdsBoard);