<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Expose-Headers: Content-Encoding,API-Key');
session_start();

require_once ('../objects/User.php');

$user = new objects\User ();


if ($_SERVER["REQUEST_METHOD"] == "POST") {

//    $inputData = file_get_contents('php://input');
//    $userData = json_decode($inputData, true);

//    if (isset($userData['email'])) {
//        $userEmail = $userData['email'];
//    }
//
//    if (isset($userData['password'])) {
//        $userPassword = $userData['password'];
//    }

    $user->logOut();
}