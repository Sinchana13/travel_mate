// FileName - server.php

<?php
	header('Access-Control-Allow-Origin: http://localhost/Car_Rental-PHP');
	$user = $_POST['name'];
	echo ("Hello from server: $user");
?>
