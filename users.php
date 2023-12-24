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
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    if(isset($_GET['email'])) {
        $userEmail = $_GET['email'];
    }

    if(isset($_GET['password'])) {
        $userPassword = $_GET['password'];
    }

//    $userEmail = $_GET['email'] ?? '';
//    $userEPassword = $_GET['password'] ?? '';

    $user->userLogin($userEmail,$userPassword);
    $product ->getAllProductsOfUser($userEmail);
//    $product ->getUProductsList();

//    //Конкретного пользователя по id
//    if (isset($_GET['userId'])) {
//        $userId = $_GET['userId'];
//        $userQuery = $user->getOneUser($userId);
//        //Всего списка пользователей
//    } else {
//        $userQuery = $user->getUsersList();
//    }



    // Записываем нового пользователя в БД
} elseif ($_SERVER['REQUEST_METHOD'] == "POST") {


    $inputData = file_get_contents('php://input');
    $userData = json_decode($inputData, true);



    if (isset($userData["name"])) {
        $name = $userData["name"];
    };

    if (isset($userData["email"])) {
        $email = $userData["email"];
    };

    if (isset($userData["password"])) {
        $password = $userData["password"];
    };

    if (isset($userData["phone"])) {
        $phone = $userData["phone"];
    };


//    $name = $userData["name"] ?? '';
//    $email = $userData["email"] ?? '';
//    $password = $userData["password"] ?? '';
//    $phone = $userData["phone"] ?? '';

    $user->createUser($name, $email, $phone, $password);


    if (isset($userData["phpSessionId"])) {
        $sessionID = $userData["phpSessionId"];
    };

//    $sessionID = $userData["phpSessionId"]?? '';
    $user->LogOut();


//Обновляем данные пользователя с указанным ID
} elseif ($_SERVER['REQUEST_METHOD'] == "PUT") {

    print_r($user->updateUser());

//Удаляем пользователя с указанным ID
} elseif ($_SERVER['REQUEST_METHOD'] == "DELETE") {

    $user->deleteUser();
}




