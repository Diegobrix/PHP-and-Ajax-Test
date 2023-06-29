const container = document.querySelector(".products-wrapper");

//Cria um fragmento, que receberá todos os produtos
const elementFragment = document.createDocumentFragment();

$.ajax({
   url: "./products-bd/products.php",
   method: "POST",
   data: {},
   success: function (jsonResp) {
      if (jsonResp != false) {
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
      console.log(response);

      response.forEach(product => {
         createElem(product.name, product.price, product.photo);
      });

      return container.appendChild(elementFragment);
   }
}

function createElem(name, price, photo) {
   var productElem = document.createElement("div");
   var prodBannerWrapper = document.createElement("figure");
   var prodBanner = document.createElement("img");
   var prodDetailsWrapper = document.createElement("div");
   var prodTitle = document.createElement("h2");
   var prodPrice = document.createElement("p");

   productElem.classList.add("product");
   prodBannerWrapper.classList.add("product-banner");
   prodDetailsWrapper.classList.add("product-details");
   prodTitle.classList.add("product-title");
   prodPrice.classList.add("product-price");

   prodBanner.src = `../assets/images/${photo}`;
   prodBannerWrapper.appendChild(prodBanner);
   productElem.appendChild(prodBannerWrapper);
   prodTitle.innerHTML = name;
   prodDetailsWrapper.appendChild(prodTitle);
   prodPrice.innerHTML = `R$${price}`;
   prodDetailsWrapper.appendChild(prodPrice);
   productElem.appendChild(prodDetailsWrapper);

   elementFragment.appendChild(productElem);
}