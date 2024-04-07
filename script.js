const carts = document.querySelectorAll(".card-action-btn");
let imgList = [];
carts.forEach((cart) => {
  cart.addEventListener("click", () => {
    console.log("zdravo");
    let img = cart
      .closest(".product-card")
      .querySelector("img")
      .getAttribute("src");
    console.log(img);
    if (!JSON.parse(localStorage.getItem("imgList"))) {
      let imgList = [];
      imgList.push(img);
      localStorage.setItem("imgList", JSON.stringify(imgList));
    } else {
      let list = JSON.parse(localStorage.getItem("imgList"));
      console.log(list);
      list.push(img);
      localStorage.setItem("imgList", JSON.stringify(list));
    }

    let price = cart
      .closest(".product-card")
      .querySelector(".card-price")
      .getAttribute("value");

    localStorage.setItem("price", price);
    let parfumeName = cart
      .closest(".product-card")
      .querySelector(".card-title a").textContent;

    localStorage.setItem("parfumeName", parfumeName);
  });
});
