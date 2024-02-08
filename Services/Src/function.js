
(function (app) {
    app.Functions = {

        // Загрузка превьюшки изображения при добавлении нового товара
        loadPreviewAdd: function (event) {
            let output = document.getElementById('imgPreview');
            output.src = URL.createObjectURL(event.target.files[0]);
            output.onload = function () {
                URL.revokeObjectURL(output.src) // очистка
            }
            return output.onload;
        },

        // Загрузка изображения при редактировании нового товара
        loadPreviewEdit: function () {
            let getID = this.id.split('_')[2];
            let output = document.querySelector('#img_' + getID);
            output.src = URL.createObjectURL(event.target.files[0]);
            output.onload = function () {
                URL.revokeObjectURL(output.src)
            }
            return output.onload;
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

        // Показать-скрыть телефон
        show_hide_phone: function () {

            let numID = this.id.split('_')[1];
            let button = document.querySelector('#buttonID_' + numID);
            let phone = document.querySelector('#userPhone_' + numID);

            let phoneDisplay = phone.style.display;

            if (phoneDisplay === 'none') {
                button.style.display = 'none';
                phone.style.display = 'inline-flex'
            } else if (phoneDisplay === '') {
                button.style.display = 'none';
                phone.style.display = 'inline-flex'
            } else {
                button.style.display = 'block';
                phone.style.display = 'none';
            }
        },


    }
})(BillBoard);