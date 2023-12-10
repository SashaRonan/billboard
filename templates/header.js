(function (app) {
    app.Header = {
        draw: function () {

            let header = document.createElement('header');
            header.classList.add('header');

            let container = document.createElement('div');
            container.classList.add('container');

            let headerText = document.createElement('h1');
            headerText.classList.add('header_text');
            headerText.textContent = 'МояОбъява.RU';

            container.append(headerText);
            header.append(container);

            // Добавление заголовка на страницу
            document.body.append(header);

        }
    }
})(AdsBoard);