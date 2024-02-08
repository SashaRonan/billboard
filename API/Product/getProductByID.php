<?php

// Запрос товара по ID

require_once('../../Model/Objects/Product.php');

$product = new \objects\Product();

$productID = $_GET['productID'] ?? '';

$product->getProductByID($productID);
