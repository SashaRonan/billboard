<?php

session_start();

require_once('../objects/Product.php');

$product = new \objects\Product();

$userId = $_SESSION['user_id'];

//$putdata = file_get_contents('php://input', true);
//$productParams = explode('&', $putdata);
//
//$_PATCH = [];
//foreach ($productParams as $pair) {
//    $item = explode('=', $pair);
//    if (count($item) == 2) {
//        $_PATCH[urldecode($item[0])] = urldecode($item[1]);
//    }
//}


$putData = file_get_contents('php://input');
$_PATCH = json_decode($putData, true);

$product->updateProduct();