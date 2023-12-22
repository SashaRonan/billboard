<?php

namespace objects;

require_once('config/Database.php');

use config\Database;

class User extends Database
{

    // конструктор для соединения с базой данных
    public function __construct()
    {
        Database::connect();
    }

    //функция для получения одного пользователя по ID с БД
    public function getOneUser($userId)
    {
        $stmt = mysqli_prepare(Database::connect(), "SELECT `user_id`, `name`,`email`,`phone` FROM `users` WHERE `user_id`= ?");
        mysqli_stmt_bind_param($stmt, "i", $userId);
        mysqli_stmt_execute($stmt);
        $user = mysqli_stmt_get_result($stmt);
        if (mysqli_stmt_num_rows($stmt) == 0) {
            echo "Поиск не дал результатов";
        }
        return mysqli_fetch_assoc($user);

    }

    //функция для получения полного списка пользователей с БД
    public function getUsersList()
    {
        $selectUserQuery = Database::query("SELECT `user_id`, `name`,`email`,`phone` FROM `users`");
        $numRows = Database::getNumRows($selectUserQuery);
        while ($numRows = Database::fetch($selectUserQuery)) {
            $users [] = $numRows;
        }
        return ($users);
    }

    //функция для создания нового пользователя
    public function createUser($name, $email, $phone, $password)
    {
        if (!empty($name) && !empty($email) && !empty($phone) && !empty($password)) {
            $stmt = mysqli_prepare(Database::connect(), "INSERT INTO `users` (`name`, `email`, `phone`, `password`) VALUES (?, ?, ?, ?)");
            mysqli_stmt_bind_param($stmt, "ssis", $name, $email, $phone, $password);
            mysqli_stmt_execute($stmt);
           $messege =  "Cоздан новый пользователь: Имя: " . $name . " Почта: " . $email . " Номер телефона: " . $phone . " Пароль: " . $password;
           return ($messege);
        } else {
//            echo "Заполните все поля";
        }
    }

    //функция для обновления данных конкретного пользователя
    public function updateUser()
    {
        //  Создаем массив $_PUT, в который записываем параметры с полученного файла методом PUT
        $putdata = file_get_contents('php://input', true);
        $userParams = explode('&', $putdata);
        $_PUT = [];
        foreach ($userParams as $pair) {
            $item = explode('=', $pair);
            if (count($item) == 2) {
                $_PUT[urldecode($item[0])] = urldecode($item[1]);
            }
        }

        print_r($_PUT);

        if (!empty($_PUT['userId'])) {

            $userIdString = "`user_id` = '" . $_PUT['userId'] . "'";

            // Проверяем, какие из параметров пользователя необходимо обновить и строим нужный запрос SQL
            if (!empty($_PUT['name']) && !empty($queryString)) {
                $queryString = $queryString . ", `name`='" . $_PUT['name'] . "'";
            } elseif (!empty($_PUT['name']) && empty($queryString)) {
                $queryString = "`name`='" . $_PUT['name'] . "'";
            }

            if (!empty($_PUT["email"]) && !empty($queryString)) {
                $queryString = $queryString . ", `email`='" . $_PUT['email'] . "'";
            } elseif (!empty($_PUT["email"]) && empty($queryString)) {
                $queryString = "`email`='" . $_PUT['email'] . "'";
            }

            if (!empty($_PUT["phone"]) && !empty($queryString)) {
                $queryString = $queryString . ", `phone`='" . $_PUT['phone'] . "'";
            } elseif (!empty($_PUT["phone"]) && empty($queryString)) {
                $queryString = "`phone`='" . $_PUT['phone'] . "'";
            }

            if (!empty($_PUT["password"]) && !empty($queryString)) {
                $queryString = $queryString . ", `password`='" . $_PUT['password'] . "'";
            } elseif (!empty($_PUT["password"]) && empty($queryString)) {
                $queryString = "`password`='" . $_PUT['password'] . "'";
            }

            Database::query("UPDATE `users` SET" . $queryString . "WHERE" . $userIdString);

            echo "Параметры пользователя с ID = " . $_PUT['userId'] . " обновлены";

//              echo json_encode(["result" => true]);

        } else {
            echo "Не указан ID пользователя";
//            echo json_encode(["result" => false, "messege" => "Не верен параметр name "]);
        }
    }

    //функция для удаления конкретного пользователя
    public function deleteUser()
    {
        //  Создаем массив $_DELETE, в который записываем ID удаляемого пользователя.
        $putdata = file_get_contents('php://input', true);
        $productParams = explode('&', $putdata);
        $_DELETE = [];
        foreach ($productParams as $pair) {
            $item = explode('=', $pair);
            if (count($item) == 2) {
                $_DELETE[urldecode($item[0])] = urldecode($item[1]);
            }
        }

        if (isset($_DELETE['userId'])) {
            $stmt = mysqli_prepare(Database::connect(), "DELETE FROM `users` WHERE `user_id` = ?");
            mysqli_stmt_bind_param($stmt, "i", $_DELETE['userId']);
            mysqli_stmt_execute($stmt);
            echo "Товар с ID = " . $_DELETE['userId'] . " удален";
//                echo json_encode(["result" => true]);
        } else {
            echo "Произошла ошибка";
//            echo json_encode(["result" => false, "messege" => "Не верен параметр name "]);
        }
    }

}