(function (app) {
    app.EditProduct = {
        draw: function (
            productID,
            productName,
            productDescription,
            productPrice,
            productImgSrc
        ) {

            let productBlock                   = AdsBoard.Create.div('product_block_add');

            let productImgBox                  = AdsBoard.Create.div('product_img-box');
            let productImgDiv                  = AdsBoard.Create.div('product_img');
            let productImg                   = AdsBoard.Create.img('upload_img_file', 'img_' + productID, productImgSrc);

            let inputFileLabel               = AdsBoard.Create.label('change_img', 'change_img_' + productID, 'product_change_' + productID, 'Загрузить');
            let inputFileButton              = AdsBoard.Create.inputFile('upload_button_input', 'product_change_' + productID, AdsBoard.Functions.loadPreviewEdit);

            inputFileLabel.append(inputFileButton);
            productImgDiv.append(productImg);
            productImgBox.append(productImgDiv);
            productImgBox.append(inputFileLabel);

            let productRightDiv               = AdsBoard.Create.div('product_right_block');
            let productTopDiv                 = AdsBoard.Create.div('product_top_block');
            let productDescriptionBox        = AdsBoard.Create.div('product_description-box_add');
            let productNameDescriptionBox    = AdsBoard.Create.div('edit_description_box');
            let productNameBlock             = AdsBoard.Create.input('edit_productName', 'productName_' + productID, 'text', '');

            productNameBlock.value                             = productName;

            let productDescriptionBlock   = AdsBoard.Create.textarea('edit_description', 'description_' + productID, '50', '5', '')

            productDescriptionBlock.value                      = productDescription;
            productNameDescriptionBox.append(productNameBlock);
            productNameDescriptionBox.append(productDescriptionBlock);
            productDescriptionBox.append(productNameDescriptionBox);

            let productPriceBlock             = AdsBoard.Create.input('edit_price', 'price_' + productID, 'text', '');

            productPriceBlock.value                               = productPrice;
            productTopDiv.append(productDescriptionBox);
            productTopDiv.append(productPriceBlock);
            productRightDiv.append(productTopDiv);

            let productBottomDiv                = AdsBoard.Create.div('edit_product_bottom_block');

            let button_edit                  = AdsBoard.Create.buttonWithID('edit_button', 'save_' + productID, 'Сохранить', AdsBoard.Functions.saveUpdateProduct)
            let button_delete                = AdsBoard.Create.buttonWithID('edit_button', "del_" + productID, 'Удалить', AdsBoard.Functions.deleteProduct)

            productBottomDiv.append(button_edit);
            productBottomDiv.append(button_delete);

            productRightDiv.append(productBottomDiv);
            productBlock.append(productImgBox);
            productBlock.append(productRightDiv);
            return productBlock;
        }
    }})(AdsBoard);