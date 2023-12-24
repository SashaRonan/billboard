<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Expose-Headers: Content-Encoding,API-Key');
session_start();

require_once ('../objects/User.php');
require_once ('../objects/Product.php');

$user = new objects\User ();
$product = new objects\Product();

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $inputData = file_get_contents('php://input');
    $userData = json_decode($inputData, true);

    if (isset($userData['email'])) {
        $userEmail = $userData['email'];
    }

    if (isset($userData['password'])) {
        $userPassword = $userData['password'];
    }

    $user->userLogin($userEmail, $userPassword);
//    $product->getAllProductsOfUser($userEmail);
    $product ->getUProductsList();
}