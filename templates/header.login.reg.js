(function (app) {
    app.HeaderLoginReg = {
        draw: function () {

            let header         = BillBoard.Create.div('header');
            let container      = BillBoard.Create.div('container_login_header');
            let headerLogo     = BillBoard.Create.div('header_logo');
            headerLogo.onclick                 = BillBoard.Functions.goToLogin;
            let logo         = BillBoard.Create.img('header_logo_img', 'header_logo_img', 'img/logo/17.svg')
            let link      = BillBoard.Create.paragraph('header_link','header_link', 'Billboard')

            headerLogo.append(logo);
            headerLogo.append(link)
            container.append(headerLogo);
            header.append(container);

            document.body.append(header);

        }
    }


})(BillBoard);