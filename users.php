<?php
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

    if (isset($_POST['name'])) {
        $name = $_POST['name'];
    };

    if (isset($_POST['email'])) {
        $email = $_POST['email'];
    }

    if (isset($_POST['phone'])) {
        $phone = $_POST['phone'];
    }

    if (isset($_POST['password'])) {
        $password = $_POST['password'];
    }
    $user->createUser($name, $email, $phone, $password);

//Обновляем данные пользователя с указанным ID
} elseif ($_SERVER['REQUEST_METHOD'] == "PUT") {

    print_r($user->updateUser())  ;

//Удаляем пользователя с указанным ID
} elseif ($_SERVER['REQUEST_METHOD'] == "DELETE") {

    $user->deleteUser();
}




