(function (app) {
    app.MyAds = { // Создание HTML страницы с товарами авторизованного пользователя

        draw: function (
            productID,
            productName,
            productDescription,
            productPrice,
            productImgSrc)
        {

            const contentID           = "product_" + productID;
            const imgID               = "img_" + productID;
            const productNameID       = "productName_" + productID;
            const descriptionID       = "description_" + productID;
            const priceID             = "price_" + productID;
            const editButtonID        = "edit_" + productID;
            const delButtonID         = "del_" + productID;



            let content                      = app.Create.divWithID("content_product_add", contentID)

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

            let button_edit                   = app.Create.buttonWithID('product_button_my_ads',editButtonID, 'Изменить', app.Navigate.goToFormUpdateProduct);
            let button_delete                 = app.Create.buttonWithID('product_button_my_ads',delButtonID, 'Удалить', app.Product.deleteProduct);

            productBottomDiv.append(button_edit);
            productBottomDiv.append(button_delete);

            productRightDiv.append(productBottomDiv);
            productBlock.append(productImgBox);
            productBlock.append(productRightDiv);

            content.append(productBlock);

            document.body.append(content);
        }
    }
})(BillBoard);