(function (app) {
    app.PageAddAds = {
        draw: function () {


            let content = create_div('content_add-ads');
            let addBlock = create_div('login_block_add');

            let inputNameBlock = create_div('input_ads_block');
            let labelForName = create_label_forInput('input_ads_label', 'product_name', 'Название');
            let inputName = create_input('input_ads', 'text', 'product_name', 'product_name', 'Введите название вашего товара');
            inputNameBlock.append(labelForName);
            inputNameBlock.append(inputName);

            let inputDescriptionBlock = create_div('input_ads_block');
            let labelForDescription = create_label_forInput('input_ads_label', 'product_description', 'Описание');
            let inputDescription = create_textarea('input_ads_description', 'product_description', '50', '10', 'product_description', 'Введите описание вашего товара')
            inputDescriptionBlock.append(labelForDescription);
            inputDescriptionBlock.append(inputDescription);

            let inputPriceBlock = create_div('input_ads_block');
            let labelForPrice = create_label_forInput('input_ads_label', 'product_price', 'Цена');
            let inputPrice = create_input('input_ads', 'number', 'product_price', 'product_price', 'Введите цену вашего товара');
            inputPriceBlock.append(labelForPrice);
            inputPriceBlock.append(inputPrice);

            let uploadFileBox = create_div('upload_img-box');

            let uploadFileSaveBlock = create_div('product_img-box')
            let uploadFileImg = create_div('product_img');
            let uploadImgPreview = create_img('upload_img_file', 'imgPreview');

            let saveFileButton = create_button('Сохранить', addMyProduct);

            uploadFileImg.append(uploadImgPreview)
            uploadFileSaveBlock.append(uploadFileImg);
            uploadFileSaveBlock.append(saveFileButton);
            uploadFileBox.append(uploadFileSaveBlock);

            let inputFileBox = create_div('upload_button_box');

            let inputFileLabel = create_label_forInput('upload_button', 'file_upload', 'Загрузить');
            let inputFileButton = create_load_file_button('upload_button_input', 'file_upload', 'file_name', loadPreviewImg);
            inputFileLabel.append(inputFileButton);
            inputFileBox.append(inputFileLabel);
            uploadFileBox.append(inputFileBox);

            addBlock.append(inputNameBlock);
            addBlock.append(inputDescriptionBlock);
            addBlock.append(inputPriceBlock);
            addBlock.append(uploadFileBox);

            // content.append(inputNameBlock);
            // content.append(inputDescriptionBlock);
            // content.append(inputPriceBlock);
            // content.append(uploadFileBox);
            content.append(addBlock);

            document.body.append(content);

        }
    }


    function create_div(divClass) {
        let content = document.createElement('div');
        let array = divClass.split(' ');
        for (let i = 0, length = array.length; i < length; i++) {
            content.classList.add(array[i]);
        }
        return content;
    }

    function create_input(inputClass, type, id, name, placeholder) {
        let input = document.createElement('input');
        input.classList.add(inputClass);
        input.setAttribute('type', type);
        input.setAttribute('id', id);
        input.setAttribute('name', name);
        input.setAttribute('placeholder', placeholder);
        return input;
    }

    function create_load_file_button(inputFileClass, id, name, loadFunction) {
        let input = document.createElement('input');
        input.classList.add(inputFileClass);
        input.setAttribute('type', 'file');
        input.setAttribute('id', id);
        input.setAttribute('name', name);
        input.setAttribute('accept', 'image/*');
        input.setAttribute('onchange', loadFunction);
        input.addEventListener('change', loadFunction);
        return input;
    }

    function create_img(uploadImgFileClass, id) {
        let img = document.createElement('img');
        img.setAttribute('id', id);
        // input.classList.add(inputFileClass);
        img.classList.add(uploadImgFileClass);
        return img;
    }

    function loadPreviewImg(event) {
        let output = document.getElementById('imgPreview');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
            URL.revokeObjectURL(output.src) // free memory
        }
        return output.onload;
    }

    function create_textarea(textareaClass, id, cols, rows, name, placeholder) {
        let textarea = document.createElement('textarea');
        textarea.classList.add(textareaClass);
        textarea.setAttribute('id', id);
        textarea.setAttribute('cols', cols);
        textarea.setAttribute('rows', rows);
        textarea.setAttribute('name', name);
        textarea.setAttribute('placeholder', placeholder);

        return textarea;
    }

    function create_label_forInput(labelClass, labelFor, text) {
        let label = document.createElement('label');
        label.classList.add(labelClass);
        // label.setAttribute('id', labelID);
        label.setAttribute('for', labelFor);
        label.textContent = text;
        return label;
    }

    function create_button(text, clickFunction) {
        let button = document.createElement('button');
        button.classList.add('product_button');
        button.textContent = text;
        button.addEventListener("click", clickFunction);
        return button;
    }


})(AdsBoard);