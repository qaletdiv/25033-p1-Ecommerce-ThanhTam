import { productList, user, cartItems } from "./localStorage";

import {
	renderCart,
	renderModal,
	showLoginModal,
	renderProducts,
	addtoCart,
	goToDetail,
	getProductId,
} from "./main";

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

const targetProduct = productList.find(
	(product) => product.id === Number(productId),
);

const productDetailContainer = document.getElementById(
	"product-detail-container",
);

const productRelatedContainer = document.getElementById(
	"product-related-container",
);

if (targetProduct) {
	productDetailContainer.innerHTML = `
    <div class="product-detail-container" data-product-id="${targetProduct.id}">
    <img class="product-detail-imgs" src="${targetProduct.images[0].url}">
    <div class="product-detail-info">
        <p class="product-category">${targetProduct.category}</p>
         <h1 class="product-detail-name fs-h2">${targetProduct.name}</h1>
         <p class="product-detail-price fs-h4">${targetProduct.price.toLocaleString("vi-VN")}đ</p>
           <div class="product-detail-actions">
            <div class="quantity-controls">
                <button class="btn-quantity" data-action="decrease" aria-label="Decrease quantity">-</button>
                <span class="quantity-value">${targetProduct.quantity || 1}</span>
                <button class="btn-quantity" data-action="increase" aria-label="Increase quantity">+</button>
            </div>
     
            <button class="btn btn--primary btn--lg btn-buy-now">Mua ngay</button>
        
         </div>
         <p class="product-detail-label">Mô tả</p>
         <p class="product-detail-desc">${targetProduct.description}</p>
         <p class="product-detail-label">Thông số kỹ thuật</p>
         <ul class="product-detail-specs">
            ${targetProduct.specifications.map((item) => `<li>${item}</li>`).join("")}
         </ul>
       </div>
    </div>
    `;
} else {
	productDetailContainer.innerHTML = `<p>Product Not Found</p>`;
}

productDetailContainer.addEventListener("click", (e) => {
	const addBtn = e.target.closest(".btn-buy-now");
	if (addBtn) {
		if (!user.isLoggedin) {
			showLoginModal();
			return;
		}
		const productId = getProductId(e);

		if (!productId) {
			return;
		} else {
			addtoCart(productId, addBtn);
		}
	}
});

const currentCategory = targetProduct.category;

if (productRelatedContainer) {
	const relatedProduct = productList
		.filter(
			(product) =>
				product.category === currentCategory && product.id !== targetProduct.id,
		)
		.slice(0, 4);

	if (relatedProduct) {
		renderProducts(relatedProduct, productRelatedContainer);
	}

	productRelatedContainer.addEventListener("click", (e) => {
		const viewBtn = e.target.closest("a");

		const addBtn = e.target.closest("button");

		if (addBtn) {
			if (!user.isLoggedin) {
				showLoginModal();
				return;
			}

			const productId = getProductId(e);

			if (!productId) {
				return;
			} else {
				addtoCart(productId, addBtn);
			}
		}

		if (viewBtn) {
			const productId = getProductId(e);
			window.location.href = `/src/pages/product-details.html?id=${productId}`;
			return;
		}
	});
}
