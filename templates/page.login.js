 (function (app) {
    app.PageLogin = {
        draw: function () {

            let content                            = BillBoard.Create.divWithID('content_login goLogin', 'content_log_reg');

            let loginBlock                          = BillBoard.Create.div('login_block');

            let contentText                        = BillBoard.Create.header('content_text','content_text', 'Вход');
            let inputBox                           = BillBoard.Create.div('input_box');

            let inputBlock1                        = BillBoard.Create.div('input_block');
            let input1                             = BillBoard.Create.input('input','userEmail','email', 'Введите ваш email') ;
            let label1                             = BillBoard.Create.label('input_label', 'input_label', 'userEmail', 'E-mail')

            inputBlock1.append(input1);
            inputBlock1.append(label1);

            let inputBlock2                        = BillBoard.Create.div('input_password_block');
            let viewPasswordIcon                   = BillBoard.Create.link("viewHide",'showView_1', BillBoard.Functions.show_hide_password);
            let input2                             = BillBoard.Create.input('input','password_1','password', 'Введите ваш пароль') ;
            let label2                             = BillBoard.Create.label('input_label', 'password', 'password_1','Пароль', );

            inputBlock2.append(input2);
            inputBlock2.append(label2);
            inputBlock2.append(viewPasswordIcon);

            inputBox.append(inputBlock1);
            inputBox.append(inputBlock2);

            let buttonBox                          = BillBoard.Create.div('button_box');
            let button1                            = BillBoard.Create.button('button', 'Войти', BillBoard.Functions.loginUser);
            let button2                            = BillBoard.Create.button('button', 'Зарегистрироваться', BillBoard.Functions.goToRegister);

            buttonBox.append(button1);
            buttonBox.append(button2);

            loginBlock.append(contentText);
            loginBlock.append(inputBox);
            loginBlock.append(buttonBox);
            content.append(loginBlock);

            document.body.append(content);

        }
    }
})(BillBoard);