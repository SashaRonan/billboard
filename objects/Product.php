<?php

namespace objects;
require_once('config/Database.php');

use config\Database;

class Product extends Database
{

// конструктор для соединения с базой данных
    public function __construct()
    {
        Database::connect();
    }

    //функция для получения одного конкретного товара по ID с БД
    public function getOneProduct($productId)
    {
        $stmt = mysqli_prepare(Database::connect(), "SELECT `product_name`,`description`,`price`,`product_img`,`name`,`phone` FROM `products` LEFT OUTER JOIN `users` ON `select_user_id` = `user_id` WHERE `product_id` = ? ");
        mysqli_stmt_bind_param($stmt, "i", $productId);
        mysqli_stmt_execute($stmt);
        $product = mysqli_stmt_get_result($stmt);
        if (mysqli_stmt_num_rows($stmt) == 0) {
            echo "Поиск не дал результатов";
        }
        return mysqli_fetch_assoc($product);
    }

    //функция для получения полного списка товаров с БД
    public function getUProductsList()
    {
        $selectProductsQuery = Database::query("SELECT `product_name`,`description`,`price`,`product_img`,`name`,`phone` FROM `products` LEFT OUTER JOIN `users` ON `select_user_id` = `user_id`");
        $numRows = Database::getNumRows($selectProductsQuery);
        while ($numRows = Database::fetch($selectProductsQuery)) {
            $products [] = $numRows;
        }
        return ($products);
    }

    //функция для поиска всех товаров конкретного пользователя с БД
    public function getAllProductsOfUser($userId)
    {
        $stmt = mysqli_prepare(Database::connect(), "SELECT `product_name`,`description`,`price`,`product_img`,`name`,`phone` FROM `products` LEFT OUTER JOIN `users` ON `select_user_id` = `user_id` WHERE `user_id` = ? ");
        mysqli_stmt_bind_param($stmt, "i", $userId);
        mysqli_stmt_execute($stmt);
        $products= mysqli_stmt_get_result($stmt);
        $numRows = mysqli_num_rows($products);
        while ($numRows = Database::fetch($products)) {
            $productsList []= $numRows;
        }
        print_r($productsList);

    }

    //функция для поиска товаров по названию
    public function getAllProductsByName($productName)
    {
        $stmt = mysqli_prepare(Database::connect(), "SELECT `product_name`,`description`,`price`,`product_img`,`name`,`phone` FROM `products` LEFT OUTER JOIN `users` ON `select_user_id` = `user_id` WHERE `product_name` LIKE ?");
        $productName = '%' . $productName . '%';
        mysqli_stmt_bind_param($stmt, "s", $productName);
        mysqli_stmt_execute($stmt);
        $products= mysqli_stmt_get_result($stmt);
        $numRows = mysqli_num_rows($products);
        while ($numRows = Database::fetch($products)) {
            $productList [] = $numRows;
        }
        return ($productList);

    }

//    функция для нового товара в БД
    public function createProduct($productName, $description, $userId, $price, $productURL)
    {
        if (!empty($productName) && !empty($description) && !empty($userId) && !empty($price)) {
            $stmt = mysqli_prepare(Database::connect(), "INSERT INTO `products` (`product_name`, `description`, `select_user_id`, `price`, `product_img`) VALUES (?, ?, ?, ?, ?)");
            mysqli_stmt_bind_param($stmt, "ssiis", $productName, $description, $userId, $price, $productURL);
            mysqli_stmt_execute($stmt);
            echo "Cоздан новый товар: Название: " . $productName . " Описание: " . $description . " ID продавца: " . $userId . " Цена: " . $price . " Ссылка на изображение: " . $productURL;
//            echo json_encode(["result" => true]);
        } else {
            echo "Заполните все поля";
//            echo json_encode(["result" => false, "messege" => "Не верен параметр name "]);
        }
    }

    //    функция для обновления любого параметра товара в БД по его ID
    public function updateProduct()

    {
        //  Создаем массив $_PUT, в который записываем параметры с полученного файла методом PUT
        $putdata = file_get_contents('php://input', true);
        $productParams = explode('&', $putdata);
        $_PUT = [];
        foreach ($productParams as $pair) {
            $item = explode('=', $pair);
            if (count($item) == 2) {
                $_PUT[urldecode($item[0])] = urldecode($item[1]);
            }
        }

        print_r($_PUT);

        if (!empty($_PUT['productId'])) {

            $productIdString = "`product_id` = '" . $_PUT['productId'] . "'";

            // Проверяем, какие из параметров товара необходимо обновить и строим нужный запрос SQL
            if (!empty($_PUT['productName']) && !empty($queryString)) {
                $queryString = $queryString . ", `product_name`='" . $_PUT['productName'] . "'";
            } elseif (!empty($_PUT['productName']) && empty($queryString)) {
                $queryString = "`product_name`='" . $_PUT['productName'] . "'";
            }

            if (!empty($_PUT["description"]) && !empty($queryString)) {
                $queryString = $queryString . ", `description`='" . $_PUT['description'] . "'";
            } elseif (!empty($_PUT["description"]) && empty($queryString)) {
                $queryString = "`description`='" . $_PUT['description'] . "'";
            }

            if (!empty($_PUT["userId"]) && !empty($queryString)) {
                $queryString = $queryString . ", `select_user_id`='" . $_PUT['userId'] . "'";
            } elseif (!empty($_PUT["userId"]) && empty($queryString)) {
                $queryString = "`select_user_id`='" . $_PUT['userId'] . "'";
            }

            if (!empty($_PUT["price"]) && !empty($queryString)) {
                $queryString = $queryString . ", `price`='" . $_PUT['price'] . "'";
            } elseif (!empty($_PUT["price"]) && empty($queryString)) {
                $queryString = "`price`='" . $_PUT['price'] . "'";
            }

            if (!empty($_PUT["productURL"]) && !empty($queryString)) {
                $queryString = $queryString . ", `product_img`='" . $_PUT['productURL'] . "'";
            } elseif (!empty($_PUT["productURL"]) && empty($queryString)) {
                $queryString = "`product_img`='" . $_PUT['productURL'] . "'";
            }

            echo $queryString;
            Database::query("UPDATE `products` SET" . $queryString . "WHERE" . $productIdString);
            echo "Параметры товара с ID = " . $_PUT['productId'] . " обновлены";
//              echo json_encode(["result" => true]);

        } else {
            echo "Не указан ID товара";
//            echo json_encode(["result" => false, "messege" => "Не верен параметр name "]);
        }
    }

    //функция для удаления конкретного товара по его ID
    public function deleteProduct()
    {
        //  Создаем массив $_DELETE, в который записываем ID удаляемого товара.
        $putdata = file_get_contents('php://input', true);
        $productParams = explode('&', $putdata);
        $_DELETE = [];
        foreach ($productParams as $pair) {
            $item = explode('=', $pair);
            if (count($item) == 2) {
                $_DELETE[urldecode($item[0])] = urldecode($item[1]);
            }
        }

        if (isset($_DELETE['productId'])) {
            $stmt = mysqli_prepare(Database::connect(), "DELETE FROM `products` WHERE `product_id` = ?");
            mysqli_stmt_bind_param($stmt, "i", $_DELETE['productId']);
            mysqli_stmt_execute($stmt);
            echo "Товар с ID = " . $_DELETE['productId'] . " удален";
//                echo json_encode(["result" => true]);
        } else {
            echo "Произошла ошибка";
//            echo json_encode(["result" => false, "messege" => "Не верен параметр name "]);
        }
    }
}
