function goToProductList() {
    document.querySelector(".content_login-reg").remove();
    document.querySelector("header").remove();
    AdsBoard.HeaderProductList.draw();
    AdsBoard.ProductList.draw();
}

function goToMyProducts () {

        let userEmail = document.querySelector("#userEmail").value;

        let productURI = 'products.php?email=' + userEmail;


        fetch(productURI, {
            method: 'GET',
            // headers: {'Content-Type': 'application/json'},
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
            .then(
                response => response.json()
            )
            .then(
                result => {
                    console.dir(result);
                    alert('Вы успешно вошли');
                    document.querySelector(".content_login-reg").remove();
                    document.querySelector("header").remove();
                    AdsBoard.HeaderProductList.draw();

                    for (let i = 0; i < result.length; i++) {
                        let item = result[i];
                        let buttonID = "button_id_" + i;
                        AdsBoard.ProductList.draw(buttonID, item['name'], item['phone'], item['product_name'], item['description'], item['price']);
                    }
                }
            )
            .catch(
                error => {
                    alert("Произошла ошибка авторизации");
                    console.dir(error);
                }
            );
}