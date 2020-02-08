<?php

$sub = $_GET['sub'];

if (isset($_GET['email'])) {
    $email = $_GET['email'];
}

if ($email == '') {
    $email = 'Anon';
}

$msg = $_GET['msg'];
$msg = 'Message from: '.$email."\r\n \r\n".$msg;

try {
    mail('mail@deahzine.com', $sub, $msg);
    echo('sent');
} catch (exception $e) {
    echo('failed');
}

?>