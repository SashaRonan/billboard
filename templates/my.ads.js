(function (app) {
    app.MyAds = {
        draw: function (
            productID,
            editButtonID,
            deleteButtonID,
            productNameID,
            productDescriptionID,
            productPriceID,
            productImgID,
            productName,
            productDescription,
            productPrice,
            productImgSrc) {

            let content = create_div_withId("content_product_add container_login_header", productID)

            let productBlock = create_div('product_block_add');
            let productImgBox = create_div('product_img-box');
            let productImgDiv = create_div('product_img');
            let productImg = create_img(productImgID, productImgSrc);

            productImgDiv.append(productImg);
            productImgBox.append(productImgDiv);

            let productRightDiv = create_div('product_right_block');

            let productTopDiv = create_div('product_top_block');

            let productDescriptionBox = create_div('product_description-box_add')
            let productNameDescriptionBox = create_div('product_name-description-box');
            let productNameBlock = create_product_name('product_name', productNameID, productName);
            let productDescriptionBlock = create_product_description('product_description', productDescriptionID, productDescription)
            productNameDescriptionBox.append(productNameBlock);
            productNameDescriptionBox.append(productDescriptionBlock);
            productDescriptionBox.append(productNameDescriptionBox);

            let productPriceBlock = create_product_price('product_price', productPriceID, productPrice);

            productTopDiv.append(productDescriptionBox);
            productTopDiv.append(productPriceBlock);
            productRightDiv.append(productTopDiv);


            let productBottomDiv = create_div('product_bottom_block');

            let button_edit = create_button(editButtonID, 'Изменить', goToFormUpdateProduct);
            let button_delete = create_button(deleteButtonID, 'Удалить', deleteProduct);
            productBottomDiv.append(button_edit);
            productBottomDiv.append(button_delete);

            productRightDiv.append(productBottomDiv);
            productBlock.append(productImgBox);
            productBlock.append(productRightDiv);

            content.append(productBlock);

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

    function create_div_withId(divClass, id) {
        let div = document.createElement('div');
        let array = divClass.split(' ');
        for (let i = 0, length = array.length; i < length; i++) {
            div.classList.add(array[i]);
        }
        div.setAttribute('id', id);
        return div;
    }



    function create_img(id, src) {
        let img = document.createElement("img");
        img.setAttribute('id', id);
        img.setAttribute('src', src);
        img.classList.add('upload_img_file');
        return img;
    }

    function create_button(id, text, clickFunction) {
        let button = document.createElement('button');
        button.classList.add('product_button');
        button.setAttribute('id', id);
        button.textContent = text;
        button.addEventListener("click", clickFunction);
        return button;
    }

    function create_product_name(productNameClass, id, text) {
        let productName = document.createElement('h1');
        productName.classList.add(productNameClass);
        productName.textContent = text;
        productName.setAttribute('id', id);
        return productName;
    }

    function create_product_description(productDescriptionClass, id, text) {
        let productDescription = document.createElement('p');
        productDescription.classList.add(productDescriptionClass);
        productDescription.textContent = text;
        productDescription.setAttribute('id', id);
        return productDescription;
    }

    function create_product_price(productPriceClass, id, price) {
        let productPrice = document.createElement('div');
        productPrice.classList.add('product_price');
        productPrice.textContent = price + ' р.';
        productPrice.setAttribute('id', id);
        return productPrice;
    }
})(AdsBoard);