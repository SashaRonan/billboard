<?php

namespace config;
class Database
{
    private static $connection;

    // функция для соединения с БД:
    public static function connect()
    {
        if (empty(self::$connection)) {
            self::$connection = mysqli_connect('localhost', 'root', '', 'billboard');
        } elseif (!self::$connection) {
            die('Ошибка подключения к базе данных: ' . mysqli_connect_error());
        }
    }

    // функция для формирования тела запроса БД
    public static function query($sqlString)
    {
        return mysqli_query(self::$connection, $sqlString);
    }

    // функция для создания ассоциативного массива
    public static function fetch($query)
    {
        return mysqli_fetch_assoc($query);
    }

    // функция для получения количества строк запроса (для последующего использования в создании ассоциативного массива)
    public static function getNumRows($query)
    {
        return mysqli_num_rows($query);
    }

    public static function escape ($parameter) {
        return mysqli_real_escape_string(self::$connection, $parameter);
    }

}