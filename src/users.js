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
        // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: JSON.stringify(params)
    })
        .then(
            response => response.text(),

        )
        .then(
            result => {
                alert("Вы успешно зарегистрировались. Войдите в систему"),
                console.dir(result)
                goToLogin()
            }
        )
        .catch(
            error => {
                alert("Регистрация не удалась, произошла ошибка");
                console.dir(error);
            }
        );
}

function loginUser() {
    let userEmail = document.querySelector("#userEmail").value;
    let userPassword = document.querySelector('#userPassword').value;

    // let loginURI = 'users.php?email=' + userEmail + '&password=' + userPassword;

    let params = {
        email: userEmail,
        password: userPassword
    };

    fetch('user/userLogin.php', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: JSON.stringify(params)
    })
        .then(
            response => response.json()
        )
        .then(
            result => {
                console.dir(result);
                alert('Вы успешно вошли');
                document.querySelector(".content_login-reg").remove();
                document.querySelector("header").remove();
                AdsBoard.HeaderProductList.draw();

                for (let i = 0; i < result.length; i++) {
                    let item = result[i];
                    let buttonID = "button_id_" + i;
                        AdsBoard.ProductList.draw(buttonID, item['name'], item['phone'], item['product_name'], item['description'], item['price']);
                }
            }
            )
            .catch(
            error => {
                alert("Произошла ошибка авторизации");
                console.dir(error);
            }
        );
}



