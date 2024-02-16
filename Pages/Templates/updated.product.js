(function (app) {
    app.UpdatedProduct = { // Создание HTML карточки для добавления отредактированного товара

        draw: function (
            productID,
            productName,
            productDescription,
            productPrice,
            productImgSrc,
            parentElem) {

            const imgID               = "img_" + productID;
            const productNameID       = "productName_" + productID;
            const descriptionID       = "description_" + productID;
            const priceID             = "price_" + productID;
            const editID              = "edit_" + productID;
            const delID               = "del_" + productID;


            let productBlock                 = app.Create.div('product_block_add');

            let productImgBox                = app.Create.div('product_img-box');
            let productImgDiv                = app.Create.div('product_img');
            let productImg                   = app.Create.img('upload_img_file', imgID, productImgSrc);

            productImgDiv.append(productImg);
            productImgBox.append(productImgDiv);

            let productRightDiv              = app.Create.div('product_right_block');

            let productTopDiv                = app.Create.div('product_top_block');

            let productDescriptionBox        = app.Create.div('product_description-box_add')
            let productNameDescriptionBox    = app.Create.div('product_name-description-box');
            let productNameBlock             = app.Create.header('product_name', productNameID, productName);
            let productDescriptionBlock      = app.Create.paragraph('product_description', descriptionID, productDescription)

            productNameDescriptionBox.append(productNameBlock);
            productNameDescriptionBox.append(productDescriptionBlock);
            productDescriptionBox.append(productNameDescriptionBox);

            let productPriceBlock             = app.Create.divWithID('product_price', priceID);
            productPriceBlock.textContent     = productPrice + ' р.';

            productTopDiv.append(productDescriptionBox);
            productTopDiv.append(productPriceBlock);
            productRightDiv.append(productTopDiv);

            let productBottomDiv              = app.Create.div('product_bottom_block');

            let button_edit                   = app.Create.buttonWithID('product_button_my_ads', editID, 'Изменить', app.Navigate.goToFormUpdateProduct);
            let button_delete                 = app.Create.buttonWithID('product_button_my_ads', delID, 'Удалить', app.Product.deleteProduct);

            productBottomDiv.append(button_edit);
            productBottomDiv.append(button_delete);

            productRightDiv.append(productBottomDiv);
            productBlock.append(productImgBox);
            productBlock.append(productRightDiv);

            parentElem.append(productBlock);

        }
    }

})(BillBoard);