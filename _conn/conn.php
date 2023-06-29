<?php
   try
   {
      $_dns = "mysql:host=localhost;dbname=fafashion";
      $_usr = "root";
      $_pwd = "";

      $conn = new PDO($_dns, $_usr, $_pwd);
   }
   catch(PDOException $e)
   {
      echo"Não foi possível se conectar com o banco de dados!";
   }