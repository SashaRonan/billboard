(function (app) {
    app.MyAdsAddButton = { // Создание HTML кнопки для добавления товара

        draw: function () {

            let content       = BillBoard.Create.div("content_add_button");
            let buttonAddBox  = BillBoard.Create.div('button_add-box');

            let buttonAdd = BillBoard.Create.addButton(BillBoard.Functions.goToAddNewProduct);

            buttonAddBox.append(buttonAdd);
            content.append(buttonAddBox);
            document.body.append(content);
        }
    }
})(BillBoard);