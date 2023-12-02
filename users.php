<?php
//Устанавливаем связь с БД
$connection = mysqli_connect('localhost', 'root', '', 'billboard');

if (!$connection) {
    die('Ошибка подключения к базе данных: ' . mysqli_connect_error());
}


//Запросы с БД
if ($_SERVER["REQUEST_METHOD"] == "GET") {

    //Конкретного пользователя по id
    if (isset($_GET['userId'])) {
        $userId = $_GET['userId'];
        $selectUserQuery = mysqli_query($connection, "SELECT `user_id`, `name`,`email`,`phone` FROM `users` WHERE `user_id`= '$userId'");

        while ($user = mysqli_fetch_assoc($selectUserQuery)) {
            echo '<br>';
            print_r($user);
            echo '</br>';

        }

        if (mysqli_num_rows($selectUserQuery) == 0) {
            echo "Поиск не дал результатов";
        }

        json_encode($user);

        //Список всех зарегистрированных пользователей
    } else {
        $selectUserQuery = mysqli_query($connection, "SELECT `user_id`, `name`,`email`,`phone` FROM `users`");


        while ($user = mysqli_fetch_assoc($selectUserQuery)) {
            echo '<br>';
            print_r($user);
            echo '</br>';
            }


        json_encode($user);


    }



    // Записываем нового пользователя в БД
} elseif ($_SERVER['REQUEST_METHOD'] == "POST") {

    if (isset($_POST['name'])) {
        $name = $_POST['name'];
    };

    if (isset($_POST['email'])) {
        $email = $_POST['email'];
    }

    if (isset($_POST['phone'])) {
        $phone = $_POST['phone'];
    }

    if (isset($_POST['password'])) {
        $password = $_POST['password'];
    }

    if (!empty($connection) && !empty($name) && !empty($email) && !empty($phone) && !empty($password)) {
        $saveUser = mysqli_query($connection, "INSERT INTO `users` (`name`, `email`, `phone`, `password`) VALUES ('$name', '$email', '$phone', '$password');");
        echo "Cоздан новый пользователь: Имя: " . $name . " Почта: " . $email . " Номер телефона: " . $phone . " Пароль: " . $password;

        while ($user = mysqli_fetch_assoc($saveUser)) {
            echo '<br>';
            print_r($user);
            echo '</br>';
        }
        json_encode($user);

    } else {
        echo "Заполните все поля";
    }



//Обновляем данные пользователя с указанным ID
} elseif ($_SERVER['REQUEST_METHOD'] == "PUT") {

//$url = 'http://localhost/billboard/users_php?' . '&userId=' . $userIdPut . '&name=' . urlencode($userNamePut) . '&email=' . urlencode($userEmailPut) . '&phone= ' . $userPhonePut .'&password=' . urlencode($userPasswordPut) ;
    $url = 'http://localhost/billboard/users_php?' . '&userId=' . '9' . '&name=' . urlencode('Афанасьев Афанасий Афанасьевич') . '&email=' . urlencode('afichi@gmail.com') . '&phone=89000000505' . '&password=' . urlencode('afafai684');
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
    echo '<br>';
    print_r($userParams);
    echo '/<br>';

    if (!empty($connection)) {

        $updateQuery = "UPDATE `users` SET `name`='{$user['name']}',`email`='{$user['email']}',`phone`='{$user['phone']}',`password`='{$user['password']}' WHERE `user_id` = $userId";
        $updateResult = mysqli_query($connection, $updateQuery);

        if ($updateResult) {
            echo "Параметры пользователя с ID = " . $userId . " обновлены";
        } else {
            echo "Ошибка при обновлении параметров пользователя";
        }
    } else {
        echo "Не указан ID пользователя или отсутствует соединение с базой данных";
    }


//Удаляем пользователя с указанным ID
} elseif ($_SERVER['REQUEST_METHOD'] == "DELETE") {

    $url = 'http://localhost/billboard/users_php?' . '&userId=' . '8';
    parse_str($url, $params);

    if (isset($params['userId'])) {
        $userId = $params['userId'];
    }

    $updateQuery = "DELETE FROM `users` WHERE `user_id` = $userId";
    $updateResult = mysqli_query($connection, $updateQuery);

    echo "Пользователь с ID = " . $userId . " удален";
} else {
    echo "Произошла ошибка";
}




