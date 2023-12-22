let AdsBoard = {};
document.addEventListener("DOMContentLoaded", function () {
    AdsBoard.HeaderLoginReg.draw();
    AdsBoard.PageLogin.draw();
});
function registerUser() {
    let userEmail = document.querySelector('#email').value;
    let userPhone = document.querySelector('#phone').value;
    let userName = document.querySelector('#name').value;
    let userPassword = document.querySelector('#password').value;
    let userConfirmPassword = document.querySelector('#confirmPassword').value;

    // let params = {
    //     name: userName,
    //     email: userEmail,
    //     phone: userPhone,
    //     password: userPassword
    // };

    let params = 'name=' + userName + '&email=' + userEmail + '&phone=' + userPhone + '&password=' + userPassword;

    if (userPassword !== userConfirmPassword) {
        alert('Пароли не совпадают');

    } else if (userEmail !== '' && userPhone !== '' && userName !== '' && userPassword !== '') {
        fetch('./users.php', {
            method: 'POST',
            // credentials: 'true',

            // mode: 'no-cors',
            // mode: 'same-origin',
            // mode: 'cors',
            // referer: "",
            // dataType:'json',
            // referrerPolicy: "no-referrer",
            // headers: {'Content-Type': 'application/json'},
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            // header: {'Access-Control-Allow-Headers': 'billboard'},
            // body: JSON.stringify(params),
            body: params
        }).then(
            response => response.json()
        ).then(
            result => console.log(result)
        ).catch(function (err) {
            console.log('Ошибка:', err);
        });

    }

}

