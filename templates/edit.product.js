(function (app) {
    app.EditProduct = {  // Создание HTML формы для редактирования товара

        draw: function (
            productID,
            productName,
            productDescription,
            productPrice,
            productImgSrc
        ) {

            let productBlock                   = app.Create.div('product_block_add');

            let productImgBox                  = app.Create.div('product_img-box');
            let productImgDiv                  = app.Create.div('product_img');
            let productImg                   = BillBoard.Create.img('upload_img_file', 'img_' + productID, productImgSrc);

            let inputFileLabel               = BillBoard.Create.label('change_img', 'change_img_' + productID, 'product_change_' + productID, 'Загрузить');
            let inputFileButton              = BillBoard.Create.inputFile('upload_button_input', 'product_change_' + productID, BillBoard.Functions.loadPreviewEdit);

            inputFileLabel.append(inputFileButton);
            productImgDiv.append(productImg);
            productImgBox.append(productImgDiv);
            productImgBox.append(inputFileLabel);

            let productRightDiv               = BillBoard.Create.div('product_right_block');
            let productTopDiv                 = BillBoard.Create.div('product_top_block');
            let productDescriptionBox        = BillBoard.Create.div('product_description-box_add');
            let productNameDescriptionBox    = BillBoard.Create.div('edit_description_box');
            let productNameBlock             = BillBoard.Create.input('edit_productName', 'productName_' + productID, 'text', '');

            productNameBlock.value                             = productName;

            let productDescriptionBlock   = BillBoard.Create.textarea('edit_description', 'description_' + productID, '50', '5', '')

            productDescriptionBlock.value                      = productDescription;
            productNameDescriptionBox.append(productNameBlock);
            productNameDescriptionBox.append(productDescriptionBlock);
            productDescriptionBox.append(productNameDescriptionBox);

            let productPriceBlock             = BillBoard.Create.input('edit_price', 'price_' + productID, 'text', '');

            productPriceBlock.value                               = productPrice;
            productTopDiv.append(productDescriptionBox);
            productTopDiv.append(productPriceBlock);
            productRightDiv.append(productTopDiv);

            let productBottomDiv                = BillBoard.Create.div('edit_product_bottom_block');

            let button_edit                  = BillBoard.Create.buttonWithID('edit_button', 'save_' + productID, 'Сохранить', BillBoard.Functions.saveUpdateProduct)
            let button_delete                = BillBoard.Create.buttonWithID('edit_button', "del_" + productID, 'Удалить', BillBoard.Functions.deleteProduct)

            productBottomDiv.append(button_edit);
            productBottomDiv.append(button_delete);

            productRightDiv.append(productBottomDiv);
            productBlock.append(productImgBox);
            productBlock.append(productRightDiv);
            return productBlock;
        }
    }})(BillBoard);