const gridContainer = document.getElementById("js-gridContainer");
const searchInput = document.getElementById("js-searchInput");
const searchButton = document.getElementById("js-searchButton")


const htmlTemplate = (product) => {
    return `<div class ="card">
              <h3 class="card__name">${product.name}</h3>
              <p class="card__price">$${product.price}</p>
              <p class="card__stock">Stock: ${product.stock} unidaddes</p>
            </div>`;

};

 const renderHtml = (products, container) => {
     container.innerHTML = "";
     if (products.length > 0) {
         for (const product of products) {
             const productInHtml = htmlTemplate(product);

             container.innerHTML += productInHtml;
         }
     } else {
         container.innerHTML = `<p class="container__message"> No se encuentra el producto buscado </p>`;
     }
 };

  renderHtml(products, gridContainer);

  const filterProduct = () => {
      const searchInputValue = searchInput.value;

      const filteredProducts = products.filter((product) => {
          const productNameLowerCase = product.name.toLowerCase();
      
         return productNameLowerCase.includes(searchInputValue.toLowerCase())
        });
    
        renderHtml(filteredProducts, gridContainer)
  };


  searchButton.addEventListener("click", filterProduct);



  



