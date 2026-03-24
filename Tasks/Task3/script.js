const productName = document.getElementById("productName");
const productCategory = document.getElementById("productCategory");
const productPrice = document.getElementById("productPrice");
const productDiscount = document.getElementById("productDiscount");
const productQuantity = document.getElementById("productQuantity");
const addProductBtn = document.getElementById("addProductBtn");
const updataProductBtn = document.getElementById("updataProductBtn");
const total = document.getElementById("total");

let productContainer = [];

// localStorage.getItem("product")
//   ? ((productContainer = JSON.parse(localStorage.getItem("product"))), displayProduct())
//   : console.log("مش معايا داتاا");

if (localStorage.getItem("product")) {
  productContainer = JSON.parse(localStorage.getItem("product"));
  displayProduct();
} else {
  console.log("error");
}

function getTotle() {
  if (productPrice.value != null) {
    let result = productPrice.value - productDiscount.value;

    total.innerHTML = result;
  }
}

getTotle();

function addProduct() {
  const product = {
    name: productName.value,
    category: productCategory.value,
    price: productPrice.value,
    quantity: productQuantity.value,
    discount: productDiscount.value,
    total: total.innerHTML,
  };

  productContainer.push(product);

  localStorage.setItem("product", JSON.stringify(productContainer));

  displayProduct();

  getTotle();
  clearInput();
}

addProductBtn.addEventListener("click", addProduct);

function displayProduct() {
  let cartoona = ``;
  for (let i = 0; i < productContainer.length; i++) {
    cartoona += `
         <tr>
                <td> ${i + 1} </td>
              
                <td>${productContainer[i].quantity}</td>
                <td>${productContainer[i].name}</td>
                <td>${productContainer[i].category}</td>
                <td>${productContainer[i].price}</td>
                <td>${productContainer[i].discount}</td>
                <td>${productContainer[i].total}</td>
                <td><button  onclick="updataProduct(${i})" class="  b-1   fa-solid fa-pen"></button></td>
                <td><button onclick=" deleteProduct(${i})" class="  b-2    fa-solid fa-trash  "></button></td>
        </tr>
            `;
  }

  let showData = document.getElementById("showData");
  showData.innerHTML = cartoona;
}

function deleteProduct(i) {
  productContainer.splice(i, 1);
  localStorage.setItem("product", JSON.stringify(productContainer));

  displayProduct();
}

function clearInput() {
  productName.value = "";
  productCategory.value = "";
  productPrice.value = "";
  productDiscount.value = "";
  productQuantity.value = "";
}

let x = 0;
function updataProduct(i) {
  x = i;

  productName.value = productContainer[i].name;
  productCategory.value = productContainer[i].category;
  productPrice.value = productContainer[i].price;
  productDiscount.value = productContainer[i].discount;
  productQuantity.value = productContainer[i].quantity;
  total.innerHTML = productContainer[i].total;

  addProductBtn.classList.add("d-none");
  updataProductBtn.classList.remove("d-none");
}

function setItem() {
  productContainer[x].name = productName.value;
  productContainer[x].category = productCategory.value;
  productContainer[x].price = productPrice.value;
  productContainer[x].discount = productDiscount.value;
  productContainer[x].quantity = productQuantity.value;
  productContainer[x].total = total.innerHTML;

  addProductBtn.classList.remove("d-none");
  updataProductBtn.classList.add("d-none");
  localStorage.setItem("product", JSON.stringify(productContainer));

  clearInput();
  displayProduct();
}
updataProductBtn.addEventListener("click", setItem);
