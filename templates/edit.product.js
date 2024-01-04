(function (app) {
    app.EditProduct = {
        draw: function (
            saveButtonId,
            deleteButtonId,
            productNameID,
            productDescriptionID,
            productPriceID,
            productName,
            productDescription,
            productPrice,
            productImgSrc) {

            // let content = create_div("content_product_add container_login_header")

            let productBlock = create_div('product_block_add');
            let productImgBox = create_div('product_img-box');
            let productImgDiv = create_div('product_img');
            let productImg = create_img(productImgSrc);

            productImgDiv.append(productImg);
            productImgBox.append(productImgDiv);

            let productRightDiv = create_div('product_right_block');

            let productTopDiv = create_div('product_top_block');

            let productDescriptionBox = create_div('product_description-box_add')
            let productNameDescriptionBox = create_div('edit_description_box');
            let productNameBlock = create_input('edit_productName', productNameID);
            productNameBlock.value = productName;

            let productDescriptionBlock = create_textarea(productDescriptionID);
            productDescriptionBlock.value = productDescription;

            productNameDescriptionBox.append(productNameBlock);
            productNameDescriptionBox.append(productDescriptionBlock);
            productDescriptionBox.append(productNameDescriptionBox);

            let productPriceBlock = create_input('edit_price', productPriceID);
            productPriceBlock.value = productPrice;

            productTopDiv.append(productDescriptionBox);
            productTopDiv.append(productPriceBlock);
            productRightDiv.append(productTopDiv);


            let productBottomDiv = create_div('product_bottom_block');

            let button_edit = create_button(saveButtonId, 'Сохранить');
            let button_delete = create_button(deleteButtonId, 'Удалить');
            productBottomDiv.append(button_edit);
            productBottomDiv.append(button_delete);

            productRightDiv.append(productBottomDiv);
            productBlock.append(productImgBox);
            productBlock.append(productRightDiv);
            return productBlock;
            // content.append(productBlock);

            // document.body.append(productBlock);
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

    function create_img(src) {
        let img = document.createElement("img");
        img.setAttribute('src', src);
        img.classList.add('upload_img_file');
        return img;
    }

    function create_button(id, text, clickFunction) {
        let button = document.createElement('button');
        button.classList.add('product_button');
        button.setAttribute('id', id);
        button.textContent = text;
        // button.addEventListener("click", clickFunction);
        return button;
    }

})(AdsBoard);