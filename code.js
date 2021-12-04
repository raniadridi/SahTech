const totalValue = document.querySelector(".total-value");
const promo = document.querySelector("#promo-code");
const remiseDetails = document.querySelector(".sale-details");

const productsHandler = () => {
  promo.value = "";
  remiseDetails.innerHTML = "";
  let total = 0;
  const products = document.querySelectorAll(".basket-product");
  products.forEach((p) => {
    const price = Number(p.querySelector(".price").innerHTML);

    const quantity = Number(p.querySelector(".quantity-field").value);
    total += price * quantity;
    p.querySelector(".subtotal").innerHTML = price * quantity;
  });
  totalValue.innerHTML = total;
};
productsHandler();

/* Show Checkout Button if Online*/
const doSomething = () => {
  const link = document.getElementById("summary-checkout");
  const address = document.getElementById("summary-address");

  var e = document.getElementById("pm");
  var method = e.options[e.selectedIndex].text;

  if (method == "Online") {
    link.classList.remove("hide-button");
    address.classList.add("hide-button");
  } else if (method == "at Delivery") {
    link.classList.add("hide-button");
    address.classList.remove("hide-button");
  } else {
    link.classList.add("hide-button");
    address.classList.add("hide-button");
  }
};

const removeItem = (e) => {
  e.parentElement.parentElement.remove();
  productsHandler();
};
const sale = () => {
  if (promo.value == "decembre") {
    totalValue.innerHTML = (Number(totalValue.innerHTML) * 0.9).toFixed(2);
    remiseDetails.innerHTML = `
    <p class="pt">Total ${Number(totalValue.innerHTML) / 0.9}</p>
    <p class="pt">-</p>
    <p class="pt">Remise 10%</p>
    <p class="pt">=</p>
    <p class="pt red">nv prix ${totalValue.innerHTML}</p>
    `;
  } else {
    alert("Code Promo incorrect");
  }
};

payandcheckout = () => {
  window.location = `index.html?total=${totalValue.innerHTML}`;
};

checkout = () => {
  window.location = `address.html?total=${totalValue.innerHTML}`;
};
