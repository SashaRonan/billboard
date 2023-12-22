<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Expose-Headers: Content-Encoding,API-Key');

require_once('objects/User.php');
$user = new \objects\User ();

//Запросы
if ($_SERVER["REQUEST_METHOD"] == "GET") {

    //Конкретного пользователя по id
    if (isset($_GET['userId'])) {
        $userId = $_GET['userId'];
        $userQuery = $user->getOneUser($userId);
        //Всего списка пользователей
    } else {
        $userQuery = $user->getUsersList();
    }


    // Записываем нового пользователя в БД
} elseif ($_SERVER['REQUEST_METHOD'] == "POST") {


//     Получаем тело запроса в виде строки
//    $requestData = file_get_contents('php://input');
//    // Преобразуем строку в объект JSON
//    $params = json_decode($requestData);
//
    if (isset($_POST['name'])) {
        $name = $_POST['name'];
    }

    if (isset($_POST['name'])) {
        $email = $_POST['email'];
    }

    if (isset($_POST['name'])) {
        $phone = $_POST['phone'];
    }

    if (isset($_POST['name'])) {
        $password = $_POST['password'];
    }
//
//    $user->createUser($name, $email, $phone, $password);

//    $inputData = file_get_contents('php://input');
//    $userData = json_decode($inputData, true);
//
//    $name = $userData["name"] ?? '';
//    $email = $userData["email"] ?? '';
//    $password = $userData["password"] ?? '';
//    $phone = $userData["phone"] ?? '';

////    echo json_encode($userData);
//
    $user->createUser($name, $email, $phone, $password);


//    if (isset($userData['name'])) {
//        $name = $userData['name'];
//    }
//
//    if (isset($userData['email'])) {
//        $email = $userData['email'];
//    }
//
//    if (isset($userData['phone'])) {
//        $phone = $userData['phone'];
//    }
//
//    if (isset($userData['password'])) {
//        $password = $userData['password'];
//    }
//    $user->createUser($name, $email, $phone, $password);
//$result = $user->createUser($name, $email, $phone, $password);
//echo ($result);



//Обновляем данные пользователя с указанным ID
} elseif ($_SERVER['REQUEST_METHOD'] == "PUT") {

    print_r($user->updateUser());

//Удаляем пользователя с указанным ID
} elseif ($_SERVER['REQUEST_METHOD'] == "DELETE") {

    $user->deleteUser();
}




