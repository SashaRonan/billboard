<?php

use objects\Product;

require_once('../../Model/Objects/Product.php');

$product = new Product();

$productID = $_GET['productID'] ?? '';

$product->getProductByID($productID);
