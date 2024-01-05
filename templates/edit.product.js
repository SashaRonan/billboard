(function (app) {
    app.EditProduct = {
        draw: function (
            productID,
            productName,
            productDescription,
            productPrice,
            productImgSrc
        )
        {
            let productBlock = create_div('product_block_add');
            let productImgBox = create_div('product_img-box');
            let productImgDiv = create_div('product_img');
            let productImg = create_img('img_' + productID, productImgSrc);

            productImgDiv.append(productImg);
            productImgBox.append(productImgDiv);

            let productRightDiv = create_div('product_right_block');

            let productTopDiv = create_div('product_top_block');

            let productDescriptionBox = create_div('product_description-box_add')
            let productNameDescriptionBox = create_div('edit_description_box');
            let productNameBlock = create_input('edit_productName', 'productName_' + productID);
            productNameBlock.value = productName;

            let productDescriptionBlock = create_textarea('description_' + productID);
            productDescriptionBlock.value = productDescription;

            productNameDescriptionBox.append(productNameBlock);
            productNameDescriptionBox.append(productDescriptionBlock);
            productDescriptionBox.append(productNameDescriptionBox);

            let productPriceBlock = create_input('edit_price', 'price_' + productID);
            productPriceBlock.value = productPrice;

            productTopDiv.append(productDescriptionBox);
            productTopDiv.append(productPriceBlock);
            productRightDiv.append(productTopDiv);


            let productBottomDiv = create_div('edit_product_bottom_block');


            let inputFileLabel = create_label_forInput('change_img', 'product_change_' + productID, 'Загрузить');
            let inputFileButton = create_load_file_button('upload_button_input', 'product_change_' + productID,  loadPreviewImg);
            inputFileLabel.append(inputFileButton);


            let button_edit = create_button('edit_button', 'save_' + productID, 'Сохранить', saveUpdateProduct);
            let button_delete = create_button('edit_button', "del_" + productID, 'Удалить', deleteProduct);
            productBottomDiv.append(inputFileLabel);
            productBottomDiv.append(button_edit);
            productBottomDiv.append(button_delete);

            productRightDiv.append(productBottomDiv);
            productBlock.append(productImgBox);
            productBlock.append(productRightDiv);
            return productBlock;
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

    function create_input(className, id) {
        let input = document.createElement('input');
        input.classList.add(className);
        input.setAttribute('type', 'text');
        input.setAttribute('id', id);
        return input;
    }

    function create_textarea(id) {
        let textarea = document.createElement('textarea');
        textarea.classList.add('edit_description');
        textarea.setAttribute('id', id);
        textarea.setAttribute('cols', '50');
        textarea.setAttribute('rows', '5');
        return textarea;
    }

    function create_img(id, src) {
        let img = document.createElement("img");
        img.setAttribute('src', src);
        img.setAttribute('id', id);
        img.classList.add('upload_img_file');

        return img;
    }

    function create_label_forInput(labelClass, labelFor, text) {
        let label = document.createElement('label');
        label.classList.add(labelClass);
        label.setAttribute('for', labelFor);
        label.textContent = text;
        return label;
    }

    function create_load_file_button(inputFileClass, id, loadFunction) {
        let input = document.createElement('input');
        input.classList.add(inputFileClass);
        input.setAttribute('type', 'file');
        input.setAttribute('id', id);

        input.setAttribute('accept', 'image/*');
        input.setAttribute('onchange', loadFunction);
        input.addEventListener('change', loadFunction);
        return input;
    }

    function loadPreviewImg (event) {
        let getID = this.id.split('_')[2];
        let output = document.querySelector('#img_' + getID);
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function() {
            URL.revokeObjectURL(output.src)
        }
        return output.onload;
    }

    function create_button(buttonClass, id, text, clickFunction) {
        let button = document.createElement('button');
        button.classList.add(buttonClass);
        button.setAttribute('id', id);
        button.textContent = text;
        button.addEventListener("click", clickFunction);
        return button;
    }
})(AdsBoard);