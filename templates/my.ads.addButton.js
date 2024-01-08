(function (app) {
    app.MyAdsAddButton = {
        draw: function () {

            let content       = AdsBoard.Create.div("content_add_button")
            let buttonAddBox  = AdsBoard.Create.div('button_add-box')
            let buttonAdd  = AdsBoard.Create.buttonWithID('product_button','button_add_product', 'Добавить', AdsBoard.Functions.goToAddNewProduct);

            buttonAddBox.append(buttonAdd);
            content.append(buttonAddBox);
            document.body.append(content);
        }
    }
})(AdsBoard);