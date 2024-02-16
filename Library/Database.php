<?php

class Database
{
    private static $connection;

    public static function connect()
    {
        if (empty(self::$connection)) {
            self::$connection = mysqli_connect('localhost', 'root', '', 'billboard');
        } elseif (!self::$connection) {
            die('Ошибка подключения к базе данных: ' . mysqli_connect_error());
        }
        return self::$connection;
    }

    public static function stmtQuery($query, $argTypes, ...$args)
    {
        $stmt = mysqli_prepare(Database::connect(), $query);
        mysqli_stmt_bind_param($stmt, $argTypes, ...$args);
        mysqli_stmt_execute($stmt);
        return $stmt;
    }

    public static function stmtResult($stmt)
    {
        return mysqli_stmt_get_result($stmt);
    }

    public static function query($sqlString)
    {
        return mysqli_query(self::$connection, $sqlString);
    }

    public static function fetch($query)
    {
        return mysqli_fetch_assoc($query);
    }

    public static function stmtNumRows($stmt)
    {
        return mysqli_stmt_affected_rows($stmt);
    }

}