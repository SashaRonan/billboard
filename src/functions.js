let AdsBoard = {};
document.addEventListener("DOMContentLoaded", function () {
    AdsBoard.HeaderLoginReg.draw();
    AdsBoard.PageLogin.draw();
});

function goToLogin() {
    document.querySelector(".content_login-reg").remove();
    AdsBoard.PageLogin.draw();
}

function registerUser() {
    let userEmail = document.querySelector('#email').value;
    let userPhone = document.querySelector('#phone').value;
    let userName = document.querySelector('#name').value;
    let userPassword = document.querySelector('#password').value;
    let userConfirmPassword = document.querySelector('#confirmPassword').value;

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
                    // throw new Error(response.status + ' ' + response.statusText);
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
                    goToLogin();
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
}

function loginUser() {
    let userEmail = document.querySelector("#userEmail").value;
    let userPassword = document.querySelector('#userPassword').value;

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
                    alert(result.message)
                    goToProductList();
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
}

function LogOut() {
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
                alert('Вы вышли из системы')
                document.body.innerHTML = '';
                AdsBoard.HeaderLoginReg.draw();
                AdsBoard.PageLogin.draw();
            }
        )
        .catch(error => {
            console.error('Произошла ошибка:', error);
        });
}

function goToMyProducts() {

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
                    AdsBoard.HeaderProductList.draw();
                    AdsBoard.MyAdsAddButton.draw()
                } else {
                    document.body.innerHTML = '';
                    AdsBoard.HeaderProductList.draw();
                    AdsBoard.MyAdsAddButton.draw()

                    for (let i = result.length - 1; i >= 0; i--) {
                        let item = result[i];

                        let productID = item['product_id'];
                        let product = "product_" + productID;
                        let editButtonID = "edit_" + productID;
                        let deleteButtonID = "del_" + productID;
                        let productNameID = "productName_" + productID;
                        let productDescriptionID = "description_" + productID;
                        let productPriceID = "price_" + productID;
                        let productImgID = "img_" + productID;

                        AdsBoard.MyAds.draw(
                            product,
                            editButtonID,
                            deleteButtonID,
                            productNameID,
                            productDescriptionID,
                            productPriceID,
                            productImgID,
                            item['product_name'],
                            item['description'],
                            item['price'],
                            item['product_img']);
                    }
                }
            }
        )
}

function goToProductList() {
    {
        fetch('product/productList.php')
            .then(
                response => response.json()
            )
            .then(
                result => {
                    document.body.innerHTML = '';
                    AdsBoard.HeaderProductList.draw();
                    for (let i = result.length - 1; i >= 0; i--) {
                        let item = result[i];
                        let buttonID = "button_id_" + i;
                        AdsBoard.ProductList.draw(
                            buttonID,
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
}

function goToAddNewProduct() {
    document.body.innerHTML = '';
    AdsBoard.HeaderProductList.draw();
    AdsBoard.PageAddAds.draw();
}

function addMyProduct() {
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
                    alert(result.message);
                    console.dir(result.message);
                    goToMyProducts()
                } else if (result.status == false) {
                    console.dir(result.message);
                    alert(result.message);
                }
            }
        )
}

function deleteProduct() {
    let productID = this.id.split('_')[1];
    fetch('product/deleteProduct.php?productID=' + productID, {})
        .then(
            response => response.json()
        )
        .then(
            result => {
                if (result.status === true) {
                    alert(result.message);
                    console.dir(result.message);
                    document.body.innerHTML = '';
                    goToMyProducts()
                } else if (result.status === false) {
                    console.dir(result.message);
                    alert(result.message);
                }
            }
        )
}

function goToFormUpdateProduct() {
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
        AdsBoard.EditProduct.draw(
            productID,
            productName,
            productDescription,
            productPrice,
            productImgSrc
        )
    );

}

function saveUpdateProduct() {

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
                    // alert(result.message);
                    console.dir(result.message);
                    goToMyProducts()
                } else if (result.status == false) {
                    console.dir(result.message);
                    alert(result.message);
                }
            }
        )
}







