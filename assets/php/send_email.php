<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $to = "refr4inr@gmail.com"; 
    $subject = "Interested in joining the campaign!";
    
    // Collect form data
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message']);
    
    // Compose email
    $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";
    $body = "You have received a new inquiry:\n\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message\n";
    
    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your interest! We will get back to you soon for more information.";
    } else {
        echo "Error: Unable to send your message. Please try again later.";
    }
}
?>
