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

            const imgID = 'img_' + productID;
            const productButtonID = "buttonID_" + productID;
            const userPhoneID = 'userPhone_'+ productID;
            const productNameID ='product_name_'+ productID;
            const descriptionID = 'description_'+ productID;
            const userNameID = 'userNameOf_'+ productID;


            let content                              = app.Create.div("content_product")

            let productBlock                         = app.Create.div('product_block');

            let productImgBox                        = app.Create.div('product_img-box');
            let productImgDiv                        = app.Create.div('product_img');
            let productImg                           = app.Create.img('upload_img_file', imgID, productImgSrc);
            let userPhoneBtn                         = app.Create.buttonWithID('product_button', productButtonID, "Показать телефон", app.ProductList.show_hide_phone)
            let userPhoneShow                        = app.Create.paragraph('user_phone_class', userPhoneID, userPhoneNumber)

            userPhoneShow.addEventListener("click", app.ProductList.show_hide_phone);

            productImgDiv.append(productImg);
            productImgBox.append(productImgDiv);
            productImgBox.append(userPhoneBtn);
            productImgBox.append(userPhoneShow);

            let productDescriptionBox                 = app.Create.div('product_description-box')
            let productNameDescriptionBox             = app.Create.div('product_name-description-box');
            let productNameBlock                      = app.Create.header ('product_name', productNameID, productName);
            let productDescriptionBlock               = app.Create.paragraph('product_description', descriptionID,  productDescription);

            productNameDescriptionBox.append(productNameBlock);
            productNameDescriptionBox.append(productDescriptionBlock);

            let userNameBlock                         = app.Create.paragraph('user_name', userNameID, 'Продавец: ' + userName);

            productDescriptionBox.append(productNameDescriptionBox);
            productDescriptionBox.append(userNameBlock);

            let productPriceBlock                     = app.Create.div ('product_price');
            productPriceBlock.textContent             = productPrice + ' р.'

            productBlock.append(productImgBox);
            productBlock.append(productDescriptionBox);
            productBlock.append(productPriceBlock);

            content.append(productBlock);

            document.body.append(content);
        },

        // Показать-скрыть телефон
        show_hide_phone: function () {

            let numID = this.id.split('_')[1];
            const buttonID = '#buttonID_' + numID;
            const userPhoneID = '#userPhone_' + numID;
            let button = document.querySelector(buttonID);
            let phone = document.querySelector(userPhoneID);

            let phoneDisplay = phone.style.display;

            if (phoneDisplay === 'none') {
                button.style.display = 'none';
                phone.style.display = 'inline-flex'
            } else if (phoneDisplay === '') {
                button.style.display = 'none';
                phone.style.display = 'inline-flex'
            } else {
                button.style.display = 'block';
                phone.style.display = 'none';
            }
        },
    }

})(BillBoard);



