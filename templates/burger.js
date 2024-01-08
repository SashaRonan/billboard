(function (app) {
    app.Burger = {
        draw: function () {

            let burgerDiv           = BillBoard.Create.div("burger");
            let input             = BillBoard.Create.input("burger__toggle", 'burger__toggle', 'checkbox', '');
            let label             = BillBoard.Create.label("burger__block", "burger__block", "burger__toggle");
            let span              = BillBoard.Create.span("burger__span", "burger__span");
            let menuIcon            = BillBoard.Create.menuIcon();

            span.appendChild(menuIcon);
            label.appendChild(span);

            let headerNavDiv         = BillBoard.Create.div("burger_nav");
            let button1           = BillBoard.Create.button("burger_a","Лента", BillBoard.Functions.goToProductList);
            let button2           = BillBoard.Create.button("burger_a", "Мои объявления", BillBoard.Functions.goToMyProducts);
            let button3           = BillBoard.Create.button("burger_a","Выход", BillBoard.Functions.LogOut )

            headerNavDiv.appendChild(button1);
            headerNavDiv.appendChild(button2);
            headerNavDiv.appendChild(button3);

            burgerDiv.appendChild(input);
            burgerDiv.appendChild(label);
            burgerDiv.appendChild(headerNavDiv);

            return burgerDiv;
        }
    }
})(BillBoard);