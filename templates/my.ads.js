(function (app) {
    app.MyAds = {
        draw: function (
            productID,
            productName,
            productDescription,
            productPrice,
            productImgSrc) {

            let content                     = AdsBoard.Create.divWithID("content_product_add", "product_" + productID)

            let productBlock                = AdsBoard.Create.div('product_block_add');

            let productImgBox               = AdsBoard.Create.div('product_img-box');
            let productImgDiv               = AdsBoard.Create.div('product_img');
            let productImg                = AdsBoard.Create.img('upload_img_file', "img_" + productID, productImgSrc);

            productImgDiv.append(productImg);
            productImgBox.append(productImgDiv);

            let productRightDiv              = AdsBoard.Create.div('product_right_block');

            let productTopDiv                = AdsBoard.Create.div('product_top_block');

            let productDescriptionBox        = AdsBoard.Create.div('product_description-box_add')
            let productNameDescriptionBox    = AdsBoard.Create.div('product_name-description-box');
            let productNameBlock         = AdsBoard.Create.header('product_name', "productName_" + productID, productName);
            let productDescriptionBlock = AdsBoard.Create.paragraph('product_description', "description_" + productID, productDescription)

            productNameDescriptionBox.append(productNameBlock);
            productNameDescriptionBox.append(productDescriptionBlock);
            productDescriptionBox.append(productNameDescriptionBox);

            let productPriceBlock             = AdsBoard.Create.divWithID('product_price', "price_" + productID);
            productPriceBlock.textContent = productPrice + ' р.';

            productTopDiv.append(productDescriptionBox);
            productTopDiv.append(productPriceBlock);
            productRightDiv.append(productTopDiv);

            let productBottomDiv              = AdsBoard.Create.div('product_bottom_block');

            let button_edit                = AdsBoard.Create.buttonWithID('product_button_my_ads',"edit_" + productID, 'Изменить', AdsBoard.Functions.goToFormUpdateProduct);
            let button_delete              = AdsBoard.Create.buttonWithID('product_button_my_ads',"del_" + productID, 'Удалить', AdsBoard.Functions.deleteProduct);

            productBottomDiv.append(button_edit);
            productBottomDiv.append(button_delete);

            productRightDiv.append(productBottomDiv);
            productBlock.append(productImgBox);
            productBlock.append(productRightDiv);

            content.append(productBlock);

            document.body.append(content);
        }
    }
})(AdsBoard);