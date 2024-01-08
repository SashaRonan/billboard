 (function (app) {
    app.PageLogin = {
        draw: function () {

            let content                            = AdsBoard.Create.divWithID('content_login goLogin', 'content_log_reg');

            let loginBlock                          = AdsBoard.Create.div('login_block');

            let contentText                        = AdsBoard.Create.header('content_text','content_text', 'Вход');
            let inputBox                           = AdsBoard.Create.div('input_box');

            let inputBlock1                        = AdsBoard.Create.div('input_block');
            let input1                             = AdsBoard.Create.input('input','userEmail','email', 'Введите ваш email') ;
            let label1                             = AdsBoard.Create.label('input_label', 'input_label', 'userEmail', 'E-mail')

            inputBlock1.append(input1);
            inputBlock1.append(label1);

            let inputBlock2                        = AdsBoard.Create.div('input_password_block');
            let viewPasswordIcon                   = AdsBoard.Create.link("viewHide",'showView_1', AdsBoard.Functions.show_hide_password);
            let input2                             = AdsBoard.Create.input('input','password_1','password', 'Введите ваш пароль') ;
            let label2                             = AdsBoard.Create.label('input_label', 'password', 'password_1','Пароль', );

            inputBlock2.append(input2);
            inputBlock2.append(label2);
            inputBlock2.append(viewPasswordIcon);

            inputBox.append(inputBlock1);
            inputBox.append(inputBlock2);

            let buttonBox                          = AdsBoard.Create.div('button_box');
            let button1                            = AdsBoard.Create.button('button', 'Войти', AdsBoard.Functions.loginUser);
            let button2                            = AdsBoard.Create.button('button', 'Зарегистрироваться', AdsBoard.Functions.goToRegister);

            buttonBox.append(button1);
            buttonBox.append(button2);

            loginBlock.append(contentText);
            loginBlock.append(inputBox);
            loginBlock.append(buttonBox);
            content.append(loginBlock);

            document.body.append(content);

        }
    }
})(AdsBoard);