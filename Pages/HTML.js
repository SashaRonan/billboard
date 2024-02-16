(function (app) {
    app.Create = { // Функции для создания элементов HTML страницы

        div: function (divClass) {
            let div = document.createElement('div');
            let array = divClass.split(' ');
            for (let i = 0, length = array.length; i < length; i++) {
                div.classList.add(array[i]);
            }
            return div;
        },

        form: function (formClass) {
            let form = document.createElement('form');
            let array = formClass.split(' ');
            for (let i = 0, length = array.length; i < length; i++) {
                form.classList.add(array[i]);
            }
            return form;
        },

        divWithID: function (divClass, id) {
            let div = document.createElement('div');
            let array = divClass.split(' ');
            for (let i = 0, length = array.length; i < length; i++) {
                div.classList.add(array[i]);
            }
            div.setAttribute('id', id);
            return div;
        },

        paragraph: function (paragraphClass, id, text) {
            let paragraph = document.createElement('p');
            let array = paragraphClass.split(' ');
            for (let i = 0, length = array.length; i < length; i++) {
                paragraph.classList.add(array[i]);
            }
            paragraph.id = id;
            paragraph.textContent = text;
            return paragraph;
        },

        header: function (headerClass, id, text) {
            let header = document.createElement('h1');
            let array = headerClass.split(' ');
            for (let i = 0, length = array.length; i < length; i++) {
                header.classList.add(array[i]);
            }
            header.id = id;
            header.textContent = text;
            return header;
        },

        link: function (linkClass, id, clickFunction) {
            let link = document.createElement('a');
            link.classList.add(linkClass);
            link.setAttribute('id', id);
            link.addEventListener("click", clickFunction);
            return link;
        },

        input: function (inputClass, id, type, placeholder) {
            let input = document.createElement('input');
            input.classList.add(inputClass);
            input.id = id;
            input.type = type;
            input.placeholder = placeholder;
            return input;
        },

        inputFile: function (inputFileClass, id, loadFunction) {
            let input = document.createElement('input');
            input.classList.add(inputFileClass);
            input.setAttribute('type', 'file');
            input.setAttribute('id', id);
            input.setAttribute('accept', 'image/*');
            input.addEventListener('change', loadFunction);
            return input;
        },

        label: function (labelClass, id, labelFor, text) {
            let label = document.createElement('label');
            label.classList.add(labelClass);
            label.id = id;
            label.setAttribute('for', labelFor);
            label.textContent = text;
            return label;
        },

        button: function (buttonClass, text, clickFunction) {
            let button = document.createElement('button');

            let array = buttonClass.split(' ');
            for (let i = 0, length = array.length; i < length; i++) {
                button.classList.add(array[i]);
            }

            // button.classList.add(buttonClass);
            button.textContent = text;
            button.addEventListener("click", clickFunction);
            return button;
        },

        buttonWithID: function (buttonClass, id, text, clickFunction) {
            let button = document.createElement('button');

            let array = buttonClass.split(' ');
            for (let i = 0, length = array.length; i < length; i++) {
                button.classList.add(array[i]);
            }

            // button.classList.add(buttonClass);
            button.textContent = text;
            button.id = id;
            button.addEventListener("click", clickFunction);
            return button;
        },

        textarea: function (textareaClass, id, cols, rows, placeholder) {
            let textarea = document.createElement('textarea');
            textarea.classList.add(textareaClass);
            textarea.id = id;
            textarea.cols = cols;
            textarea.rows = rows;
            textarea.placeholder = placeholder;
            return textarea;
        },

        span: function (spanClass, id) {
            let span = document.createElement('span');
            let array = spanClass.split(' ');
            for (let i = 0, length = array.length; i < length; i++) {
                span.classList.add(array[i]);
            }
            span.id = id;
            return span
        },

        menuIcon: function () {
            let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.classList.add("ham", "hamRotate", "ham4");
            svg.setAttribute("viewBox", "0 0 100 100");
            svg.setAttribute("viewBox", "0 0 100 100");
            svg.setAttribute("width", "80");
            svg.setAttribute("height", "80");
            svg.setAttribute("onclick", "this.classList.toggle('active')");

            let pathTop = document.createElementNS("http://www.w3.org/2000/svg", "path");
            pathTop.classList.add("line", "top");
            pathTop.setAttribute("d", "m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20");

            let pathMiddle = document.createElementNS("http://www.w3.org/2000/svg", "path");
            pathMiddle.classList.add("line", "middle");
            pathMiddle.setAttribute("d", "m 70,50 h -40");

            let pathBottom = document.createElementNS("http://www.w3.org/2000/svg", "path");
            pathBottom.classList.add("line", "bottom");
            pathBottom.setAttribute("d", "m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20");

            svg.appendChild(pathTop);
            svg.appendChild(pathMiddle);
            svg.appendChild(pathBottom);
            return svg;
        },

        addButton: function (clickFunction) {

            let button = document.createElement('button');
            button.className = 'product_button_add';

            let signDiv = document.createElement('div');
            signDiv.className = 'product_button_plus';

            let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('width', '800px');
            svg.setAttribute('height', '800px');
            svg.setAttribute('viewBox', '0 0 48 48');
            svg.setAttribute('fill', 'none');

            let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('width', '48');
            rect.setAttribute('height', '48');
            rect.setAttribute('fill', 'white');
            rect.setAttribute('fill-opacity', '0.01');

            let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', 'M30 4H18V18H4V30H18V44H30V30H44V18H30V4Z');
            path.setAttribute('fill', '#284459');
            path.setAttribute('stroke', '#FFFFFF');
            path.setAttribute('stroke-width', '4');
            path.setAttribute('stroke-linejoin', 'round');

            svg.appendChild(rect);
            svg.appendChild(path);

            signDiv.appendChild(svg);

            let textDiv = document.createElement('div');
            textDiv.className = 'product_button_text';
            textDiv.textContent = 'Добавить';

            button.addEventListener("click", clickFunction);

            button.appendChild(signDiv);
            button.appendChild(textDiv);

            return button

        },

        img: function (imgClass, id, src) {
            let img = document.createElement('img');
            img.setAttribute('id', id);
            img.classList.add(imgClass);
            img.src = src;
            return img;
        }

    }
})(BillBoard);