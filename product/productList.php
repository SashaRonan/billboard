<?php

// Запрос полного списка товара

session_start();

require_once('../objects/Product.php');

$product = new \objects\Product();

$product->getProductsList();
