(function (app) {
    app.MyAds = {
        draw: function (
            productID,
            productName,
            productDescription,
            productPrice,
            productImgSrc) {

            let content                     = BillBoard.Create.divWithID("content_product_add", "product_" + productID)

            let productBlock                = BillBoard.Create.div('product_block_add');

            let productImgBox               = BillBoard.Create.div('product_img-box');
            let productImgDiv               = BillBoard.Create.div('product_img');
            let productImg                = BillBoard.Create.img('upload_img_file', "img_" + productID, productImgSrc);

            productImgDiv.append(productImg);
            productImgBox.append(productImgDiv);

            let productRightDiv              = BillBoard.Create.div('product_right_block');

            let productTopDiv                = BillBoard.Create.div('product_top_block');

            let productDescriptionBox        = BillBoard.Create.div('product_description-box_add')
            let productNameDescriptionBox    = BillBoard.Create.div('product_name-description-box');
            let productNameBlock         = BillBoard.Create.header('product_name', "productName_" + productID, productName);
            let productDescriptionBlock = BillBoard.Create.paragraph('product_description', "description_" + productID, productDescription)

            productNameDescriptionBox.append(productNameBlock);
            productNameDescriptionBox.append(productDescriptionBlock);
            productDescriptionBox.append(productNameDescriptionBox);

            let productPriceBlock             = BillBoard.Create.divWithID('product_price', "price_" + productID);
            productPriceBlock.textContent = productPrice + ' р.';

            productTopDiv.append(productDescriptionBox);
            productTopDiv.append(productPriceBlock);
            productRightDiv.append(productTopDiv);

            let productBottomDiv              = BillBoard.Create.div('product_bottom_block');

            let button_edit                = BillBoard.Create.buttonWithID('product_button_my_ads',"edit_" + productID, 'Изменить', BillBoard.Functions.goToFormUpdateProduct);
            let button_delete              = BillBoard.Create.buttonWithID('product_button_my_ads',"del_" + productID, 'Удалить', BillBoard.Functions.deleteProduct);

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