<?php

// Удаление товара

session_start();

require_once('../../Model/Objects/Product.php');

$product = new \objects\Product();

$productID = $_GET['productID'] ?? '';

$product->deleteProduct($productID);

