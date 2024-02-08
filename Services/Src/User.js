(function (app) {
    app.User = {


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
                let response = await fetch('API/User/userRegistration.php', settings);
                let result = await response.json();
                if (result.status === true) {
                    alert(result.message);
                    app.Navigate.goToLogin();
                } else if (result.status === false) {
                    alert(result.message);
                }

            } catch (error) {
                alert("Что-то пошло не так");
            }

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
                let response = await fetch('API/User/userLogin.php', settings);
                let result = await response.json();

                if (result.status) {
                    await app.Navigate.goToProductList();
                } else {
                    alert(result.message);
                }
            } catch (error) {
                alert("Произошла ошибка авторизации");
                console.dir(error);
            }
        },

        // Выход из системы
        LogOut: async function () {

            try {
                document.cookie = 'PHPSESSID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

                let settings = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                }

                let response = await fetch('API/User/userLogOut.php', settings);
                let result = await response.json();
                alert(result.message);
                document.body.innerHTML = '';
                app.HeaderLoginReg.draw();
                app.PageLogin.draw();

            } catch (error) {
                alert('Произошла ошибка:');
            }
        },


    }
})(BillBoard);