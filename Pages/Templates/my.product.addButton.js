(function (app) {
    app.MyAdsAddButton = { // Создание HTML кнопки для добавления товара

        draw: function () {

            let content       = app.Create.div("content_add_button");
            let buttonAddBox  = app.Create.div('button_add-box');

            let buttonAdd     = app.Create.addButton(app.Navigate.goToAddNewProduct);

            buttonAddBox.append(buttonAdd);
            content.append(buttonAddBox);
            document.body.append(content);
        }
    }
})(BillBoard);