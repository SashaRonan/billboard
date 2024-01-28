let BillBoard = {};
document.addEventListener("DOMContentLoaded", function () {
    BillBoard.HeaderLoginReg.draw();
    BillBoard.PageLogin.draw();
});


(function (app) {
    app.Functions = {

        // Загрузка превьюшки изображения при добавлении нового товара
        loadPreviewAdd: function (event) {
            let output = document.getElementById('imgPreview');
            output.src = URL.createObjectURL(event.target.files[0]);
            output.onload = function () {
                URL.revokeObjectURL(output.src) // очистка
            }
            return output.onload;
        },

        // Загрузка изображения при редактировании нового товара
        loadPreviewEdit: function () {
            let getID = this.id.split('_')[2];
            let output = document.querySelector('#img_' + getID);
            output.src = URL.createObjectURL(event.target.files[0]);
            output.onload = function () {
                URL.revokeObjectURL(output.src)
            }
            return output.onload;
        },

        // Переход на страницу регистрации пользователя
        goToRegister: function () {
            document.querySelector(".content_login").remove();
            app.PageRegister.draw();
        },

        // Переход на страницу входа в систему
        goToLogin: function () {
            document.querySelector(".goLogin").remove();
            app.PageLogin.draw();
        },

        // Показать-скрыть пароль
        show_hide_password: function () {
            let showViewID = this.id.split('_')[1]
            let passwordID = 'password_' + showViewID;
            let password = document.querySelector('#' + passwordID);
            let passwordType = password.getAttribute('type');
            let showView = document.getElementById(this.id);

            if (passwordType === 'password') {
                showView.classList.add('view');
                password.setAttribute('type', 'text');
            } else {
                showView.classList.remove('view');
                password.setAttribute('type', 'password');
            }
        },

        // Показать-скрыть телефон
        show_hide_phone: function () {

            let numID = this.id.split('_')[1];
            let button = document.querySelector('#buttonID_' + numID);
            let phone = document.querySelector('#userPhone_' + numID);

            let phoneDisplay = phone.style.display;

            if (phoneDisplay === 'none') {
                button.style.display = 'none';
                phone.style.display = 'inline-flex'
            } else if (phoneDisplay === '') {
                button.style.display = 'none';
                phone.style.display = 'inline-flex'
            } else {
                button.style.display = 'block';
                phone.style.display = 'none';
            }
        },

        // Регистрация пользователя
        registerUser: async function () {

            let userEmail = document.querySelector('#email').value;
            let userPhone = document.querySelector('#phone').value;
            let userName = document.querySelector('#name').value;
            let userPassword = document.querySelector('#password_2').value;
            let userConfirmPassword = document.querySelector('#password_3').value;

            let params = {
                name: userName,
                email: userEmail,
                phone: userPhone,
                password: userPassword
            };

            let settings = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(params)
            }

            if (userPassword !== userConfirmPassword) {
                alert('Пароли не совпадают');
                return;
            }

            try {
                let response = await fetch('user/userRegistration.php', settings);
                let result = await response.json();

                if (result.status === true) {
                    alert(result.message);
                    console.dir(result.message);
                    app.Functions.goToLogin();
                } else if (result.status === false) {
                    console.dir(result.message);
                }

            } catch (error) {
                alert("Что-то пошло не так");
                console.dir(error)
            }

            // fetch('user/userRegistration.php', {
            //     method: 'POST',
            //     headers: {'Content-Type': 'application/json'},
            //     body: JSON.stringify(params)
            // })
            //     .then(
            //         response => {
            //             if (!response.ok) {
            //                 return response.text().then(text => {
            //                     throw new Error(text)
            //                 });
            //                 // console.log(response.text());
            //             }
            //             return response.json();
            //         })
            //
            //
            //     .then(
            //         result => {
            //
            //             if (result.status === true) {
            //                 alert(result.message);
            //                 console.dir(result.message);
            //                 app.Functions.goToLogin();
            //             } else {
            //                 console.dir(result.message);
            //                 alert(result.message);
            //             }
            //         }
            //     )
            //     .catch(
            //         error => {
            //             console.error(error);
            //         }
            //     );
        },

        // Вход в систему
        loginUser: async function () {
            let userEmail = document.querySelector("#userEmail").value;
            let userPassword = document.querySelector('#password_1').value;

            let params = {
                email: userEmail,
                password: userPassword
            };

            let settings = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(params)
            }

            try {
                let response = await fetch('user/userLogin.php', settings);
                let result = await response.json();

                if (result.status) {
                    app.Functions.goToProductList();
                } else {
                    alert(result.message);
                }
            } catch (error) {
                alert("Произошла ошибка авторизации");
                console.dir(error)
            }

            // fetch('user/userLogin.php', {
            //     method: 'POST',
            //     headers: {'Content-Type': 'application/json'},
            //     body: JSON.stringify(params)
            // })
            //     .then(
            //         response => response.json()
            //     )
            //     .then(
            //         result => {
            //             if (result.status) {
            //                 app.Functions.goToProductList();
            //             } else {
            //                 alert(result.message);
            //             }
            //         }
            //     )
            //     .catch(
            //         error => {
            //             alert("Произошла ошибка авторизации");
            //             console.log(error);
            //         }
            //     );
        },

        // Выход из системы
        LogOut: async function () {

            try {
                document.cookie = 'PHPSESSID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

                let settings = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                }

                let response = await fetch('user/userLogOut.php', settings);
                let result = await response.json();
                alert(result.message);
                document.body.innerHTML = '';
                app.HeaderLoginReg.draw();
                app.PageLogin.draw();

            } catch (error) {
                alert('Произошла ошибка:');
                console.dir(error)
            }

            // fetch('user/userLogOut.php', {
            //     method: 'POST',
            //     headers: {'Content-Type': 'application/json'},
            // })
            //     .then(
            //         response => response.text()
            //     )
            //     .then(
            //         result => {
            //             document.body.innerHTML = '';
            //             app.HeaderLoginReg.draw();
            //             app.PageLogin.draw();
            //         }
            //     )
            //     .catch(error => {
            //         console.error('Произошла ошибка:', error);
            //     });
        },

        // Переход на страницу с товарами авторизованного пользователя
        goToMyProducts: async function () {

            let settings = {
                headers: {'Content-Type': 'application/json'}
            }

            try {
                let response = await fetch('product/productMyList.php', settings);
                let result = await response.json();

                document.body.innerHTML = '';
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

            } catch (error) {
                alert('Произошла ошибка:');
                console.dir(error)
            }

            // fetch('product/productMyList.php', {
            //     // method: 'POST',
            //     headers: {'Content-Type': 'application/json'},
            // })
            //     .then(
            //         response => response.json()
            //     )
            //     .then(
            //         result => {
            //             if (result.status === false) {
            //                 alert(result.message)
            //                 document.body.innerHTML = '';
            //                 app.HeaderProductList.draw();
            //                 app.MyAdsAddButton.draw()
            //             } else {
            //                 document.body.innerHTML = '';
            //                 app.HeaderProductList.draw();
            //                 app.MyAdsAddButton.draw()
            //
            //                 for (let i = result.length - 1; i >= 0; i--) {
            //                     let item = result[i];
            //
            //                     let productID = item['product_id'];
            //
            //                     app.MyAds.draw(
            //                         productID,
            //                         item['product_name'],
            //                         item['description'],
            //                         item['price'],
            //                         item['product_img']);
            //                 }
            //             }
            //         }
            //     )
        },

        // Переход на основную страницу после авторизации (Страница со всеми товарами)
        goToProductList: async function () {
            try {
                let response = await fetch('product/productList.php');
                let result = await response.json();

                document.body.innerHTML = '';
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
            // fetch('product/productList.php')
            //     .then(
            //         response => response.json()
            //     )
            //     .then(
            //         result => {
            //             document.body.innerHTML = '';
            //             app.HeaderProductList.draw();
            //             for (let i = result.length - 1; i >= 0; i--) {
            //                 let item = result[i];
            //
            //                 app.ProductList.draw(
            //                     item['product_id'],
            //                     item['name'],
            //                     item['phone'],
            //                     item['product_name'],
            //                     item['description'],
            //                     item['price'],
            //                     item['product_img']);
            //             }
            //         }
            //     )
            //     .catch(
            //         error => {
            //             alert("Что-то пошло не так");
            //             console.dir(error);
            //         }
            //     )
        },

        // Переход на страницу добавления товара
        goToAddNewProduct: function () {
            document.body.innerHTML = '';
            app.HeaderProductList.draw();
            app.PageAddAds.draw();
        },

        // Добавление нового товара
        addMyProduct: async function () {
            let data = new FormData();

            let fileInput = document.querySelector('#file_upload');
            let files = fileInput.files;
            for (let i = 0; i < files.length; i++) {
                data.append('myProduct', files[i]);
                data.append("product_name", document.querySelector('#product_name').value);
                data.append("product_description", document.querySelector("#product_description").value);
                data.append("product_price", document.querySelector('#product_price').value);
            }

            let settings = {
                method: 'POST',
                body: data
            }

            try {
                let response = await fetch('product/addMyProduct.php', settings);
                let result = await response.json();

                if (result.status === true) {
                    app.Functions.goToMyProducts()
                } else if (result.status === false) {
                    console.dir(result.message);
                    alert(result.message);
                }
            } catch (error) {
                alert("Что-то пошло не так");
                console.dir(error);
            }

            // fetch('product/addMyProduct.php', {
            //     method: 'POST',
            //     body: data
            // })
            //     .then(
            //         response => response.json()
            //     )
            //     .then(
            //         result => {
            //             if (result.status === true) {
            //                 app.Functions.goToMyProducts()
            //             } else if (result.status === false) {
            //                 console.dir(result.message);
            //                 alert(result.message);
            //             }
            //         }
            //     )
        },

        // Удаление товара
        deleteProduct: async function () {
            let productID = this.id.split('_')[1];

            try {
                let response = await fetch('product/deleteProduct.php?productID=' + productID, {});
                let result = await response.json();

                if (result.status === true) {
                    document.body.innerHTML = '';
                    app.Functions.goToMyProducts()
                } else if (result.status === false) {
                    console.dir(result.message);
                    alert(result.message);
                }
            } catch (error) {
                alert("Что-то пошло не так");
                console.dir(error);
            }

            // fetch('product/deleteProduct.php?productID=' + productID, {})
            //     .then(
            //         response => response.json()
            //     )
            //     .then(
            //         result => {
            //             if (result.status === true) {
            //                 document.body.innerHTML = '';
            //                 app.Functions.goToMyProducts()
            //             } else if (result.status === false) {
            //                 console.dir(result.message);
            //                 alert(result.message);
            //             }
            //         }
            //     )
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

        // Получение данных товара (для сохранения после редактирования)
        getProductByID: async function (productID, parentElem) {

            try {
                let response = await fetch('product/getProductByID.php?productID=' + productID);
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
                console.dir(error);
            }


            // fetch('product/getProductByID.php?productID=' + productID)
            //     .then(
            //         response => response.json(),
            //     )
            //     .then(
            //         result => {
            //             console.log(result);
            //
            //             for (let i = result.length - 1; i >= 0; i--) {
            //                 let item = result[i];
            //
            //                 let productID = item['product_id'];
            //
            //                 app.UpdatedProduct.draw(
            //                     productID,
            //                     item['product_name'],
            //                     item['description'],
            //                     item['price'],
            //                     item['product_img'],
            //                     parentElem
            //                 )
            //             }
            //         }
            //     )
            //     .catch(
            //         error => {
            //             alert("Что-то пошло не так");
            //             console.dir(error);
            //         }
            //     )
        },

        // Сохранение товара после редактирования
        saveUpdateProduct: async function () {

            let productID = this.id.split('_')[1];
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


            let settings = {
                method: 'POST',
                body: data
            }

            try {

                let response = await fetch('product/updateProduct.php', settings);
                let result = await response.json();

                if (result.status === true) {

                    console.log(result);
                    let productBlock = document.querySelector('#product_' + productID);
                    productBlock.innerHTML = '';
                    app.Functions.getProductByID(productID, productBlock);

                } else if (result.status === false) {
                    console.dir(result.message);
                    alert(result.message);
                }

            } catch (error) {
                alert("Что-то пошло не так");
                console.dir(error);
            }

            // fetch('product/updateProduct.php', {
            //     method: 'POST',
            //     body: data
            // })
            //     .then(
            //         response => response.json()
            //     )
            //     .then(
            //         result => {
            //             if (result.status === true) {
            //
            //                 console.log(result);
            //                 let productBlock = document.querySelector('#product_' + productID);
            //                 productBlock.innerHTML = '';
            //                 app.Functions.getProductByID(productID, productBlock);
            //
            //             } else if (result.status === false) {
            //                 console.dir(result.message);
            //                 alert(result.message);
            //             }
            //         }
            //     )
        },

    }
})(BillBoard);