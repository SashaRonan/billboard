let BillBoard = {};
document.addEventListener("DOMContentLoaded", function () {
    BillBoard.HeaderLoginReg.draw();
    BillBoard.PageLogin.draw();
});


(function (app) {
    app.Functions = {

        loadPreviewAdd: function (event) {
            let output = document.getElementById('imgPreview');
            output.src = URL.createObjectURL(event.target.files[0]);
            output.onload = function () {
                URL.revokeObjectURL(output.src) // free memory
            }
            return output.onload;
        },

        loadPreviewEdit: function () {
            let getID = this.id.split('_')[2];
            let output = document.querySelector('#img_' + getID);
            output.src = URL.createObjectURL(event.target.files[0]);
            output.onload = function () {
                URL.revokeObjectURL(output.src)
            }
            return output.onload;
        },

        goToRegister: function () {
            document.querySelector(".content_login").remove();
            app.PageRegister.draw();
        },

        goToLogin: function () {
            document.querySelector(".goLogin").remove();
            app.PageLogin.draw();
        },

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

        show_hide_phone: function () {

            let numID = this.id.split('_')[1];
            let button = document.querySelector('#buttonID_' + numID);
            let phone = document.querySelector('#userPhone_' + numID);

            let phoneDisplay = phone.style.display;

            if (phoneDisplay == 'none') {
                button.style.display = 'none';
                phone.style.display = 'inline-flex'
            } else if (phoneDisplay == '') {
                button.style.display = 'none';
                phone.style.display = 'inline-flex'
            } else {
                button.style.display = 'block';
                phone.style.display = 'none';
            }
        },

        registerUser: function () {
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

            if (userPassword !== userConfirmPassword) {
                alert('Пароли не совпадают');
                return;
            }

            fetch('user/userRegistration.php', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(params)
            })
                .then(
                    response => {
                        if (!response.ok) {
                            return response.text().then(text => {
                                throw new Error(text)
                            });
                            console.log(response.text());
                        }
                        return response.json();
                    })


                .then(
                    result => {

                        if (result.status === true) {
                            alert(result.message);
                            console.dir(result.message);
                            BillBoard.Functions.goToLogin();
                        } else {
                            console.dir(result.message);
                            alert(result.message);
                        }
                    }
                )
                .catch(
                    error => {
                        console.error(error);
                    }
                );
        },

        loginUser: function () {
            let userEmail = document.querySelector("#userEmail").value;
            let userPassword = document.querySelector('#password_1').value;

            let params = {
                email: userEmail,
                password: userPassword
            };

            fetch('user/userLogin.php', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(params)
            })
                .then(
                    response => response.json()
                )
                .then(
                    result => {
                        if (result.status) {
                            BillBoard.Functions.goToProductList();
                        } else {
                            alert(result.message);
                        }
                    }
                )
                .catch(
                    error => {
                        alert("Произошла ошибка авторизации");
                        console.log(error);
                    }
                );
        },

        LogOut: function () {
            document.cookie = 'PHPSESSID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

            fetch('user/userLogOut.php', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
            })
                .then(
                    response => response.text()
                )
                .then(
                    result => {

                        document.body.innerHTML = '';
                        BillBoard.HeaderLoginReg.draw();
                        BillBoard.PageLogin.draw();
                    }
                )
                .catch(error => {
                    console.error('Произошла ошибка:', error);
                });
        },

        goToMyProducts: function () {

            fetch('product/productMyList.php', {
                // method: 'POST',
                headers: {'Content-Type': 'application/json'},
            })
                .then(
                    response => response.json()
                )
                .then(
                    result => {
                        if (result.status === false) {
                            alert(result.message)
                            document.body.innerHTML = '';
                            BillBoard.HeaderProductList.draw();
                            BillBoard.MyAdsAddButton.draw()
                        } else {
                            document.body.innerHTML = '';
                            BillBoard.HeaderProductList.draw();
                            BillBoard.MyAdsAddButton.draw()

                            for (let i = result.length - 1; i >= 0; i--) {
                                let item = result[i];

                                let productID = item['product_id'];

                                BillBoard.MyAds.draw(
                                    productID,
                                    item['product_name'],
                                    item['description'],
                                    item['price'],
                                    item['product_img']);
                            }
                        }
                    }
                )
        },

        goToProductList: function () {
            {
                fetch('product/productList.php')
                    .then(
                        response => response.json()
                    )
                    .then(
                        result => {
                            document.body.innerHTML = '';
                            BillBoard.HeaderProductList.draw();
                            for (let i = result.length - 1; i >= 0; i--) {
                                let item = result[i];

                                let productID = item['product_id'];
                                // let buttonID = "button_id_" + productID;

                                BillBoard.ProductList.draw(
                                    productID,
                                    // buttonID,
                                    item['name'],
                                    item['phone'],
                                    item['product_name'],
                                    item['description'],
                                    item['price'],
                                    item['product_img']);
                            }
                        }
                    )
                    .catch(
                        error => {
                            alert("Что-то пошло не так");
                            console.dir(error);
                        }
                    )
            }
        },

        goToAddNewProduct: function () {
            document.body.innerHTML = '';
            BillBoard.HeaderProductList.draw();
            BillBoard.PageAddAds.draw();
        },

        addMyProduct: function () {
            let data = new FormData();

            let fileInput = document.querySelector('#file_upload');
            let files = fileInput.files;
            for (let i = 0; i < files.length; i++) {
                data.append('myProduct', files[i]);
                data.append("product_name", document.querySelector('#product_name').value);
                data.append("product_description", document.querySelector("#product_description").value);
                data.append("product_price", document.querySelector('#product_price').value);
            }

            fetch('product/addMyProduct.php', {
                method: 'POST',
                body: data
            })
                .then(
                    response => response.json()
                )
                .then(
                    result => {
                        if (result.status == true) {
                            BillBoard.Functions.goToMyProducts()
                        } else if (result.status == false) {
                            console.dir(result.message);
                            alert(result.message);
                        }
                    }
                )
        },

        deleteProduct: function () {
            let productID = this.id.split('_')[1];
            fetch('product/deleteProduct.php?productID=' + productID, {})
                .then(
                    response => response.json()
                )
                .then(
                    result => {
                        if (result.status === true) {
                            document.body.innerHTML = '';
                            BillBoard.Functions.goToMyProducts()
                        } else if (result.status === false) {
                            console.dir(result.message);
                            alert(result.message);
                        }
                    }
                )
        },

        goToFormUpdateProduct: function () {
            let productID = this.id.split('_')[1];

            let product = 'product_' + productID;
            let productNameID = 'productName_' + productID;
            let productDescriptionID = 'description_' + productID;
            let productPriceID = 'price_' + productID;
            // let saveButtonID = 'save_' + productID;
            // let deleteButtonID = "del_" + productID;
            let productImgID = "img_" + productID;


            let productName = document.querySelector('#' + productNameID).textContent;
            let productDescription = document.querySelector('#' + productDescriptionID).textContent;
            let productPrice = document.querySelector('#' + productPriceID).textContent;
            let productImgSrc = document.querySelector('#' + productImgID).src;

            let getProduct = document.querySelector('#' + product);
            getProduct.innerHTML = '';

            getProduct.appendChild(
                BillBoard.EditProduct.draw(
                    productID,
                    productName,
                    productDescription,
                    productPrice,
                    productImgSrc
                )
            );

        },

        saveUpdateProduct: function () {

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

            fetch('product/updateProduct.php', {
                method: 'POST',
                body: data
            })
                .then(
                    response => response.json()
                )
                .then(
                    result => {
                        if (result.status == true) {
                            BillBoard.Functions.goToMyProducts()
                        } else if (result.status == false) {
                            console.dir(result.message);
                            alert(result.message);
                        }
                    }
                )
        },

    }
})(BillBoard);