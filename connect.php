<?php
$con = mysqli_connect('mattkrukcom.ipagemysql.com', 'mkruk', 'z5X7bfj2dqBJ');
if (!$con) {
   die('Could not connect: ' . mysql_error());
}
echo 'Connected successfully';
mysql_select_db(disease_tracker1);
?>
