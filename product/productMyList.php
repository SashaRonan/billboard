<?php

session_start();

require_once('../objects/Product.php');

$product = new \objects\Product();

$product->getAllProductsOfUser();

