<?php


namespace objects;

require_once('..\config\Database.php');


use config\Database;

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

        $stmt = mysqli_prepare(Database::connect(), "SELECT `user_id`, `password` FROM `users` WHERE `email`= ?");
        mysqli_stmt_bind_param($stmt, "s", $userEmail);
        mysqli_stmt_execute($stmt);
        $userStmtResult = mysqli_stmt_get_result($stmt);
        $userDB = mysqli_fetch_assoc($userStmtResult);

        if ($userDB == 0) {
            echo json_encode(["status" => false, "message" => "Пользователя с таким email не существует."]);
            return;
        }

        if (md5($userPassword) !== $userDB['password']) {
            echo json_encode(["status" => false, "message" => "Неверный пароль."]);
            return;
        }

        $_SESSION['logged_in'] = true;
        $_SESSION['user_id'] = $userDB['user_id'];
        echo json_encode(["status" => true, "message" => "Успешная авторизация"]);
    }


    public function LogOut()  //функция для выхода из системы
    {
        session_destroy();
    }


    //Регистрация нового пользователя
    public function createUser(
        $name,
        $email,
        $phone,
        $password)
    {
        if (!empty($name) && !empty($email) && !empty($phone) && !empty($password)) {
            $stmt = mysqli_prepare(Database::connect(), "INSERT INTO `users` (`name`, `email`, `phone`, `password`) VALUES (?, ?, ?, ?)");
            $hashPassword = md5($password);
            mysqli_stmt_bind_param($stmt, "ssis", $name, $email, $phone, $hashPassword);
            mysqli_stmt_execute($stmt);
            echo json_encode(["status" => true, "message" => "Вы успешно  зарегистрировались. Войдите в систему"]);
        } else {
            echo json_encode(["status" => false, "message" => "Заполните все поля."]);
        }
    }

}