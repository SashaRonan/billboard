<?php

use objects\Product;

session_start();

require_once('../../Model/Objects/Product.php');

$product = new Product();

$product->getProductsList();
