(function (app) {
    app.Burger = {
        draw: function () { // Создание кнопки бургера в хедере для адаптивного дизайна

            let burgerDiv           = app.Create.div("burger");
            let input             = app.Create.input("burger__toggle", 'burger__toggle', 'checkbox', '');
            let label             = app.Create.label("burger__block", "burger__block", "burger__toggle");
            let span              = app.Create.span("burger__span", "burger__span");
            let menuIcon            = app.Create.menuIcon();

            span.appendChild(menuIcon);
            label.appendChild(span);

            let headerNavDiv         = app.Create.div("burger_nav");
            let button1           = app.Create.button("burger_a","Лента", app.Functions.goToProductList);
            let button2           = app.Create.button("burger_a", "Мои объявления", app.Functions.goToMyProducts);
            let button3           = app.Create.button("burger_a","Выход", app.Functions.LogOut )

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