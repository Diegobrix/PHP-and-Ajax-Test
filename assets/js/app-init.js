const container = document.querySelector(".products-wrapper");

$.ajax({
   url: "./products-bd/products.php",
   method: "POST",
   data: {},
   success: function(jsonResp){
      if(jsonResp != false)
      {
         return prodGen(jsonResp);
      }

      return window.alert("Nenhuma Peca Registrada");
   }
});

function prodGen(jsonResponse)
{
   if(jsonResponse.length > 0)
   {
      let response = JSON.parse(jsonResponse);

      //Cria um fragmento, que receberá todos os produtos
      const elementFragment = document.createDocumentFragment();
   }
}