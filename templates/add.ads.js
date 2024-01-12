(function (app) {
    app.PageAddAds = { // Создание HTML страницы добавления товара
        draw: function () {

            let content                      = BillBoard.Create.div('content_add-ads');
            let addBlock                     = BillBoard.Create.div('login_block_add');

            let inputNameBlock               = BillBoard.Create.div('input_ads_block');
            let labelForName                 = BillBoard.Create.label('input_ads_label', 'input_ads_name', 'product_name', 'Название');
            let inputName                    = BillBoard.Create.input('input_ads', 'product_name', 'text', 'Введите название вашего товара');

            inputNameBlock.append(labelForName);
            inputNameBlock.append(inputName);

            let inputDescriptionBlock        = BillBoard.Create.div('input_ads_block');
            let labelForDescription          = BillBoard.Create.label('input_ads_label', 'input_ads_description', 'product_description', 'Описание');
            let inputDescription             = BillBoard.Create.textarea('input_ads_description', 'product_description', '50', '10', 'Введите описание вашего товара');

            inputDescriptionBlock.append(labelForDescription);
            inputDescriptionBlock.append(inputDescription);

            let inputPriceBlock              = BillBoard.Create.div('input_ads_block');
            let labelForPrice                = BillBoard.Create.label('input_ads_label', 'input_ads_price', 'product_price', 'Цена');
            let inputPrice                   = BillBoard.Create.input('input_ads', 'product_price', 'number', 'Введите цену вашего товара');

            inputPriceBlock.append(labelForPrice);
            inputPriceBlock.append(inputPrice);

            let uploadFileBox                = BillBoard.Create.div('upload_img-box');
            let uploadFileSaveBlock          = BillBoard.Create.div('product-box_add');
            let uploadFileImg                = BillBoard.Create.div('product_img');
            let uploadImgPreview             = BillBoard.Create.img('upload_img_file_add', 'imgPreview', 'img/logo/loadImg.png');

            uploadFileImg.append(uploadImgPreview);
            uploadFileSaveBlock.append(uploadFileImg);
            uploadFileBox.append(uploadFileSaveBlock);

            let inputFileLabel              = BillBoard.Create.label('upload_button', 'upload_button', 'file_upload', 'Загрузить');
            let inputFileButton             = BillBoard.Create.inputFile('upload_button_input', 'file_upload', BillBoard.Functions.loadPreviewAdd);

            inputFileLabel.append(inputFileButton);
            uploadFileSaveBlock.append(inputFileLabel)

            let saveFileButton             = BillBoard.Create.button('product_button upload_save_button', 'Сохранить', BillBoard.Functions.addMyProduct)

            uploadFileBox.append(saveFileButton);
            addBlock.append(inputNameBlock);
            addBlock.append(inputDescriptionBlock);
            addBlock.append(inputPriceBlock);
            addBlock.append(uploadFileBox);
            content.append(addBlock);

            document.body.append(content);
        }
    }
})(BillBoard);