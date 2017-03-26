<?php

$errors = array();
$data = array();

if (empty($_POST["naam"])){
  $errors["naam"] = "What is your name?";
}
if (empty($_POST["email"])){
  $errors["email"] = "E-mali box is empty";
}
if (empty($_POST["bericht"])){
  $errors["bericht"] = "Message box is empty.";
}

if (empty($errors)) {
  $data["success"] = true;
  $data["bericht"] = "The message is sent.";

  $ontvanger = "hjin1125@gmail.com";
  $onderwerp = "Mijn cv";
  $afzender = $_POST["naam"];
  $afzender_email = $_POST["email"];
  $headers = "From: $afzender <$afzender_email>";
  $inhoud = $_POST["bericht"];

  mail($ontvanger, $onderwerp, $inhoud, $headers);
} else {
  $data["success"] = false;
  $date["bericht"] = "The message is not sent.";
}

echo json_encode($data);


?>
