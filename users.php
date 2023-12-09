<?php
require_once('objects/User.php');

$user = new \objects\User ();

//Запросы с БД
if ($_SERVER["REQUEST_METHOD"] == "GET") {

    //Конкретного пользователя по id
    if (isset($_GET['userId'])) {
        $userId = $_GET['userId'];
        $userQuery = $user->getOneUser($userId);
        //Всего списка пользователей
    } else {
        $userQuery = $user->getUsersList();
    }

//    echo ($userQuery);
    echo "<br>";
    print_r($userQuery);
    echo "</br>";


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

    $url = 'http://localhost/billboard/users_php?' . '&userId=' . '10' . '&name=' . urlencode('Мамочкин Ацетон Воландемортович') . '&email=' . urlencode('afichi@gmail.com') . '&phone=895454666545' . '&password=' . urlencode('aksjhdvv684');
    $user->updateUser($url);


//Удаляем пользователя с указанным ID
} elseif ($_SERVER['REQUEST_METHOD'] == "DELETE") {

    $url = 'http://localhost/billboard/users_php?' . '&userId=' . '10';
    $user->deleteUser($url);
}




