(function (app) {
    app.ProductList = { // Создание HTML страницы с полным списком товаров (основная страница, после авторизации)

        draw: function (
            productID,
            userName,
            userPhoneNumber,
            productName,
            productDescription,
            productPrice,
            productImgSrc) {

            let content                              = app.Create.div("content_product")

            let productBlock                         = app.Create.div('product_block');

            let productImgBox                        = app.Create.div('product_img-box');
            let productImgDiv                        = app.Create.div('product_img');
            let productImg                         = app.Create.img('upload_img_file', 'img_' + productID, productImgSrc);
            let userPhoneBtn                      = app.Create.buttonWithID('product_button', "buttonID_" + productID, "Показать телефон", app.Functions.show_hide_phone)
            let userPhoneShow                  = app.Create.paragraph('user_phone_class', 'userPhone_'+ productID, userPhoneNumber)

            userPhoneShow.addEventListener("click", app.Functions.show_hide_phone);

            productImgDiv.append(productImg);
            productImgBox.append(productImgDiv);
            productImgBox.append(userPhoneBtn);
            productImgBox.append(userPhoneShow);

            let productDescriptionBox                 = app.Create.div('product_description-box')
            let productNameDescriptionBox             = app.Create.div('product_name-description-box');
            let productNameBlock                     = app.Create.header ('product_name','product_name_'+ productID, productName);
            let productDescriptionBlock              = app.Create.paragraph('product_description','description_'+ productID,  productDescription);

            productNameDescriptionBox.append(productNameBlock);
            productNameDescriptionBox.append(productDescriptionBlock);

            let userNameBlock                        = app.Create.paragraph('user_name','userNameOf_'+ productID, 'Продавец: ' + userName);

            productDescriptionBox.append(productNameDescriptionBox);
            productDescriptionBox.append(userNameBlock);

            let productPriceBlock                    = app.Create.div ('product_price');
            productPriceBlock.textContent            = productPrice + ' р.'

            productBlock.append(productImgBox);
            productBlock.append(productDescriptionBox);
            productBlock.append(productPriceBlock);

            content.append(productBlock);

            document.body.append(content);
        }
    }

})(BillBoard);



