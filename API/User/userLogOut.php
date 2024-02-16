<?php

session_start();

require_once('../../Model/Objects/User.php');

$user = new objects\User ();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user->logOut();
}