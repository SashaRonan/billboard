

(function (app) {
    app.PageRegister = {
        draw: function () {

            let content                    = BillBoard.Create.divWithID('content_reg goLogin', 'content_log_reg');
            let registerBlock              = BillBoard.Create.div('login_block');
            let contentText            = BillBoard.Create.header('content_text', 'content_text','Регистрация');

            let inputBox                   = BillBoard.Create.div('input_box');

            let inputBlock1                = BillBoard.Create.div('input_block');
            let input1                   = BillBoard.Create.input('input','email','email','Введите ваш email');
            input1.autocomplete = 'off';
            let label1                   = BillBoard.Create.label('input_label', 'input_email','email','E-mail');

            inputBlock1.append(input1);
            inputBlock1.append(label1);

            let inputBlock2                 = BillBoard.Create.div('input_block');
            let input2                    = BillBoard.Create.input('input','phone','tel','Введите ваш номер телефона');
            input2.autocomplete = 'off';
            let label2                    = BillBoard.Create.label('input_label', 'input_phone','phone','Телефон');

            inputBlock2.append(input2);
            inputBlock2.append(label2);

            let inputBlock3                 = BillBoard.Create.div('input_block');
            let input3                     = BillBoard.Create.input('input','name','text','Введите вашу фамилия, имя, отчество');
            input3.autocomplete = 'off';
            let label3                     = BillBoard.Create.label('input_label', 'input_name','name','ФИО');

            inputBlock3.append(input3);
            inputBlock3.append(label3);

            let inputBlock4                 = BillBoard.Create.div('input_block');
            let input4                    = BillBoard.Create.input('input','password_2','password','Введите ваш пароль');
            let label4                    = BillBoard.Create.label('input_label', 'input_password','password_2','Пароль');
            let viewPasswordIcon         = BillBoard.Create.link("viewHide_reg",'showView_2', BillBoard.Functions.show_hide_password);

            inputBlock4.append(input4);
            inputBlock4.append(label4);
            inputBlock4.append(viewPasswordIcon);

            let inputBlock5              = BillBoard.Create.div('input_block');
            let input5                 = BillBoard.Create.input('input','password_3','password','Введите ваш пароль еще раз');
            let label5                 = BillBoard.Create.label('input_label', 'input_passwordConfirm','password_3','Подтвердите пароль');
            let confirmPasswordIcon   = BillBoard.Create.link("viewHide_confirm",'showView_3', BillBoard.Functions.show_hide_password);

            inputBlock5.append(input5);
            inputBlock5.append(label5);
            inputBlock5.append(confirmPasswordIcon);

            inputBox.append(inputBlock1);
            inputBox.append(inputBlock2);
            inputBox.append(inputBlock3);
            inputBox.append(inputBlock4);
            inputBox.append(inputBlock5);

            let buttonBox                  = BillBoard.Create.div ('button_box');
            let button1                 = BillBoard.Create.button('button', 'Зарегистрироваться', BillBoard.Functions.registerUser);
            let button2                 = BillBoard.Create.button('button', 'Войти', BillBoard.Functions.goToLogin);

            buttonBox.append(button1);
            buttonBox.append(button2);
            inputBox.append(buttonBox);

            registerBlock.append(contentText);
            registerBlock.append(inputBox);
            content.append(registerBlock);

            document.body.append(content);

        }
    }
})(BillBoard);

