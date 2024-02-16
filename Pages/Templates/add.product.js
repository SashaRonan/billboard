(function (app) {
    app.PageAddAds = { // Создание HTML страницы добавления товара
        draw: function () {

            let content                      = app.Create.div('content_add-ads');
            let addBlock                     = app.Create.div('login_block_add');

            let inputNameBlock               = app.Create.div('input_ads_block');
            let labelForName                 = app.Create.label('input_ads_label', 'input_ads_name', 'product_name', 'Название');
            let inputName                    = app.Create.input('input_ads', 'product_name', 'text', 'Введите название вашего товара');

            inputNameBlock.append(labelForName);
            inputNameBlock.append(inputName);

            let inputDescriptionBlock        = app.Create.div('input_ads_block');
            let labelForDescription          = app.Create.label('input_ads_label', 'input_ads_description', 'product_description', 'Описание');
            let inputDescription             = app.Create.textarea('input_ads_description', 'product_description', '50', '10', 'Введите описание вашего товара');

            inputDescriptionBlock.append(labelForDescription);
            inputDescriptionBlock.append(inputDescription);

            let inputPriceBlock              = app.Create.div('input_ads_block');
            let labelForPrice                = app.Create.label('input_ads_label', 'input_ads_price', 'product_price', 'Цена');
            let inputPrice                   = app.Create.input('input_ads', 'product_price', 'number', 'Введите цену вашего товара');

            inputPriceBlock.append(labelForPrice);
            inputPriceBlock.append(inputPrice);

            let uploadFileBox                = app.Create.div('upload_img-box');
            let uploadFileSaveBlock          = app.Create.div('product-box_add');
            let uploadFileImg                = app.Create.div('product_img');
            let uploadImgPreview             = app.Create.img('upload_img_file_add', 'imgPreview', 'img/logo/loadImg.png');

            uploadFileImg.append(uploadImgPreview);
            uploadFileSaveBlock.append(uploadFileImg);
            uploadFileBox.append(uploadFileSaveBlock);

            let inputFileLabel               = app.Create.label('upload_button', 'upload_button', 'file_upload', 'Загрузить');
            let inputFileButton              = app.Create.inputFile('upload_button_input', 'file_upload', app.PageAddAds.loadPreviewAdd);

            inputFileLabel.append(inputFileButton);
            uploadFileSaveBlock.append(inputFileLabel)

            let saveFileButton               = app.Create.button('product_button upload_save_button', 'Сохранить', app.Product.addMyProduct)

            uploadFileBox.append(saveFileButton);
            addBlock.append(inputNameBlock);
            addBlock.append(inputDescriptionBlock);
            addBlock.append(inputPriceBlock);
            addBlock.append(uploadFileBox);
            content.append(addBlock);

            document.body.append(content);
        },

        // Загрузка превьюшки изображения при добавлении нового товара
        loadPreviewAdd: function (event) {
            let output = document.getElementById('imgPreview');
            output.src = URL.createObjectURL(event.target.files[0]);
            output.onload = function () {
                URL.revokeObjectURL(output.src) // очистка
            }
            return output.onload;
        }
    }
})(BillBoard);