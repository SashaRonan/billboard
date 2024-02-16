let BillBoard = {};

document.addEventListener("DOMContentLoaded", function () {
    BillBoard.HeaderLoginReg.draw();
    BillBoard.PageLogin.draw();
});


(function (app) {
    app.Navigate = {

        // Переход на страницу регистрации пользователя
        goToRegister: function () {
            document.querySelector(".content_login").remove();
            app.PageRegister.draw();
            document.title = "Регистрация";
        },

        // Переход на страницу входа в систему
        goToLogin: function () {
            document.querySelector(".goLogin").remove();
            app.PageLogin.draw();
            document.title = "Вход";
        },

        // Переход на страницу с товарами авторизованного пользователя
        goToMyProducts: async function () {

            let settings = {
                headers: {'Content-Type': 'application/json'}
            }

            try {
                let response = await fetch('API/Product/productMyList.php', settings);
                let result = await response.json();

                document.body.innerHTML = '';
                document.title = "Мои товары";
                app.HeaderProductList.draw();
                app.MyAdsAddButton.draw()

                if (result.status === false) {
                    alert(result.message)

                } else {

                    for (let key in result) {
                        let item = result[key];

                        app.MyAds.draw(
                            item['product_id'],
                            item['product_name'],
                            item['description'],
                            item['price'],
                            item['product_img']);
                    }
                }

            }
            catch (error) {
                alert('Произошла ошибка:');
            }
        },

        // Переход на основную страницу после авторизации (Страница со всеми товарами)
        goToProductList: async function () {
            try {

                let response = await fetch('API/Product/productList.php');
                let result = await response.json();

                document.body.innerHTML = '';
                document.title = "Товары";
                app.HeaderProductList.draw();

                for (let key in result) {

                    let item = result[key];

                    app.ProductList.draw(
                        item.product_id,
                        item.name,
                        item.phone,
                        item.product_name,
                        item.description,
                        item.price,
                        item.product_img)
                }

            } catch (error) {
                alert("Что-то пошло не так");
                console.dir(error);
            }
        },

        // Переход на страницу добавления товара
        goToAddNewProduct: function () {
            document.body.innerHTML = '';
            document.title = "Добавить товар";
            app.HeaderProductList.draw();
            app.PageAddAds.draw();
        },

        // Переход на форму редактирования товара
        goToFormUpdateProduct: function () {
            let productID = this.id.split('_')[1];

            let product = 'product_' + productID;
            let productNameID = 'productName_' + productID;
            let productDescriptionID = 'description_' + productID;
            let productPriceID = 'price_' + productID;

            let productImgID = "img_" + productID;

            let productName = document.querySelector('#' + productNameID).textContent;
            let productDescription = document.querySelector('#' + productDescriptionID).textContent;
            let productPrice = document.querySelector('#' + productPriceID).textContent;
            let productImgSrc = document.querySelector('#' + productImgID).src;

            let getProduct = document.querySelector('#' + product);
            getProduct.innerHTML = '';
            document.title = "Изменить товар";

            getProduct.appendChild(
                app.EditProduct.draw(
                    productID,
                    productName,
                    productDescription,
                    productPrice,
                    productImgSrc
                )
            );
        },
    }
}(BillBoard));
