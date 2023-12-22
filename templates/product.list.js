(function (app) {
    app.ProductList = {
        draw: function (buttonId, userName, userPhoneNumber, productName, productDescription, productPrice) {

            let content                   = create_div ("content_product container_login_header")

            let productBlock              = create_div ('product_block');

            let productImgBox             = create_div ('product_img-box');
            let productImg                = create_div ('product_img');

            let userPhoneBtn           = create_user_phone_button(buttonId,userPhoneNumber, productImgBox);

            productImgBox.append(productImg);
            productImgBox.append(userPhoneBtn);

            let productDescriptionBox     = create_div ('product_description-box')
            let productNameDescriptionBox = create_div ('product_name-description-box');
            let productNameBlock      = create_product_name ('product_name', productName);
            let productDescriptionBlock   = create_product_description ('product_description', productDescription)

            productNameDescriptionBox.append(productNameBlock);
            productNameDescriptionBox.append(productDescriptionBlock);

            let userNameBlock             = create_user_name('user_name', userName);
            productDescriptionBox.append(productNameDescriptionBox);
            productDescriptionBox.append(userNameBlock);

            let productPriceBlock               = create_product_price ('product_price', productPrice);

            productBlock.append(productImgBox);
            productBlock.append(productDescriptionBox);
            productBlock.append(productPriceBlock);

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

    function create_user_phone_button(id, userPhoneNumber, parentElem) {
        let userPhoneBtn = document.createElement('button');
        userPhoneBtn.classList.add('product_button');
        userPhoneBtn.setAttribute('id', id);
        userPhoneBtn.textContent = "Показать телефон";
        userPhoneBtn.addEventListener("click", show_user_phone);
        let userPhone = document.createElement('p');
        userPhone.classList.add('user_phone_class');
        userPhone.textContent = userPhoneNumber;
        return userPhoneBtn;

        function show_user_phone () {
            let userPhoneBtnId = '#' + id;
            document.querySelector(userPhoneBtnId).remove();
            parentElem.append(userPhone);
        }
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

    function create_user_name (userNameClass, name) {
        let userName = document.createElement('p');
        userName.classList.add('user_name');
        userName.innerHTML = 'Продавец: <span>' + name + '</span>';
        return userName;
    }

    function create_product_price (productPriceClass, price) {
        let productPrice = document.createElement('div');
        productPrice.classList.add('product_price');
        productPrice.textContent = price + ' р.';
        return productPrice;
    }



})(AdsBoard);