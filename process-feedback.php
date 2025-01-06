<?php
// process-feedback.php

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Retrieve data from the form
    $email = $_POST['email'];
    $survey_response = $_POST['survey'];

    // Database connection
    $servername = "localhost";  // Your database server (usually localhost)
    $username = "root";         // Your database username
    $password = "";             // Your database password
    $dbname = "your_database";  // Your database name

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare and bind SQL statement to prevent SQL injection
    $stmt = $conn->prepare("INSERT INTO feedback (email, survey_response) VALUES (?, ?)");
    $stmt->bind_param("ss", $email, $survey_response);

    // Execute the statement
    if ($stmt->execute()) {
        echo "Feedback submitted successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the connection
    $stmt->close();
    $conn->close();
} else {
    echo "Form not submitted correctly.";
}
?>
