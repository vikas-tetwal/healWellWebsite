<?php
// Database configuration
$host = "localhost";
$dbname = "your_database_name";
$username = "your_db_username";
$password = "your_db_password";

// Create DB connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Sanitize and fetch form data
$name = $conn->real_escape_string($_POST['name']);
$email = $conn->real_escape_string($_POST['email']);
$phone = $conn->real_escape_string($_POST['phone']);
$service = $conn->real_escape_string($_POST['service']);
$city = $conn->real_escape_string($_POST['city']);
$message = $conn->real_escape_string($_POST['message']);

// Insert into database
$sql = "INSERT INTO appointments (name, email, phone, service, city, message)
        VALUES ('$name', '$email', '$phone', '$service', '$city', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
