import { addtoCart } from "../components/cartModal.js";
import { appState } from "../data/index.js";
import { createSlug, getProductId, goToDetail } from "../utils/helpers.js";
import { renderProducts, showLoginModal } from "../utils/index.js";

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

const targetProduct = appState.productList.find(
	(product) => product.id === Number(productId)
);

const productDetailContainer = document.getElementById(
	"product-detail-container"
);

const productRelatedContainer = document.getElementById(
	"product-related-container"
);

if (targetProduct) {
	productDetailContainer.innerHTML = `
    <div class="product-detail-container" data-product-id="${targetProduct.id}">
	<img class="product-detail-img" src="${targetProduct.images[0].url}" style="opacity:0">
    <div class="product-detail-info">
        <p class="product-category">${targetProduct.category}</p>
         <h1 class="product-detail-name fs-h2">${targetProduct.name}</h1>
         <p class="product-detail-price fs-h4">${targetProduct.price.toLocaleString("vi-VN")}đ</p>
           <div class="product-detail-actions">
            <div class="quantity-controls">
                <button class="btn-quantity" data-decrease aria-label="Decrease quantity">-</button>
                <span class="quantity-value">${targetProduct.quantity || 1}</span>
                <button class="btn-quantity" data-increase aria-label="Increase quantity">+</button>
            </div>
     
            <button class="btn btn--primary btn--lg btn-buy-now">Thêm vào giỏ</button>
        
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
	const img = productDetailContainer.querySelector(".product-detail-img");

	img.addEventListener("load", () => {
		img.style.transition = "opacity 0.3s ease";
		img.style.opacity = "1";
	});
} else {
	productDetailContainer.innerHTML = `<p>Product Not Found</p>`;
}

productDetailContainer.addEventListener("click", (e) => {
	const addBtn = e.target.closest(".btn-buy-now");
	const btnIncrease = e.target.closest("[data-increase]");
	const btnDecrease = e.target.closest("[data-decrease]");
	const quantityValue = productDetailContainer.querySelector(".quantity-value");
	const quantityNumber = Number(quantityValue.innerText);

	if (btnIncrease) {
		quantityValue.innerText++;
	}

	if (btnDecrease) {
		quantityValue.innerText--;
		if (quantityValue.innerText < 1) {
			quantityValue.innerText = 1;
		}
	}

	if (addBtn) {
		if (!appState.currentUser?.isLoggedin) {
			showLoginModal();
			return;
		}
		const productId = getProductId(e);

		if (!productId) {
			return;
		}

		addtoCart(productId, addBtn, quantityNumber);
	}
});

const currentCategory = targetProduct.category;

if (productRelatedContainer) {
	const relatedProduct = appState.productList
		.filter(
			(product) =>
				product.category === currentCategory && product.id !== targetProduct.id
		)
		.slice(0, 4);

	if (relatedProduct) {
		renderProducts(relatedProduct, productRelatedContainer);
	}

	productRelatedContainer.addEventListener("click", (e) => {
		const viewBtn = e.target.closest("a");

		const addBtn = e.target.closest("button");

		if (addBtn) {
			if (!appState.currentUser?.isLoggedin) {
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
			const product = appState.productList.find(
				(product) => product.id === productId
			);
			const productName = createSlug(product.name);
			goToDetail(productId, productName);
			return;
		}
	});
}
