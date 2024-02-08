<?php

if (!session_start()) {
    session_start();
}

require_once('../../Model/Objects/User.php');
require_once('../../Model/Objects/Product.php');

$user = new objects\User ();
$product = new objects\Product();

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $inputData = file_get_contents('php://input');
    $userData = json_decode($inputData, true);


    $userEmail = $userData['email'] ?? '';
    $userPassword = $userData['password'] ?? '';

    $user->userLogin($userEmail, $userPassword);
}