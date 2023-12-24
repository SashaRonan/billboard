 (function (app) {
    app.PageLogin = {
        draw: function () {

            let content         = create_content_div('content_login-reg');
            let contentText = create_content_text('content_text', 'Вход')

            let inputBox         = create_form ('input_box', 'GET');

            let inputBlock1      = create_input_block('input_block');
            let input1         = create_input('input', 'email', 'userEmail', 'email', 'on','Введите ваш email');
            let label1         = create_label_forInput('input_label', 'email', 'E-mail');
            inputBlock1.append(input1);
            inputBlock1.append(label1);

            let inputBlock2      = create_input_block('input_block');
            let input2         = create_input('input', 'password', 'userPassword', 'password','current-password', 'Введите ваш пароль');
            let label2         = create_label_forInput('input_label', 'password', 'Пароль');
            inputBlock2.append(input2);
            inputBlock2.append(label2);

            inputBox.append(inputBlock1);
            inputBox.append(inputBlock2);

            // Создаем кнопки
            let buttonBox        = create_button_box('button_box');
            let button1       = create_button('button', 'Войти', loginUser);
            let button2       = create_button('button', 'Зарегистрироваться', goToRegister);


            buttonBox.append(button1);
            buttonBox.append(button2);

            // Добавляем все элементы в content
            content.append(contentText);
            content.append(inputBox);
            content.append(buttonBox);

            document.body.append(content);

        }
    }

    function create_content_div(contentClass) {
        let content = document.createElement('div');
        content.classList.add(contentClass);
        return content;
    }

    function create_content_text(textClass, text) {
        let contentText = document.createElement('h2');
        contentText.classList.add(textClass);
        contentText.textContent = text;
        return contentText;
    }

    function create_input_box(inputBoxClass) {
        let inputBox = document.createElement('div');
        inputBox.classList.add(inputBoxClass);
        return inputBox;
    }

    function create_input_block(inputBlockClass) {
        let inputBlock = document.createElement('div');
        inputBlock.classList.add(inputBlockClass);
        return inputBlock;
    }

    function create_input(inputClass, type, id, name, autocomplete, placeholder) {
        let input = document.createElement('input');
        input.classList.add(inputClass);
        input.setAttribute('type', type);
        input.setAttribute('id', id);
        input.setAttribute('name', name);
        input.setAttribute('autocomplete', autocomplete);
        input.setAttribute('placeholder', placeholder);
        return input;
        return input;
    }

    function create_form (formClass, method) {
        let form = document.createElement('form');
        form.classList.add(formClass)
        form.setAttribute('method', method);
        return form;
    }

    function create_label_forInput(labelClass, labelFor, text) {
        let label = document.createElement('label');
        label.classList.add(labelClass);
        label.setAttribute('for', labelFor);
        label.textContent = text;
        return label;
    }



    function create_button_box(buttonBoxClass) {
        let buttonBox = document.createElement('div');
        buttonBox.classList.add(buttonBoxClass);
        return buttonBox;
    }

    function create_button(buttonClass, text, clickFunction) {
        let button = document.createElement('button');
        button.classList.add(buttonClass);
        button.textContent = text;
        button.addEventListener("click", clickFunction);
        return button;
    }

    function goToRegister() {
        document.querySelector(".content_login-reg").remove();
        app.PageRegister.draw();
    }




})(AdsBoard);