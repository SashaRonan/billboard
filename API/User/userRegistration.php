<?php

if (!session_start()) {
    session_start();
}

require_once('../../Model/Objects/User.php');

$user = new objects\User ();

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $inputData = file_get_contents('php://input');
    $userData = json_decode($inputData, true);

    $name = $userData['name'];
    $phone = $userData['phone'];
    $email = $userData['email'];
    $password = $userData['password'];

    if (isset($name) && isset($phone) && isset($email) && isset($password)) {
        $user->registerUser($name, $email, $phone, $password);
    }

}



