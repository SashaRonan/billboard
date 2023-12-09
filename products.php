<?php
require_once('objects/Product.php');

$product = new \objects\Product();

//Запросы с БД
if ($_SERVER["REQUEST_METHOD"] == "GET") {


    if (isset($_GET['productId'])) {  //Поиск конкретного товар по id
        $productId = $_GET['productId'];
        $productQuery = $product->getOneProduct($productId);

    } elseif (isset($_GET['userId'])) {  //Поиск всех товары одного пользователя по id
        $userId = $_GET['userId'];
        $productQuery = $product->getAllProductsOfUser($userId);
    } elseif (isset($_GET['productName'])) {  //Поиск товаров по названию
        $productName = urldecode($_GET['productName']);
        $productQuery = $product->getAllProductsByName($productName);
    } else {   //Всего списка товаров с БД
        $productQuery = $product->getUProductsList();
    }

    echo "<br>";
    print_r($productQuery);
    echo "</br>";


// Записываем нового пользователя в БД
} elseif ($_SERVER['REQUEST_METHOD'] == "POST") {

    if (isset($_POST['productName'])) {
        $productName = $_POST['productName'];
    };

    if (isset($_POST['description'])) {
        $description = $_POST['description'];
    }

    if (isset($_POST['userId'])) {
        $userId = $_POST['userId'];
    }

    if (isset($_POST['price'])) {
        $price = $_POST['price'];
    }

    if (isset($_POST['productURL'])) {
        $productURL = $_POST['productURL'];
    } else {
        $productURL = '';
    }


    $product->createProduct($productName, $description, $userId, $price, $productURL);


//Обновляем данные пользователя с указанным ID
} elseif ($_SERVER['REQUEST_METHOD'] == "PUT") {
    print_r($product->updateProduct())  ;


//Удаляем пользователя с указанным ID
} elseif ($_SERVER['REQUEST_METHOD'] == "DELETE") {

    $product->deleteProduct();
}