<?php
$servername = "localhost";// The server is localhost (MAMP uses this)
$username = "root";// Username for MySQL (default is "root" for MAMP)
$password = "root"; // Password for MySQL (default is also "root" unless you changed it
$dbname = "gestion_soutenances";// The name of the database you're connecting to
$port = 8889;// MAMP uses port 8889 by default for MySQL
$socket = "/Applications/MAMP/tmp/mysql/mysql.sock";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname, 8889); // Make sure the port is set to 8889 for MAMP


?>