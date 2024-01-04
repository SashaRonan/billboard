<?php

session_start();

require_once('../objects/Product.php');

$product = new \objects\Product();

$productID = $_GET['productID'] ?? '';
$product->deleteProduct($productID);

