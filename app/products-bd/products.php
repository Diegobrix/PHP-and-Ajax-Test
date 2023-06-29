<?php
   require_once("../../_conn/conn.php");

   $stmt = $conn -> prepare("SELECT prodName AS name, prodPrice AS price, prodPic AS photo FROM `products`;");
   $stmt -> execute();

   if($stmt -> rowCount() > 0)
   {
      $data = $stmt -> fetchAll(PDO::FETCH_ASSOC);
      echo json_encode($data);
   }