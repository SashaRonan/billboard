(function (app) {
    app.EditProduct = {  // Создание HTML формы для редактирования товара

        draw: function (
            productID,
            productName,
            productDescription,
            productPrice,
            productImgSrc
        )
        {

            const imgID               = 'img_' + productID;
            const changeImgID         = 'change_img_' + productID;
            const productChangeID     = 'product_change_' + productID;
            const productNameID       = 'productName_' + productID;
            const descriptionID       = 'description_' + productID;
            const priceID             = 'price_' + productID;
            const saveID              = 'save_' + productID;
            const delID               = "del_" + productID;


            let productBlock                 = app.Create.div('product_block_add');

            let productImgBox                = app.Create.div('product_img-box');
            let productImgDiv                = app.Create.div('product_img');
            let productImg                   = app.Create.img('upload_img_file', imgID, productImgSrc);

            let inputFileLabel               = app.Create.label('change_img', changeImgID, productChangeID, 'Загрузить');
            let inputFileButton              = app.Create.inputFile('upload_button_input', productChangeID, app.EditProduct.loadPreviewEdit);

            inputFileLabel.append(inputFileButton);
            productImgDiv.append(productImg);
            productImgBox.append(productImgDiv);
            productImgBox.append(inputFileLabel);

            let productRightDiv              = app.Create.div('product_right_block');
            let productTopDiv                = app.Create.div('product_top_block');
            let productDescriptionBox        = app.Create.div('product_description-box_add');
            let productNameDescriptionBox    = app.Create.div('edit_description_box');
            let productNameBlock             = app.Create.input('edit_productName', productNameID, 'text', '');

            productNameBlock.value           = productName;

            let productDescriptionBlock      = app.Create.textarea('edit_description', descriptionID, '50', '5', '')

            productDescriptionBlock.value    = productDescription;
            productNameDescriptionBox.append(productNameBlock);
            productNameDescriptionBox.append(productDescriptionBlock);
            productDescriptionBox.append(productNameDescriptionBox);

            let productPriceBlock            = app.Create.input('edit_price', priceID, 'text', '');

            productPriceBlock.value          = productPrice;
            productTopDiv.append(productDescriptionBox);
            productTopDiv.append(productPriceBlock);
            productRightDiv.append(productTopDiv);

            let productBottomDiv             = app.Create.div('edit_product_bottom_block');

            let button_edit                  = app.Create.buttonWithID('edit_button', saveID, 'Сохранить', app.Product.saveUpdateProduct)
            let button_delete                = app.Create.buttonWithID('edit_button', delID, 'Удалить', app.Product.deleteProduct)

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
            let imgID = '#img_' + getID
            let output = document.querySelector(imgID);
            output.src = URL.createObjectURL(event.target.files[0]);
            output.onload = function () {
                URL.revokeObjectURL(output.src)
            }
            return output.onload;
        },
    }})(BillBoard);