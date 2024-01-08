<?php

namespace objects;
require_once('..\config\Database.php');

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
    public function getProductsList()
    {
        $selectProductsQuery = Database::query("SELECT `product_id`, `product_name`,`description`,`price`,`product_img`,`name`,`phone` FROM `products` LEFT OUTER JOIN `users` ON `select_user_id` = `user_id`");
        while ($numRows = Database::fetch($selectProductsQuery)) {
            $productsList [] = $numRows;
        }
        echo json_encode($productsList);
    }

    //функция для поиска всех товаров конкретного пользователя с БД
    public function getAllProductsOfUser()
    {
        $userID = $_SESSION['user_id'];

        $stmt = mysqli_prepare(Database::connect(), "SELECT `product_id`, `product_name`,`description`,`price`,`product_img`,`name`,`phone` FROM `products` LEFT OUTER JOIN `users` ON `select_user_id` = `user_id` WHERE `user_id` = ? ");
        mysqli_stmt_bind_param($stmt, "i", $userID);
        mysqli_stmt_execute($stmt);

        $products = mysqli_stmt_get_result($stmt);
//        $numFields = mysqli_stmt_field_count($stmt);
        $numRows = mysqli_stmt_affected_rows($stmt);

        while ($productArray = mysqli_fetch_assoc($products)) {
            $productsList [] = $productArray;
        }

        if ($numRows == 0) {
            echo json_encode(["status" => false, "message" => "У вас пока нет товаров на продажу."]);
        } else {
            echo json_encode($productsList);
        }
    }

    //функция для поиска товаров по названию
    public function getAllProductsByName($productName)
    {
        $stmt = mysqli_prepare(Database::connect(), "SELECT `product_name`,`description`,`price`,`product_img`,`name`,`phone` FROM `products` LEFT OUTER JOIN `users` ON `select_user_id` = `user_id` WHERE `product_name` LIKE ?");
        $productName = '%' . $productName . '%';
        mysqli_stmt_bind_param($stmt, "s", $productName);
        mysqli_stmt_execute($stmt);
        $products = mysqli_stmt_get_result($stmt);
        $numRows = mysqli_num_rows($products);
        while ($numRows = Database::fetch($products)) {
            $productList [] = $numRows;
        }
        return ($productList);
    }

//    функция для нового товара в БД
    public function createProduct($productName, $description, $userId, $price, $productImg)
    {
            $stmt = mysqli_prepare(Database::connect(), "INSERT INTO `products` (`product_name`, `description`, `select_user_id`, `price`, `product_img`) VALUES (?, ?, ?, ?, ?)");
            mysqli_stmt_bind_param($stmt, "ssiis", $productName, $description, $userId, $price, $productImg);
            mysqli_stmt_execute($stmt);
            echo json_encode(["status" => true, "message" => "Успешная регистрация продукта"]);
    }

    //    функция для обновления любого параметра товара в БД по его ID
    public function updateProduct($productID, $productName, $description, $price, $productImg)
    {

        $stmt = mysqli_prepare(Database::connect(), "UPDATE `products` SET `product_name`= ?,`description`= ?,`price`= ?,`product_img`= ? WHERE `product_id` = ?");

        mysqli_stmt_bind_param($stmt, "ssisi", $productName, $description, $price, $productImg, $productID);
        mysqli_stmt_execute($stmt);
        echo json_encode(["status" => true, "message" => "успех"]);
    }

    //функция для удаления конкретного товара по его ID
    public function deleteProduct($productID)
    {
        $stmt = mysqli_prepare(Database::connect(), "DELETE FROM `products` WHERE `products`.`product_id` = ?");
        mysqli_stmt_bind_param($stmt, "i", $productID);
        if (mysqli_stmt_execute($stmt)) {

            echo json_encode(["status" => true, "message" => "Вы удалили товар"]);
        } else {

            echo json_encode(["status" => false, "message" => "Произошла ошибка"]);
        }
    }


}
