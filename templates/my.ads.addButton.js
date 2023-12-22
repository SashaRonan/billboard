(function (app) {
    app.MyAdsAddButton = {
        draw: function (productName, productDescription, productPrice) {

            let content                     = create_div ("content_product container_login_header")

            let buttonAddBox                  = create_div('button_add-box');
            let buttonAdd                  = create_button('button_add_product', 'Добавить');
            buttonAddBox.append(buttonAdd);
            content.append(buttonAddBox);
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

})(AdsBoard);