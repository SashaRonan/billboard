<?php

// Добавление нового товара

session_start();

require_once('../../Model/Objects/Product.php');

$product = new \objects\Product();

$userId = $_SESSION['user_id'];

if (isset($_POST['product_name']) && isset($_POST['product_description']) && isset($_POST['product_price'])) {
    $productName = $_POST['product_name'];
    $description = $_POST['product_description'];
    $price = $_POST['product_price'];
    $product->createProduct($productName, $description, $userId, $price);

} else {
    echo json_encode(["status" => false, "message" => "Заполните все поля."]);
}













