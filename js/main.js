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

function modalHandler() {
	const existingModal = document.querySelector("[data-modal]");
	if (!existingModal) {
		document.body.insertAdjacentHTML(
			"beforeend",
			`<dialog data-modal class="modal">
        <div>
            <p class="modal-title">Please login to proceed</p>
            <button class="btn btn--icon-only btn--small modal-close"><i data-lucide="X"></i></button>
            <div class="btn-group">
                <button class="btn btn--primary">Đăng nhập</button>
                <button class="btn">Đăng ký</button>
            </div>
        </div>
    </dialog>`,
		);
		createIcons({ icons: { X } });
	}
}

function modalOpen() {
	const modal = document.querySelector("[data-modal]");
	if (!isLoggedin) {
		modal.showModal();
		document.body.style.overflow = "hidden";
	}
}

function modalClose() {
	const modal = document.querySelector("[data-modal]");
	if (modal) {
		modal.close();
		document.body.style.overflow = "";
		modal.remove();
	}
}

cartBtnEl.addEventListener("click", () => {
	modalHandler();
	modalOpen();
});

document.body.addEventListener("click", (e) => {
	if (e.target.classList.contains("modal-close")) {
		modalClose();
	}
});

productContainerEl.addEventListener("click", (e) => {
	if (!isLoggedin) {
		const button = e.target.dataset.productId;
		if (button) {
			modalHandler();
			modalOpen();
		}
	}
});
