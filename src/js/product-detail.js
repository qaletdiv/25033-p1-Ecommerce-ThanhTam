// import { products } from "./mock-data";

// if (!localStorage.getItem("cart")) {
// 	localStorage.setItem("cart", JSON.stringify(cartArr));
// }

// // let cartItems = JSON.parse(localStorage.getItem("cart"));

const productList = JSON.parse(localStorage.getItem("productList"));

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

const targetProduct = productList.find(
	(product) => product.id === Number(productId),
);

const productDetailContainer = document.getElementById(
	"product-detail-container",
);

if (targetProduct) {
	productDetailContainer.innerHTML = `
    <img class="product-detail-imgs" src="${targetProduct.images[0].url}">
    <div class="product-detail-info">
        <p class="product-category">${targetProduct.category}</p>
         <h1 class="product-name">${targetProduct.name}</h1>
         <h2 class="product-detail-price">${targetProduct.price.toLocaleString("vi-VN")}đ</h2>
           <div class="product-detail-actions">
            <div class="quantity-controls">
                <button class="btn-quantity" product-data-id="${targetProduct.id}" data-action="decrease" aria-label="Decrease quantity">-</button>
                <span class="quantity-value">1</span>
                <button class="btn-quantity" data-action="increase" aria-label="Increase quantity">+</button>
            </div>
            <button class="btn btn--primary btn--lg">Mua ngay</button>
         </div>
         <p class="product-detail-label">Mô tả</p>
         <p class="product-detail-desc">${targetProduct.description}</p>
         <p class="product-detail-label">Thông số kỹ thuật</p>
         <ul class="product-detail-specs">
            ${targetProduct.specifications.map((item) => `<li>${item}</li>`).join("")}
         </ul>
       
    </div>
    `;
} else {
	productDetailContainer.innerHTML = `<p>Product Not Found</p>`;
}

productDetailContainer.addEventListener("click", (e) => {});
