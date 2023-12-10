(function (app) {
    app.PageLogin = {
        draw: function () {

            // Создаем основной контейнер "content"
            let content = document.createElement('div');
            content.classList.add('content');

            // Создаем заголовок "Вход"
            let contentText = document.createElement('h2');
            contentText.classList.add('content_text');
            contentText.textContent = 'Вход';

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

            // Инпут для ввода пароля
            let inputBlock2 = document.createElement('div');
            inputBlock2.classList.add('input_block');

            let input2 = document.createElement('input');
            input2.classList.add('input');
            input2.setAttribute('type', 'password');
            input2.setAttribute('id', 'password');
            input2.setAttribute('name', 'password');
            input2.setAttribute('placeholder', 'Введите ваш пароль');

            let label2 = document.createElement('label');
            label2.classList.add('input_label');
            label2.setAttribute('for', 'password');
            label2.textContent = 'Пароль';

            inputBlock2.append(input2);
            inputBlock2.append(label2);

            inputBox.append(inputBlock1);
            inputBox.append(inputBlock2);

            // Создаем кнопки
            let buttonBox = document.createElement('div');
            buttonBox.classList.add('button_box');

            let button1 = document.createElement('button');
            button1.classList.add('button');
            button1.textContent = 'Войти';
            button1.addEventListener("click", clickRegisterButton);

            let button2 = document.createElement('button');
            button2.classList.add('button');
            button2.textContent = 'Зарегистрироваться';
            button2.addEventListener("click", goToRegister);

            buttonBox.append(button1);
            buttonBox.append(button2);

            // Добавляем все элементы в content

            content.append(contentText);
            content.append(inputBox);
            content.append(buttonBox);

            document.body.append(content);

        }
    }

    function goToRegister() {
       document.querySelector(".content").remove();
        app.PageRegister.draw();
    }

    function clickRegisterButton() {
        alert('Вы успешно вошли. Или нет. Пока непонятно');
    }


})(AdsBoard);