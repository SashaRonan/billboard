(function (app) {
    app.Burger = {
        draw: function () {

            let burgerDiv           = AdsBoard.Create.div("burger");
            let input             = AdsBoard.Create.input("burger__toggle", 'burger__toggle', 'checkbox', '');
            let label             = AdsBoard.Create.label("burger__block", "burger__block", "burger__toggle");
            let span              = AdsBoard.Create.span("burger__span", "burger__span");
            let menuIcon            = AdsBoard.Create.menuIcon();

            span.appendChild(menuIcon);
            label.appendChild(span);

            let headerNavDiv         = AdsBoard.Create.div("burger_nav");
            let button1           = AdsBoard.Create.button("burger_a","Лента", AdsBoard.Functions.goToProductList);
            let button2           = AdsBoard.Create.button("burger_a", "Мои объявления", AdsBoard.Functions.goToMyProducts);
            let button3           = AdsBoard.Create.button("burger_a","Выход", AdsBoard.Functions.LogOut )

            headerNavDiv.appendChild(button1);
            headerNavDiv.appendChild(button2);
            headerNavDiv.appendChild(button3);

            burgerDiv.appendChild(input);
            burgerDiv.appendChild(label);
            burgerDiv.appendChild(headerNavDiv);

            return burgerDiv;
        }
    }
})(AdsBoard);