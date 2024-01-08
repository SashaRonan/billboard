(function (app) {
    app.ProductList = {
        draw: function (
            productID,
            userName,
            userPhoneNumber,
            productName,
            productDescription,
            productPrice,
            productImgSrc) {

            let content                              = AdsBoard.Create.div("content_product")

            let productBlock                         = AdsBoard.Create.div('product_block');

            let productImgBox                        = AdsBoard.Create.div('product_img-box');
            let productImgDiv                        = AdsBoard.Create.div('product_img');
            let productImg                           = AdsBoard.Create.img('upload_img_file', 'img_' + productID, productImgSrc);
            let userPhoneBtn                         = AdsBoard.Create.buttonWithID('product_button', "buttonID_" + productID, "Показать телефон", AdsBoard.Functions.show_hide_phone)
            let userPhoneShow                        = AdsBoard.Create.paragraph('user_phone_class', 'userPhone_'+ productID, userPhoneNumber)

            userPhoneShow.addEventListener("click", AdsBoard.Functions.show_hide_phone);

            productImgDiv.append(productImg);
            productImgBox.append(productImgDiv);
            productImgBox.append(userPhoneBtn);
            productImgBox.append(userPhoneShow);

            let productDescriptionBox                 = AdsBoard.Create.div('product_description-box')
            let productNameDescriptionBox             = AdsBoard.Create.div('product_name-description-box');
            let productNameBlock                      = AdsBoard.Create.header ('product_name','product_name_'+ productID, productName);
            let productDescriptionBlock               = AdsBoard.Create.paragraph('product_description','description_'+ productID,  productDescription);

            productNameDescriptionBox.append(productNameBlock);
            productNameDescriptionBox.append(productDescriptionBlock);

            let userNameBlock                        = AdsBoard.Create.paragraph('user_name','userNameOf_'+ productID, 'Продавец: ' + userName);

            productDescriptionBox.append(productNameDescriptionBox);
            productDescriptionBox.append(userNameBlock);

            let productPriceBlock                    = AdsBoard.Create.div ('product_price');
            productPriceBlock.textContent            = productPrice + ' р.'

            productBlock.append(productImgBox);
            productBlock.append(productDescriptionBox);
            productBlock.append(productPriceBlock);

            content.append(productBlock);

            document.body.append(content);
        }
    }

})(AdsBoard);