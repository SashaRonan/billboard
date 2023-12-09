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
        $selectUserQuery = Database::query("SELECT `user_id`, `name`,`email`,`phone` FROM `users` WHERE `user_id`= '$userId'");
        $user = Database::fetch($selectUserQuery);
        if (mysqli_num_rows($selectUserQuery) == 0) {
            echo "Поиск не дал результатов";
        }
        return $user;
    }

    //функция для получения полного списка пользователей с БД
    public function getUsersList()
    {
        $selectUserQuery = Database::query("SELECT `user_id`, `name`,`email`,`phone` FROM `users`");
        $numRows = Database::getNumRows($selectUserQuery);
        echo($numRows);

        while ($numRows = Database::fetch($selectUserQuery)) {
            $users [] = $numRows;
        }
//        echo "<br>";
//        print_r($users);
//        echo "</br>";
        return ($users);
    }

    //функция для создания нового пользователя
    public function createUser($name, $email, $phone, $password)
    {
        if (!empty($name) && !empty($email) && !empty($phone) && !empty($password)) {
            $saveUser = Database::query("INSERT INTO `users` (`name`, `email`, `phone`, `password`) VALUES ('$name', '$email', '$phone', '$password')");
            echo "Cоздан новый пользователь: Имя: " . $name . " Почта: " . $email . " Номер телефона: " . $phone . " Пароль: " . $password;
        } else {
            echo "Заполните все поля";
        }

    }

    //функция для обновления данных конкретного пользователя
    public function updateUser($url)
    {

        parse_str($url, $userParams);

        // Обновляем данные пользователя, если они переданы в параметрах запроса
        if (isset($userParams['name'])) {
            $user['name'] = $userParams['name'];
        }

        if (isset($userParams['email'])) {
            $user['email'] = $userParams['email'];
        }

        if (isset($userParams['phone'])) {
            $user['phone'] = $userParams['phone'];
        }

        if (isset($userParams['password'])) {
            $user['password'] = $userParams['password'];
        }

        // Получаем id пользователя из параметров запроса
        if (isset($userParams['userId'])) {
            $userId = $userParams['userId'];
        }

        if (!Database::connect()) {

            $updateQuery = "UPDATE `users` SET `name`='{$user['name']}',`email`='{$user['email']}',`phone`='{$user['phone']}',`password`='{$user['password']}' WHERE `user_id` = $userId";
            $updateResult = Database::query($updateQuery);

            if ($updateResult) {
                echo "Параметры пользователя с ID = " . $userId . " обновлены";
            } else {
                echo "Ошибка при обновлении параметров пользователя";
            }
        } else {
            echo "Не указан ID пользователя или отсутствует соединение с базой данных";
        }

    }

    //функция для удаления конкретного пользователя
    public function deleteUser($url)
    {

        parse_str($url, $params);

        if (isset($params['userId'])) {
            $userId = $params['userId'];
            $deleteQuery = "DELETE FROM `users` WHERE `user_id` = $userId";
            Database::query($deleteQuery);
            echo "Пользователь с ID = " . $userId . " удален";
        } else {
            echo "Произошла ошибка";

        }
    }
}