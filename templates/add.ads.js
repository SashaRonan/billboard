(function (app) {
    app.PageAddAds = {
        draw: function () {

            let content                      = AdsBoard.Create.div('content_add-ads');
            let addBlock                     = AdsBoard.Create.div('login_block_add');

            let inputNameBlock               = AdsBoard.Create.div('input_ads_block');
            let labelForName               = AdsBoard.Create.label('input_ads_label', 'input_ads_name', 'product_name', 'Название');
            let inputName                  = AdsBoard.Create.input('input_ads', 'product_name', 'text', 'Введите название вашего товара');

            inputNameBlock.append(labelForName);
            inputNameBlock.append(inputName);

            let inputDescriptionBlock        = AdsBoard.Create.div('input_ads_block');
            let labelForDescription        = AdsBoard.Create.label('input_ads_label', 'input_ads_description', 'product_description', 'Описание');
            let inputDescription        = AdsBoard.Create.textarea('input_ads_description', 'product_description', '50', '10', 'Введите описание вашего товара');

            inputDescriptionBlock.append(labelForDescription);
            inputDescriptionBlock.append(inputDescription);

            let inputPriceBlock              = AdsBoard.Create.div('input_ads_block');
            let labelForPrice              = AdsBoard.Create.label('input_ads_label', 'input_ads_price', 'product_price', 'Цена');
            let inputPrice                 = AdsBoard.Create.input('input_ads', 'product_price', 'number', 'Введите цену вашего товара');

            inputPriceBlock.append(labelForPrice);
            inputPriceBlock.append(inputPrice);

            let uploadFileBox                = AdsBoard.Create.div('upload_img-box');
            let uploadFileSaveBlock          = AdsBoard.Create.div('product-box_add');
            let uploadFileImg                = AdsBoard.Create.div('product_img');
            let uploadImgPreview           = AdsBoard.Create.img('upload_img_file_add', 'imgPreview', 'img/logo/loadImg.svg');

            uploadFileImg.append(uploadImgPreview);
            uploadFileSaveBlock.append(uploadFileImg);
            uploadFileBox.append(uploadFileSaveBlock);

            let inputFileLabel              = AdsBoard.Create.label('upload_button', 'upload_button', 'file_upload', 'Загрузить');
            let inputFileButton             = AdsBoard.Create.inputFile('upload_button_input', 'file_upload', AdsBoard.Functions.loadPreviewAdd);

            inputFileLabel.append(inputFileButton);
            uploadFileSaveBlock.append(inputFileLabel)

            let saveFileButton             = AdsBoard.Create.button('product_button upload_save_button', 'Сохранить', AdsBoard.Functions.addMyProduct)

            uploadFileBox.append(saveFileButton);
            addBlock.append(inputNameBlock);
            addBlock.append(inputDescriptionBlock);
            addBlock.append(inputPriceBlock);
            addBlock.append(uploadFileBox);
            content.append(addBlock);

            document.body.append(content);
        }
    }
})(AdsBoard);