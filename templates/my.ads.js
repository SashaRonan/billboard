(function (app) {
    app.MyAds = {
        draw: function (productName, productDescription, productPrice) {

            let content                     = create_div ("content_product container_login_header")

            let productBlock                  = create_div ('product_block');
            let productImgBox                 = create_div ('product_img-box');
            let productImg                    = create_div ('product_img');
            productImgBox.append(productImg);

            let productRightDiv = create_div('product_right_block');

            let productTopDiv = create_div('product_top_block');

            let productDescriptionBox          = create_div ('product_description-box')
            let productNameDescriptionBox      = create_div ('product_name-description-box');
            let productNameBlock           = create_product_name ('product_name', productName);
            let productDescriptionBlock   = create_product_description ('product_description', productDescription)
            productNameDescriptionBox.append(productNameBlock);
            productNameDescriptionBox.append(productDescriptionBlock);
            productDescriptionBox.append(productNameDescriptionBox);

            let productPriceBlock               = create_product_price ('product_price', productPrice);

            productTopDiv.append(productDescriptionBox);
            productTopDiv.append(productPriceBlock);
            productRightDiv.append(productTopDiv);


            let productBottomDiv = create_div('product_bottom_block');

            let button_edit = create_button('edit_button_1', 'Изменить');
            let button_delete = create_button('delete_button_1', 'Удалить');
            productBottomDiv.append(button_edit);
            productBottomDiv.append(button_delete);

            productRightDiv.append(productBottomDiv);
            productBlock.append(productImgBox);
            productBlock.append(productRightDiv);

            content.append(productBlock);

            document.body.append(content);
        }
    }

    function create_div (divClass) {
        let content = document.createElement('div');
        let array = divClass.split(' ');
        for (let i = 0, length = array.length; i < length; i++) {
            content.classList.add(array[i]);
        }
        return content;
    }

    function create_button (id, text) {
        let button = document.createElement('button');
        button.classList.add('product_button');
        button.setAttribute('id', id);
        button.textContent = text;
        // button.addEventListener("click", clickFunction);
        return button;
    }

    function create_product_name (productNameClass, text) {
        let productName = document.createElement('h1');
        productName.classList.add(productNameClass);
        productName.textContent = text;
        return productName;
    }

    function create_product_description (productDescriptionClass, text) {
        let productDescription = document.createElement('p');
        productDescription.classList.add(productDescriptionClass);
        productDescription.textContent = text;
        return productDescription;
    }

    function create_product_price (productPriceClass, price) {
        let productPrice = document.createElement('div');
        productPrice.classList.add('product_price');
        productPrice.textContent = price + ' р.';
        return productPrice;
    }



})(AdsBoard);