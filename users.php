<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Expose-Headers: Content-Encoding,API-Key');
session_start();

require_once('objects/User.php');
require_once ('objects/Product.php');
$user = new \objects\User ();
$product = new \objects\Product();

//Запросы

//Обновляем данные пользователя с указанным ID
if ($_SERVER['REQUEST_METHOD'] == "PUT") {

    print_r($user->updateUser());

//Удаляем пользователя с указанным ID
} elseif ($_SERVER['REQUEST_METHOD'] == "DELETE") {

    $user->deleteUser();
}




