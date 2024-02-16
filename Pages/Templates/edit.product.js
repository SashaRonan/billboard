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
            let productImg                   = app.Create.img('upload_img_file', 'img_' + productID, productImgSrc);

            let inputFileLabel               = app.Create.label('change_img', 'change_img_' + productID, 'product_change_' + productID, 'Загрузить');
            let inputFileButton              = app.Create.inputFile('upload_button_input', 'product_change_' + productID, app.EditProduct.loadPreviewEdit);

            inputFileLabel.append(inputFileButton);
            productImgDiv.append(productImg);
            productImgBox.append(productImgDiv);
            productImgBox.append(inputFileLabel);

            let productRightDiv               = app.Create.div('product_right_block');
            let productTopDiv                 = app.Create.div('product_top_block');
            let productDescriptionBox        = app.Create.div('product_description-box_add');
            let productNameDescriptionBox    = app.Create.div('edit_description_box');
            let productNameBlock             = app.Create.input('edit_productName', 'productName_' + productID, 'text', '');

            productNameBlock.value                             = productName;

            let productDescriptionBlock   = app.Create.textarea('edit_description', 'description_' + productID, '50', '5', '')

            productDescriptionBlock.value                      = productDescription;
            productNameDescriptionBox.append(productNameBlock);
            productNameDescriptionBox.append(productDescriptionBlock);
            productDescriptionBox.append(productNameDescriptionBox);

            let productPriceBlock             = app.Create.input('edit_price', 'price_' + productID, 'text', '');

            productPriceBlock.value                               = productPrice;
            productTopDiv.append(productDescriptionBox);
            productTopDiv.append(productPriceBlock);
            productRightDiv.append(productTopDiv);

            let productBottomDiv                = app.Create.div('edit_product_bottom_block');

            let button_edit                  = app.Create.buttonWithID('edit_button', 'save_' + productID, 'Сохранить', app.Product.saveUpdateProduct)
            let button_delete                = app.Create.buttonWithID('edit_button', "del_" + productID, 'Удалить', app.Product.deleteProduct)

            productBottomDiv.append(button_edit);
            productBottomDiv.append(button_delete);

            productRightDiv.append(productBottomDiv);
            productBlock.append(productImgBox);
            productBlock.append(productRightDiv);
            return productBlock;
        },

        // Загрузка изображения при редактировании нового товара
        loadPreviewEdit: function () {
            let getID = this.id.split('_')[2];
            let output = document.querySelector('#img_' + getID);
            output.src = URL.createObjectURL(event.target.files[0]);
            output.onload = function () {
                URL.revokeObjectURL(output.src)
            }
            return output.onload;
        },
    }})(BillBoard);