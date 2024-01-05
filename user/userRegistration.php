<?php

//header("Access-Control-Allow-Origin: *");
//header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
//header("Access-Control-Allow-Headers: Content-Type, Authorization");
//header("Access-Control-Allow-Credentials: true");
//header('Access-Control-Expose-Headers: Content-Encoding,API-Key');

if (!session_start()) {
    session_start();
}

require_once('../objects/User.php');

$user = new objects\User ();

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $inputData = file_get_contents('php://input');
    $userData = json_decode($inputData, true);

    if (isset($userData['name'])) {
        $name = $userData['name'];
    }

    if (isset($userData['phone'])) {
        $phone = $userData['phone'];
    }

    if (isset($userData['email'])) {
        $email = $userData['email'];
    }

    if (isset($userData['password'])) {
        $password = $userData['password'];
    }

    $user->createUser($name, $email, $phone, $password);
}



