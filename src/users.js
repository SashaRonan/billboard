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
        credentials: "include",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(params)
    })
        .then(
            response => {
                if (!response.ok) {
                    // throw new Error(response.status + ' ' + response.statusText);
                    return  response.text().then(text => {throw new Error(text)});
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
                } else  {
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
    // let phpSessionId = document.cookie.match(/PHPSESSID=[^;]+/);
    // if (phpSessionId != null) {
    //     if (phpSessionId instanceof Array)
    //         phpSessionId = phpSessionId[0].substring(11);
    //     else
    //         phpSessionId = phpSessionId.substring(11);
    // }
    //
    // document.cookie = 'PHPSESSID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    fetch('user/userLogOut.php', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        // body: JSON.stringify(phpSessionId)
    })
        .then(
            response => response.text()
        )
        .then(
            result => {
                console.dir(result);
                document.body.innerHTML = '';
                AdsBoard.HeaderLoginReg.draw();
                AdsBoard.PageLogin.draw();
                document.cookie = 'PHPSESSID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            }
        )
        .catch(error => {
            console.error('Произошла ошибка:', error);
        });
}

function goToMyProducts() {

    fetch('product/productMyList.php', {
        method: 'POST',
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

                    for (let i = result.length-1; i >=0; i--) {
                        let item = result[i];
                        let editButtonID = "edit_" + item['product_id'];
                        let deleteButtonID = "del_" + item['product_id'];
                        AdsBoard.MyAds.draw(editButtonID, deleteButtonID, item['product_name'], item['description'], item['price'], item['product_img']);
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
                    for (let i = result.length-1; i >= 0; i--) {
                        let item = result[i];
                        let buttonID = "button_id_" + i;
                        AdsBoard.ProductList.draw(buttonID, item['name'], item['phone'], item['product_name'], item['description'], item['price'], item['product_img']);
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
    console.dir(files);
    for (let i = 0; i < files.length; i++) {
        data.append('myProduct', files[i]);
        data.append("product_name", document.querySelector('#product_name').value);
        data.append("product_description", document.querySelector("#product_description").value);
        data.append("product_price", document.querySelector('#product_price').value);
    }

    console.dir(data);

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
    fetch('product/deleteProduct.php?productID=' + productID, {
    })
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







