<?php

session_start();

require_once('../objects/Product.php');

$product = new \objects\Product();

$userId = $_SESSION['user_id'];

if (isset($_FILES["myProduct"]["name"])) {
    $productImg = "img/products/" . $_FILES["myProduct"]["name"];
    $productImgPath = "../img/products/" . $_FILES["myProduct"]["name"];
    move_uploaded_file($_FILES["myProduct"]["tmp_name"], $productImgPath);
} else {
    $productImg = "img/products/" . $_POST["product_file"];
    $productImgPath = "../img/products/" . $_POST["product_file"];
}

if (isset($_POST['product_name']) && isset($_POST['product_description']) && isset($_POST['product_price'])) {
    $productID = $_POST['product_id'];
    $productName = $_POST['product_name'];
    $description = $_POST['product_description'];
    $price = $_POST['product_price'];

    $product->updateProduct($productID, $productName, $description, $price, $productImg);

} else {
    echo json_encode(["status" => false, "message" => "Ошибка обновления."]);
}

