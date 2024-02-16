<?php

namespace objects;
require_once('..\..\Library\Database.php');

use Database;

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
        $query = "SELECT `product_id`, `product_name`,`description`,`price`,`product_img`,`name`,`phone` FROM `products` LEFT OUTER JOIN `users` ON `select_user_id` = `user_id` WHERE `user_id` = ? ";
        $argTypes = "i";

        $stmt = Database::stmtQuery($query, $argTypes,$userID);
        $products = Database::stmtResult($stmt);
        $numRows = Database::stmtNumRows($stmt);

        while ($productArray = Database::fetch($products)) {
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
        $userId,
        $price
    )
    {
        if (isset($_FILES["myProduct"]["name"])) {
            $productImg = "img/products/" . $_FILES["myProduct"]["name"];
            $productImgPath = "../../img/products/" . $_FILES["myProduct"]["name"];
        } else {
            $productImg = '#';
        }
        if (move_uploaded_file($_FILES["myProduct"]["tmp_name"], $productImgPath)) {

            $query = "INSERT INTO `products` (`product_name`, `description`, `select_user_id`, `price`, `product_img`) VALUES (?, ?, ?, ?, ?)";
            $argTypes = "ssiis";
            $args = [$productName, $description, $userId, $price, $productImg];

            Database::stmtQuery($query, $argTypes, ...$args);

            echo json_encode(["status" => true, "message" => "Успешная регистрация продукта"]);
        }
    }

    //функция для обновления любого параметра товара в БД
    public function updateProduct(
        $productID,
        $productName,
        $description,
        $price)
    {
        if (isset($_FILES["myProduct"]["name"])) {
            $productImg = "img/products/" . $_FILES["myProduct"]["name"];
            $productImgPath = "../../img/products/" . $_FILES["myProduct"]["name"];
            move_uploaded_file($_FILES["myProduct"]["tmp_name"], $productImgPath);
        } else {
            $productImg = "img/products/" . $_POST["product_file"];
            $productImgPath = "../../img/products/" . $_POST["product_file"];
        }

        $query = "UPDATE `products` SET `product_name`= ?,`description`= ?,`price`= ?,`product_img`= ? WHERE `product_id` = ?";
        $argTypes = "ssisi";
        $args = [$productName, $description, $price, $productImg, $productID];

        Database::stmtQuery($query,  $argTypes, ...$args);

        echo json_encode(["status" => true, "message" => "успех"]);
    }

    //функция для удаления товара по его ID
    public function deleteProduct($productID)
    {
        $query = "DELETE FROM `products` WHERE `products`.`product_id` = ?";
        $argTypes = "i";

        $stmt = Database::stmtQuery($query, $argTypes, $productID);

        if ($stmt) {
            echo json_encode(["status" => true, "message" => "Вы удалили товар"]);
        } else {
            echo json_encode(["status" => false, "message" => "Произошла ошибка"]);
        }
    }

    //функция для получения одного товара по ID
    public function getProductByID($productID)
    {

        $query = "SELECT `product_id`, `product_name`,`description`,`price`,`product_img` FROM `products` WHERE `product_id` = ? ";
        $argTypes = "i";

        $stmt = Database::stmtQuery($query, $argTypes, $productID);
        $products = Database::stmtResult($stmt);
        $numRows = Database::stmtNumRows($stmt);

        while ($productArray = Database::fetch($products)) {
            $productByID [] = $productArray;
        }

        if ($numRows == 0) {
            echo json_encode(["status" => false, "message" => "Данный товар не найден."]);
        } else {
            echo json_encode($productByID);
        }
    }

}
