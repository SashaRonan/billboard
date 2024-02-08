<?php

namespace config;
class Database
{
    private static  $connection;

    // Функция для соединения с БД:
    public static function connect()
    {
        if (empty(self::$connection)) {
            self::$connection = mysqli_connect('localhost', 'root', '', 'billboard');
        } elseif (!self::$connection) {
            die('Ошибка подключения к базе данных: ' . mysqli_connect_error());
        }
        return self::$connection;
    }

    // Функция для формирования тела запроса БД
    public static function query($sqlString)
    {
        return mysqli_query(self::$connection, $sqlString);
    }

    // Функция для создания ассоциативного массива
    public static function fetch($query)
    {
        return mysqli_fetch_assoc($query);
    }
}