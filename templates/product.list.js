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

            let content                              = BillBoard.Create.div("content_product")

            let productBlock                         = BillBoard.Create.div('product_block');

            let productImgBox                        = BillBoard.Create.div('product_img-box');
            let productImgDiv                        = BillBoard.Create.div('product_img');
            let productImg                           = BillBoard.Create.img('upload_img_file', 'img_' + productID, productImgSrc);
            let userPhoneBtn                         = BillBoard.Create.buttonWithID('product_button', "buttonID_" + productID, "Показать телефон", BillBoard.Functions.show_hide_phone)
            let userPhoneShow                        = BillBoard.Create.paragraph('user_phone_class', 'userPhone_'+ productID, userPhoneNumber)

            userPhoneShow.addEventListener("click", BillBoard.Functions.show_hide_phone);

            productImgDiv.append(productImg);
            productImgBox.append(productImgDiv);
            productImgBox.append(userPhoneBtn);
            productImgBox.append(userPhoneShow);

            let productDescriptionBox                 = BillBoard.Create.div('product_description-box')
            let productNameDescriptionBox             = BillBoard.Create.div('product_name-description-box');
            let productNameBlock                      = BillBoard.Create.header ('product_name','product_name_'+ productID, productName);
            let productDescriptionBlock               = BillBoard.Create.paragraph('product_description','description_'+ productID,  productDescription);

            productNameDescriptionBox.append(productNameBlock);
            productNameDescriptionBox.append(productDescriptionBlock);

            let userNameBlock                        = BillBoard.Create.paragraph('user_name','userNameOf_'+ productID, 'Продавец: ' + userName);

            productDescriptionBox.append(productNameDescriptionBox);
            productDescriptionBox.append(userNameBlock);

            let productPriceBlock                    = BillBoard.Create.div ('product_price');
            productPriceBlock.textContent            = productPrice + ' р.'

            productBlock.append(productImgBox);
            productBlock.append(productDescriptionBox);
            productBlock.append(productPriceBlock);

            content.append(productBlock);

            document.body.append(content);
        }
    }

})(BillBoard);