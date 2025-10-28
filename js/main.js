import {
	createIcons,
	Search,
	ShoppingCart,
	User,
	ChevronRight,
	X,
} from "lucide";

import { products } from "./mock-data.js";

const ICON_CONFIG = {
	icons: {
		Search,
		ShoppingCart,
		User,
		ChevronRight,
		X,
	},
};

let isLoggedin = false;

//* DOM ====================================================================================================================

const productList = JSON.parse(localStorage.getItem("productList"));
const modal = document.querySelector("[data-modal]");
const modalCloseBtn = document.querySelector("[data-close-modal]");
const cartBtnEl = document.getElementById("cartBtn");
const productContainerEl = document.getElementById("products-container");

//* MAIN ===================================================================================================================

document.addEventListener("DOMContentLoaded", () => {
	initProductData();
	renderProducts();
	createIcons(ICON_CONFIG);
});

function initProductData() {
	localStorage.setItem("productList", JSON.stringify(products));
}

function renderProducts() {
	productContainerEl.innerHTML = "";
	productContainerEl.innerHTML = productList
		.map(
			(product) => `
		<div class="product-card">
			<a class="product-img"  href="#"><img src="${product.images[0].url}"></a>
			<div class="product-info">
				<a href="#" class="product-category">${product.category}</a>
				<p class="product-name">${product.name}</p>
				<p class="product-price">${product.price}</p>
			</div>
			<div class="btn-group">
				<button class="btn btn--primary" data-product-id="${product.id}">Thêm vào giỏ</button>
				<a href="#">Xem chi tiết <i data-lucide="chevron-right" width="16" height="16"></i></a>
			</div>
		</div>`,
		)
		.join("");
}

function modalOpen() {
	if (!isLoggedin) {
		modal.showModal();
		document.body.style.overflow = "hidden";
	} else {
		return;
	}
}

function modalClose() {
	modal.close();
	document.body.style.overflow = "";
}

cartBtnEl.addEventListener("click", modalOpen);
modalCloseBtn.addEventListener("click", modalClose);

productContainerEl.addEventListener("click", (e) => {
	if (!isLoggedin) {
		const button = e.target.dataset.productId;
		if (button) {
			modalOpen();
		}
	} else {
		return;
	}
});
