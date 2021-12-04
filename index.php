<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "commande";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// sql to create table
$sql = "CREATE TABLE article (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
quantite INT,
name VARCHAR(30) NOT NULL,
prix FLOAT
)";

if ($conn->query($sql) === TRUE) {
  echo "Table article created successfully";
} else {
  echo "Error creating table: " . $conn->error;

}

$sql = "INSERT INTO article (name, quantite, prix)
VALUES ('Lace Dress', 4, 104);";
$sql .= "INSERT INTO article (name , quantite, prix)
VALUES ('Midi Dress', 1, 26);";


if ($conn->multi_query($sql) === TRUE) {
  echo "New records created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>