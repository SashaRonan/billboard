(function (app) {
    app.PageRegister = {
        draw: function () {

            // Создаем основной контейнер "content"
            let content = document.createElement('div');
            content.classList.add('content');

            // Создаем заголовок "Вход"
            let contentText = document.createElement('h2');
            contentText.classList.add('content_text');
            contentText.textContent = 'Регистрация';

            // Создаем инпуты
            let inputBox = document.createElement('div');
            inputBox.classList.add('input_box');


            // Инпут для ввода почты
            let inputBlock1 = document.createElement('div');
            inputBlock1.classList.add('input_block');

            let input1 = document.createElement('input');
            input1.classList.add('input');
            input1.setAttribute('type', 'email');
            input1.setAttribute('id', 'email');
            input1.setAttribute('name', 'email');
            input1.setAttribute('placeholder', 'Введите ваш email');

            let label1 = document.createElement('label');
            label1.classList.add('input_label');
            label1.setAttribute('for', 'email');
            label1.textContent = 'E-mail';

            inputBlock1.append(input1);
            inputBlock1.append(label1);

            // Инпут для ввода телефона
            let inputBlock2 = document.createElement('div');
            inputBlock2.classList.add('input_block');

            let input2 = document.createElement('input');
            input2.classList.add('input');
            input2.setAttribute('type', 'tel');
            input2.setAttribute('id', 'phone');
            input2.setAttribute('name', 'phone');
            input2.setAttribute('placeholder', 'Введите ваш номер телефона');

            let label2 = document.createElement('label');
            label2.classList.add('input_label');
            label2.setAttribute('for', 'phone');
            label2.textContent = 'Телефон';

            inputBlock2.append(input2);
            inputBlock2.append(label2);

            // Инпут для ввода ФИО
            let inputBlock3 = document.createElement('div');
            inputBlock3.classList.add('input_block');

            let input3 = document.createElement('input');
            input3.classList.add('input');
            input3.setAttribute('type', 'text');
            input3.setAttribute('id', 'name');
            input3.setAttribute('name', 'name');
            input3.setAttribute('placeholder', 'Введите вашу фамилия, имя, отчество');

            let label3 = document.createElement('label');
            label3.classList.add('input_label');
            label3.setAttribute('for', 'name');
            label3.textContent = 'ФИО';

            inputBlock3.append(input3);
            inputBlock3.append(label3);


            // Инпут для ввода пароля
            let inputBlock4 = document.createElement('div');
            inputBlock4.classList.add('input_block');

            let input4 = document.createElement('input');
            input4.classList.add('input');
            input4.setAttribute('type', 'password');
            input4.setAttribute('id', 'password');
            input4.setAttribute('name', 'password');
            input4.setAttribute('placeholder', 'Введите ваш пароль');

            let label4 = document.createElement('label');
            label4.classList.add('input_label');
            label4.setAttribute('for', 'password');
            label4.textContent = 'Пароль';

            inputBlock4.append(input4);
            inputBlock4.append(label4);

            // Инпут для ввода подтверждения пароля
            let inputBlock5 = document.createElement('div');
            inputBlock5.classList.add('input_block');

            let input5 = document.createElement('input');
            input5.classList.add('input');
            input5.setAttribute('type', 'password');
            input5.setAttribute('id', 'password');
            input5.setAttribute('name', 'password');
            input5.setAttribute('placeholder', 'Введите ваш пароль еще раз');

            let label5 = document.createElement('label');
            label5.classList.add('input_label');
            label5.setAttribute('for', 'password');
            label5.textContent = 'Подтверждение пароля';

            inputBlock4.append(input5);
            inputBlock4.append(label5);

            inputBox.append(inputBlock1);
            inputBox.append(inputBlock2);
            inputBox.append(inputBlock3);
            inputBox.append(inputBlock4);
            inputBox.append(inputBlock5);

            // Создаем кнопки
            let buttonBox = document.createElement('div');
            buttonBox.classList.add('button_box');

            let button1 = document.createElement('button');
            button1.classList.add('button');
            button1.textContent = 'Зарегистрироваться';
            button1.addEventListener("click", clickLoginButton);

            let button2 = document.createElement('button');
            button2.classList.add('button');
            button2.textContent = 'Войти';
            button2.addEventListener("click", goToLogin);

            buttonBox.append(button1);
            buttonBox.append(button2);

            // Добавляем все элементы в content

            content.append(contentText);
            content.append(inputBox);
            content.append(buttonBox);

            document.body.append(content);

        }
    }

    function goToLogin() {
        document.querySelector(".content").remove();
        app.PageLogin.draw();
    }

    function clickLoginButton() {
        alert('Вы успешно зарегистрировались. Или нет. Пока непонятно');
    }


})(AdsBoard);