

(function (app) {
    app.PageRegister = {
        draw: function () {

            let content = create_div ('content_login-reg');
            let registerBlock = create_div('login_block');
            let contentText = create_content_text('content_text', 'Регистрация');

            let inputBox = create_div('input_box');

            let inputBlock1 = create_div ('input_block');
            let input1 = create_input('input', 'email', 'email', 'email','field-name', 'Введите ваш email');
            let label1 = create_label_forInput('input_label', 'email', 'E-mail');
            inputBlock1.append(input1);
            inputBlock1.append(label1);

            let inputBlock2 = create_div ('input_block');
            let input2 = create_input('input', 'tel', 'phone', 'phone', 'field-name','Введите ваш номер телефона');
            let label2 = create_label_forInput('input_label', 'phone', 'Телефон');
            inputBlock2.append(input2);
            inputBlock2.append(label2);

            let inputBlock3 = create_div ('input_block');
            let input3 = create_input('input', 'text', 'name', 'name','field-name', 'Введите вашу фамилия, имя, отчество');
            let label3 = create_label_forInput('input_label', 'name', 'ФИО');
            inputBlock3.append(input3);
            inputBlock3.append(label3);

            let inputBlock4 = create_div ('input_block');
            let input4 = create_input('input password', 'password', 'password', 'password', 'current-password','Введите ваш пароль');
            let label4 = create_label_forInput('input_label', 'password', 'Пароль');
            let showHideEye = create_hide_show_eye();
            input4.append(showHideEye);
            inputBlock4.append(input4);
            inputBlock4.append(label4);

            let inputBlock5 = create_div ('input_block');
            let input5 = create_input('input', 'password', 'confirmPassword', 'confirmPassword','current-password', 'Введите ваш пароль еще раз');
            let label5 = create_label_forInput('input_label', 'confirmPassword', 'Подтвердите пароль');
            inputBlock4.append(input5);
            inputBlock4.append(label5);

            inputBox.append(inputBlock1);
            inputBox.append(inputBlock2);
            inputBox.append(inputBlock3);
            inputBox.append(inputBlock4);
            inputBox.append(inputBlock5);

            let buttonBox = create_div ('button_box');
            let button1 = create_button('button', 'Зарегистрироваться', registerUser);
            let button2 = create_button('button', 'Войти', goToLogin);
            buttonBox.append(button1);
            buttonBox.append(button2);
            inputBox.append(buttonBox);


            registerBlock.append(contentText);
            registerBlock.append(inputBox);
            content.append(registerBlock);
            // Добавляем все элементы в content
            // content.append(contentText);
            // content.append(inputBox);
            // content.append(buttonBox);

            document.body.append(content);

        }
    }

    function create_div (divClass) {
        let content = document.createElement('div');
        let array = divClass.split(' ');
        for (let i = 0, length = array.length; i < length; i++) {
            content.classList.add(array[i]);
        }
        return content;
    }

    function create_form (formClass, method) {
        let form = document.createElement('form');
        form.classList.add(formClass)
        form.setAttribute('method', method);
        form.setAttribute('autocomplete', 'on');
        return form;
    }



    function create_content_text(contentTextClass, text) {
        let contentText = document.createElement('h2');
        contentText.classList.add(contentTextClass);
        contentText.textContent = text;
        return contentText;
    }

    function create_input(inputClass, type, id, name, autocomplete, placeholder) {
        let input = document.createElement('input');
        // input.classList.add(inputClass);
        let array = inputClass.split(' ');
        for (let i = 0, length = array.length; i < length; i++) {
            input.classList.add(array[i]);
        }

        input.setAttribute('type', type);
        input.setAttribute('id', id);
        input.setAttribute('name', name);
        input.setAttribute('autocomplete', autocomplete);
        input.setAttribute('placeholder', placeholder);
        return input;
    }

    function create_label_forInput(labelClass, labelFor, text) {
        let label = document.createElement('label');
        label.classList.add(labelClass);
        label.setAttribute('for', labelFor);
        label.textContent = text;
        return label;
    }

    function create_button(buttonClass, text, clickFunction) {
        let button = document.createElement('button');
        button.classList.add(buttonClass);
        button.textContent = text;
        button.addEventListener("click", clickFunction);
        return button;
    }


    function create_hide_show_eye () {
        let hideShowEye = document.createElement('a');
        hideShowEye.classList.add('password-control');
        hideShowEye.setAttribute('href', '#showHidePassword');
        hideShowEye.addEventListener("click",show_hide_password);
        return hideShowEye;
    }

    function show_hide_password(target){
        let input = document.getElementById('password-input');
        if (input.getAttribute('type') == 'password') {
            target.classList.add('view');
            input.setAttribute('type', 'text');
        } else {
            target.classList.remove('view');
            input.setAttribute('type', 'password');
        }
        return false;
    }

    function goToLogin() {
        document.querySelector(".content_login-reg").remove();
        app.PageLogin.draw();
    }



    function clickLoginButton() {
        alert('Вы успешно зарегистрировались. Или нет. Пока непонятно');
    }

})(AdsBoard);

