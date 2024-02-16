<?php

namespace objects;

require_once('..\..\Library\Database.php');

use Database;

class User extends Database
{

    public function __construct()  // конструктор для соединения с базой данных
    {
        Database::connect();
    }

    public function userLogin($userEmail, $userPassword) //Авторизация пользователя
    {
        if (empty($userEmail)) {
            echo json_encode(["status" => false, "message" => "Введите почту."]);
            return;
        }

        if (empty($userPassword)) {
            echo json_encode(["status" => false, "message" => "Введите пароль"]);
            return;
        }

        $query = "SELECT `user_id`, `password` FROM `users` WHERE `email`= ?";
        $argTypes = "s";
        $args = $userEmail;

        $stmt = Database::stmtQuery($query, $argTypes, $args);
        $userStmtResult = Database::stmtResult($stmt);
        $userDB = Database::fetch($userStmtResult);

        if ($userDB == 0) {
            echo json_encode(["status" => false, "message" => "Пользователя с таким email не существует."]);
            return;
        }

        if (md5($userPassword) !== $userDB['password']) {
            echo json_encode(["status" => false, "message" => "Неверный пароль или email."]);
            return;
        }

        $_SESSION['logged_in'] = true;
        $_SESSION['user_id'] = $userDB['user_id'];
        echo json_encode(["status" => true, "message" => "Успешная авторизация"]);
    }

    public function LogOut()  //функция для выхода из системы
    {
        session_destroy();
        echo json_encode(["message" => "Вы вышли из системы."]);
    }

    //Регистрация нового пользователя
    public function registerUser(
        $name,
        $email,
        $phone,
        $password)
    {

        if (!empty($name) && !empty($email) && !empty($phone) && !empty($password)) {

            $hashPassword = md5($password);

            $query = "INSERT INTO `users` (`name`, `email`, `phone`, `password`) VALUES (?, ?, ?, ?)";
            $argTypes = "ssis";
            $args = [$name, $email, $phone, $hashPassword];

            Database::stmtQuery($query, $argTypes, ...$args);

            echo json_encode(["status" => true, "message" => "Вы успешно  зарегистрировались. Войдите в систему"]);
        } else {
            echo json_encode(["status" => false, "message" => "Заполните все поля."]);
        }
    }
}