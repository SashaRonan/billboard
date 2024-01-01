<?php
session_start();

require_once('../objects/Product.php');

$product = new \objects\Product();

echo "<pre>";
print_r($_FILES);
echo "<pre>";


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $productImgPath = "../img/products/" . $_FILES["myProduct"]["name"];
    $productImg = "img/products/" . $_FILES["myProduct"]["name"];

echo '<pre>';

    if (isset($_POST['product_name'])) {
        $productName = $_POST['product_name'];
    }

    if (isset($_POST['product_description'])) {
        $description = $_POST['product_description'];
    }

    if (isset($_POST['product_price'])) {
        $price = $_POST['product_price'];
    }

    $userId = $_SESSION['user_id'];

    if (move_uploaded_file($_FILES["myProduct"]["tmp_name"],$productImgPath)) {
        $product->createProduct($productName, $description, $userId, $price, $productImg);
    }
}

