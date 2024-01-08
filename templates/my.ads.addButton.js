(function (app) {
    app.MyAdsAddButton = {
        draw: function () {

            let content       = BillBoard.Create.div("content_add_button")
            let buttonAddBox  = BillBoard.Create.div('button_add-box')
            let buttonAdd  = BillBoard.Create.buttonWithID('product_button','button_add_product', 'Добавить', BillBoard.Functions.goToAddNewProduct);

            buttonAddBox.append(buttonAdd);
            content.append(buttonAddBox);
            document.body.append(content);
        }
    }
})(BillBoard);