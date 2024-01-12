<?php

namespace objects;
require_once('..\config\Database.php');

use config\Database;

class Product extends Database
{

    public function __construct()  // конструктор для соединения с базой данных
    {
        Database::connect();
    }


    public function getProductsList()  //Получаем полный список товаров с БД
    {
        $selectProductsQuery = Database::query("SELECT `product_id`, `product_name`,`description`,`price`,`product_img`,`name`,`phone` FROM `products` LEFT OUTER JOIN `users` ON `select_user_id` = `user_id`");
        while ($numRows = Database::fetch($selectProductsQuery)) {
            $productsList [] = $numRows;
        }
        echo json_encode($productsList);
    }


    //функция для получения всех товаров конкретного пользователя с БД
    public function getAllProductsOfUser()
    {
        $userID = $_SESSION['user_id'];

        $stmt = mysqli_prepare(Database::connect(), "SELECT `product_id`, `product_name`,`description`,`price`,`product_img`,`name`,`phone` FROM `products` LEFT OUTER JOIN `users` ON `select_user_id` = `user_id` WHERE `user_id` = ? ");
        mysqli_stmt_bind_param($stmt, "i", $userID);
        mysqli_stmt_execute($stmt);

        $products = mysqli_stmt_get_result($stmt);
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


    //функция для сохранения нового товара в БД
    public function createProduct(
        $productName,
        $description,
        $userId, $price,
        $productImg
    )
    {
        $stmt = mysqli_prepare(Database::connect(), "INSERT INTO `products` (`product_name`, `description`, `select_user_id`, `price`, `product_img`) VALUES (?, ?, ?, ?, ?)");
        mysqli_stmt_bind_param($stmt, "ssiis", $productName, $description, $userId, $price, $productImg);
        mysqli_stmt_execute($stmt);
        echo json_encode(["status" => true, "message" => "Успешная регистрация продукта"]);
    }


    //функция для обновления любого параметра товара в БД
    public function updateProduct(
        $productID,
        $productName,
        $description,
        $price,
        $productImg)
    {

        $stmt = mysqli_prepare(Database::connect(), "UPDATE `products` SET `product_name`= ?,`description`= ?,`price`= ?,`product_img`= ? WHERE `product_id` = ?");

        mysqli_stmt_bind_param($stmt, "ssisi", $productName, $description, $price, $productImg, $productID);
        mysqli_stmt_execute($stmt);
        echo json_encode(["status" => true, "message" => "успех"]);
    }


    //функция для удаления товара по его ID
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


    //функция для получения одного товара по ID
    public function getProductByID($productID)
    {

        $stmt = mysqli_prepare(Database::connect(), "SELECT `product_id`, `product_name`,`description`,`price`,`product_img` FROM `products` WHERE `product_id` = ? ");
        mysqli_stmt_bind_param($stmt, "i", $productID);
        mysqli_stmt_execute($stmt);

        $products = mysqli_stmt_get_result($stmt);
        $numRows = mysqli_stmt_affected_rows($stmt);

        while ($productArray = mysqli_fetch_assoc($products)) {
            $productByID [] = $productArray;
        }

        if ($numRows == 0) {
            echo json_encode(["status" => false, "message" => "Данный товар не найден."]);
        } else {
            echo json_encode($productByID);
        }
    }

}
