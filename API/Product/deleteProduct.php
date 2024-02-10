<?php

use objects\Product;

session_start();

require_once('../../Model/Objects/Product.php');

$product = new Product();

$productID = $_GET['productID'] ?? '';

$product->deleteProduct($productID);

