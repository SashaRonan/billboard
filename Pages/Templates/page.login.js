 (function (app) {
    app.PageLogin = { // Создание HTML страницы авторизации пользователя

        draw: function () {

            let content                           = app.Create.divWithID('content_login goLogin', 'content_log_reg');

            let loginBlock                        = app.Create.div('login_block');

            let contentText                       = app.Create.header('content_text','content_text', 'Вход');
            let inputBox                          = app.Create.div('input_box');

            let inputBlock1                       = app.Create.div('input_block');
            let input1                            = app.Create.input('input','userEmail','email', 'Введите ваш email') ;
            let label1                            = app.Create.label('input_label', 'input_label', 'userEmail', 'E-mail')

            inputBlock1.append(input1);
            inputBlock1.append(label1);

            let inputBlock2                        = app.Create.div('input_password_block');
            let viewPasswordIcon                   = app.Create.link("viewHide",'showView_1', app.PageLogin.show_hide_password);
            let input2                             = app.Create.input('input','password_1','password', 'Введите ваш пароль') ;
            let label2                             = app.Create.label('input_label', 'password', 'password_1','Пароль', );

            inputBlock2.append(input2);
            inputBlock2.append(label2);
            inputBlock2.append(viewPasswordIcon);

            inputBox.append(inputBlock1);
            inputBox.append(inputBlock2);

            let buttonBox                          = app.Create.div('button_box');
            let button1                            = app.Create.button('button', 'Войти', app.User.loginUser);
            let button2                            = app.Create.button('button', 'Зарегистрироваться', app.Navigate.goToRegister);

            buttonBox.append(button1);
            buttonBox.append(button2);

            loginBlock.append(contentText);
            loginBlock.append(inputBox);
            loginBlock.append(buttonBox);
            content.append(loginBlock);

            document.body.append(content);

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
    }
})(BillBoard);