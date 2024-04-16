// const carts = document.querySelectorAll(".card-action-btn");
// let imgList = [];
// carts.forEach((cart) => {
//   cart.addEventListener("click", () => {
//     console.log("zdravo");
//     let img = cart
//       .closest(".product-card")
//       .querySelector("img")
//       .getAttribute("src");
//     console.log(img);
//     if (!JSON.parse(localStorage.getItem("imgList"))) {
//       let imgList = [];
//       imgList.push(img);
//       localStorage.setItem("imgList", JSON.stringify(imgList));
//     } else {
//       let list = JSON.parse(localStorage.getItem("imgList"));
//       console.log(list);
//       list.push(img);
//       localStorage.setItem("imgList", JSON.stringify(list));
//     }

//     let price = cart
//       .closest(".product-card")
//       .querySelector(".card-price")
//       .getAttribute("value");

//     localStorage.setItem("price", price);
//     let parfumeName = cart
//       .closest(".product-card")
//       .querySelector(".card-title a").textContent;

//     localStorage.setItem("parfumeName", parfumeName);
//   });
// });

let kupiSegaElements = document.querySelectorAll(".card-action-btn");

let products = document.querySelector(".offcanvas .products");
kupiSegaElements.forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    let productsCount = products.querySelectorAll(
      ".product-info .empty"
    ).length;
    console.log(productsCount);
    if (productsCount == 1) {
      products.innerHTML = "";
    }
    let img = el.closest(".product-card").querySelector("img").src;
    let productTitle = el
      .closest(".product-card")
      .querySelector(".card-title a").textContent;

    console.log(img);
    let price = el.closest(".product-card").querySelector(".card-price").value;
    console.log(price);
    let title = el
      .closest(".product-card")
      .querySelector("h3.card-title a").textContent;
    console.log(title);
    let st = subtotal(Number(price));
    console.log(st);
    let html = ` <div class="product-info">
    <div class="row product d-flex align-items-center justify-content-center">
     <div class="col-4"><img class="cart-img" src="${img}" width="50" height="50" alt=""><span class="product-title">${productTitle}</span></div>
     <div class="col-2"><span class="price">${price}</span>$</div>
     <div class="col-2"><input type="number" name="" id="kolicina" value="1"></div>
     <div class="col-2"><span class="subtotal">${st}</span>$</div>
     <div class="col-2"><button class="btn btn-danger trash">
       <i class="fa fa-trash-o"></i>
     </button></div>
    </div>
    
   
   </div>`;

    products.insertAdjacentHTML("afterbegin", html);
    let productInfoEl = document.querySelector(".offcanvas .product-info");
    let allSubTotals = document
      .querySelector(".offcanvas")
      .querySelectorAll(".subtotal");
    let total = 0;
    allSubTotals.forEach((subtotal) => {
      total += Number(subtotal.textContent);
    });
    totalEl = document.querySelector(".offcanvas").querySelector(".total");
    totalEl.textContent = total;
    const inputEls = products.querySelectorAll("input");
    console.log(inputEls);
    inputEls.forEach((input) => {
      input.addEventListener("change", () => {
        let priceValue = input
          .closest(".product-info")
          .querySelector(".price").textContent;
        console.log(priceValue);

        let subtotalEl = input
          .closest(".product-info")
          .querySelector(".subtotal");
        subtotalEl.textContent = subtotal(
          Number(priceValue),
          Number(input.value)
        );
        let allSubTotals = document
          .querySelector(".offcanvas")
          .querySelectorAll(".subtotal");
        let total = 0;
        allSubTotals.forEach((subtotal) => {
          total += Number(subtotal.textContent);
        });
        totalEl = document.querySelector(".offcanvas").querySelector(".total");
        totalEl.textContent = total;
      });
    });
    const trashEls = products.querySelectorAll(".trash");
    trashEls.forEach((trash) => {
      trash.addEventListener("click", () => {
        console.log(products.querySelectorAll(".product-info").length);
        if (products.querySelectorAll(".product-info").length == 0) {
          trash.closest(".product-info").innerHTML =
            "<h3 class='empty'>Кошничката е празна!</h3>";
          totalEl.textContent = "0";
        } else {
          let closestProductIfo = trash.closest(".product-info");

          closestProductIfo.remove();
          allSubTotals = document
            .querySelector(".offcanvas")
            .querySelectorAll(".subtotal");
          console.log(allSubTotals);
          let total = 0;
          allSubTotals.forEach((subtotal) => {
            total += Number(subtotal.textContent);
          });
          console.log(total);
          totalEl = document
            .querySelector(".offcanvas")
            .querySelector(".total");
          console.log(totalEl);
          totalEl.innerHTML = total;
          console.log(totalEl.textContent);
          
        }
        console.log(products.querySelectorAll(".product-info").length);
      });
    });
  });
});
let subtotal = (price, kolicina = 1) => {
  return price * kolicina;
};

