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
let subtotal=(price,kolicina=1)=>{
return price*kolicina
}
let kupiSegaElements = document.querySelectorAll(".card-action-btn");
let productInfoEl= document.querySelector(".offcanvas .product-info");
kupiSegaElements.forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("zdravo");
    let img = el.closest(".product-card").querySelector("img").src;
    console.log(img)
    let price = el.closest(".product-card").querySelector(".card-price").textContent;
    console.log(price)
    let title = el.closest(".product-card").querySelector("h3.card-title").textContent;
    console.log(title);

    let html = ` <div class="product-info">
    <div class="row product d-flex align-items-center justify-content-center">
     <div class="col-4"><img class="cart-img" src="${img}" width="50" height="50" alt=""><span class="product-title">Product</span></div>
     <div class="col-2"><span class="price">${price}</span>$</div>
     <div class="col-2"><input type="number" name="" id="kolicina" value="1"></div>
     <div class="col-2 subtotal"><span class="subtotal">${subtotal(price)}</span><span>$</span></div>
     <div class="col-2"><button class="btn btn-danger">
       <i class="fa fa-trash-o"></i>
     </button></div>
    </div>
    
    <div class="row total">
      <div class="col-2">Тотал</div>
     <div class="col-4"></div>
     <div class="col-2"></div>
     <div class="col-2 "><span class="total">200</span>$</div>
     <div class="col-2"></div>

    </div>
   </div>`;
    productInfoEl.insertAdjacentHTML("beforeend");
    let subtotal=inputEl.addEventListener("change",subtotal.bind(this.value,price))
    subtotalEl=document.querySelector(".subtotal")
    subtotalEl.textContent=subtotal;
    
  });
});
const checkoutEl = document.querySelector(".checkout");
checkoutEl.addEventListener("click", (e) => {
  e.preventDefault();
  tableBody.innerHTML = "<h3>Кошницата е празна!</h3>";
});
