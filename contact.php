<?php

$sub = $_GET['sub'];

if (isset($_GET['email'])) {
    $email = $_GET['email'];
} else {
    $email = 'Anon';
}
$msg = $_GET['msg'];
$msg = 'Message from: '.$email.'/n /n'.$msg;

try {
    mail('casey.elzinga@gmail.com', $sub, $msg);
    echo('sent');
} catch (exception $e) {
    echo('failed');
}

?>