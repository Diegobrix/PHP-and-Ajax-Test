<!DOCTYPE html>
<html lang="pt-BR">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Criar Coleção</title>

   <!-- CSS -->
   <link rel="stylesheet" type="text/css" href="../assets/css/reset.css">
   <link rel="stylesheet" type="text/css" href="../assets/css/colection.css">

   <!-- JS -->
   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js" integrity="sha512-3gJwYpMe3QewGELv8k/BX9vcqhryRdzRMxVfq6ngyWXwo03GFEzjsUm8Q7RZcHPHksttq7/GFoxjCVUjkjvPdw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>
<body>
   <main>
      <div class="colections-wrapper"></div>
   </main>
   <dialog open class="add-colection">
      <form action="">
         <div class="step step-1">
            <div class="step-group">
               <label for="txtColecaoName">Nome da Coleção</label>
               <input type="text" name="nome" id="txtColecaoName" placeholder="Nome da Coleção">
            </div>
            <div class="step-group">
               <div class="label-wrapper">
                  <label for="txtDescricao">Descrição</label>
                  <span>0 de 300</span>
               </div>
               <textarea name="descricao" id="txtDescricao" cols="30" rows="10" placeholder="e.g. Coleção de Inferno"></textarea>
            </div>
         </div>
      </form>
   </dialog>
</body>
</html>