(function (app) {
    app.Product = {

        // Получение данных для добавления товара
        getDataForAddProduct: () => {
            let data = new FormData();

            let fileInput = document.querySelector('#file_upload');
            let files = fileInput.files;
            for (let i = 0; i < files.length; i++) {
                data.append('myProduct', files[i]);
                data.append("product_name", document.querySelector('#product_name').value);
                data.append("product_description", document.querySelector("#product_description").value);
                data.append("product_price", document.querySelector('#product_price').value);
            }
            return data;
        },

        // Добавление нового товара
        addMyProduct: async () => {

            let data = app.Product.getDataForAddProduct();

            let settings = {
                method: 'POST',
                body: data
            }

            try {
                let response = await fetch('API/Product/addMyProduct.php', settings);
                let result = await response.json();

                if (result.status === true) {
                    await app.Navigate.goToMyProducts()
                } else if (result.status === false) {
                    alert(result.message);
                }
            } catch (error) {
                alert("Что-то пошло не так");
            }
        },

        // Удаление товара
        deleteProduct: async function () {
            let productID = this.id.split('_')[1];

            try {
                let response = await fetch('API/Product/deleteProduct.php?productID=' + productID, {});
                let result = await response.json();

                if (result.status === true) {
                    document.body.innerHTML = '';
                    await app.Navigate.goToMyProducts()
                } else if (result.status === false) {
                    alert(result.message);
                }
            } catch (error) {
                alert("Что-то пошло не так");
            }
        },

        // Получение данных товара (для сохранения после редактирования)
        getProductByID: async function (productID, parentElem) {

            try {
                let response = await fetch('API/Product/getProductByID.php?productID=' + productID);
                let result = await response.json();

                for (let key in result) {
                    let item = result[key];

                    app.UpdatedProduct.draw(
                        item['product_id'],
                        item['product_name'],
                        item['description'],
                        item['price'],
                        item['product_img'],
                        parentElem
                    )
                }

            } catch (error) {
                alert("Что-то пошло не так");
            }
        },

        // получение данных для сохранения продукта после редактирования
        getDataForSaveProduct: function(productID) {

            let productNameID = '#productName_' + productID;
            let productDescriptionID = '#description_' + productID;
            let productPriceID = '#price_' + productID;

            let data = new FormData();

            let getImgSrc = document.querySelector('#img_' + productID).src;
            let imgSrc = getImgSrc.split('/')[6];


            let fileInput = document.querySelector('#product_change_' + productID);
            let newFiles = fileInput.files;

            for (let i = 0; i < newFiles.length; i++) {
                data.append('myProduct', newFiles[i]);
            }

            if (newFiles.length === 0) {
                data.append('product_file', imgSrc);
            }

            data.append("product_id", productID);
            data.append("product_name", document.querySelector(productNameID).value);
            data.append("product_description", document.querySelector(productDescriptionID).value);
            data.append("product_price", document.querySelector(productPriceID).value);

            return data;
        },

        // Сохранение товара после редактирования
        saveUpdateProduct: async function () {

            let productID = this.id.split('_')[1];
            let  data = app.Product.getDataForSaveProduct(productID);

            let settings = {
                method: 'POST',
                body: data
            }

            try {

                let response = await fetch('API/Product/updateProduct.php', settings);
                let result = await response.json();

                if (result.status === true) {
                    let productBlock = document.querySelector('#product_' + productID);
                    productBlock.innerHTML = '';
                    document.title = "Товары";
                    await app.Product.getProductByID(productID, productBlock);

                } else if (result.status === false) {
                    alert(result.message);
                }

            } catch (error) {
                alert("Что-то пошло не так");
            }

        },

    }
})(BillBoard);