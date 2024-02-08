<?php

// Запрос полного списка товара

session_start();

require_once('../../Model/Objects/Product.php');

$product = new \objects\Product();

$product->getProductsList();
