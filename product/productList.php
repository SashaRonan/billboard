<?php

session_start();

require_once ('../objects/Product.php');

$product = new \objects\Product();

$inputData = file_get_contents('php://input');
$userData = json_decode($inputData, true);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($userData['sessionID'])) {
        $sessionID = $userData['sessionID'];
    }
    $product->getProductsList();
}