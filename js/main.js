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

const cartBtnEl = document.getElementById("cartBtn");
const productContainerEl = document.getElementById("products-container");
const searchInputEl = document.querySelector("[type=search]");
const headerEl = document.querySelector("header");

//* MAIN ===================================================================================================================

document.addEventListener("DOMContentLoaded", () => {
	initProductData();
	const productList = JSON.parse(localStorage.getItem("productList"));
	renderProducts(productList, productContainerEl);
	createIcons(ICON_CONFIG);
});

function initProductData() {
	localStorage.setItem("productList", JSON.stringify(products));
}

function renderProducts(arr, container) {
	container.innerHTML = "";
	container.innerHTML = arr
		.map(
			(product) => `
		<div class="product-card">
			<a class="product-img"  href="#"><img src="${product.images[0].url}"></a>
			<div class="product-info">
				<a href="#" class="product-category">${product.category}</a>
				<p class="product-name">${product.name}</p>
				<p class="product-price">${product.price.toLocaleString("vi-VN")}đ</p>
			</div>
			<div class="btn-group">
				<button class="btn btn--primary" data-product-id="${product.id}">Thêm vào giỏ</button>
				<a href="#">Xem chi tiết <i data-lucide="chevron-right" width="16" height="16"></i></a>
			</div>
		</div>`,
		)
		.join("");
	createIcons({ icons: { ChevronRight } });
}

function modalRender() {
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
	document.body.style.overflow = "hidden";
	modal.showModal();
}

function modalClose() {
	const modal = document.querySelector("[data-modal]");
	if (modal) {
		modal.close();
		document.body.style.overflow = "";
		modal.remove();
	}
}

function addToCartHandler() {
	if (!isLoggedin) {
		modalRender();
		modalOpen();
	}
}

function renderSearchModal() {
	const searchKey = searchInputEl.value.trim();
	const matchingProducts = products.filter((product) =>
		product.name.trim().toLowerCase().includes(searchKey.toLowerCase()),
	);

	const searchResultEl = document.createElement("div");
	searchResultEl.classList.add("search-result-container");
	const existingSearchResult = document.querySelector(
		".search-result-container",
	);

	if (searchKey === "") {
		existingSearchResult.remove();
		return;
	}

	if (existingSearchResult) {
		existingSearchResult.remove();
	}

	if (matchingProducts.length === 0) {
		searchResultEl.innerHTML = `<p class="no-result-text">Không tìm thấy tên sản phẩm</p>`;
		headerEl.append(searchResultEl);
	} else {
		searchResultEl.innerHTML = matchingProducts
			.map(
				(product) => `
		<a href="#" class="search-result-item">
			<img src="${product.images[0].url}" alt="${product.name}" class="search-result-img">
			<div class="search-result-info">
				<p class="search-result-name">${product.name}</p>
				<p class="search-result-price">${product.price.toLocaleString("vi-VN")}đ</p>
			</div>
		</a>`,
			)
			.join("");
		headerEl.append(searchResultEl);
	}
}

cartBtnEl.addEventListener("click", addToCartHandler);

document.body.addEventListener("click", (e) => {
	if (e.target.classList.contains("modal-close")) {
		modalClose();
	}
});

productContainerEl.addEventListener("click", (e) => {
	const buttonId = e.target.dataset.productId;
	if (!buttonId) {
		return;
	}
	addToCartHandler();
});
searchInputEl.addEventListener("keyup", renderSearchModal);
searchInputEl.addEventListener("blur", () => {
	const existingSearchResult = document.querySelector(
		".search-result-container",
	);
	if (!existingSearchResult) {
		return;
	}
	existingSearchResult.remove();
});

//* Filter by categories =========================================================================================

const productBycategories = Object.groupBy(
	products,
	(product) => product.category,
);

const categoriesName = Object.keys(productBycategories);

const filterEl = document.getElementById("filter-container");

categoriesName.forEach((category) => {
	const item = document.createElement("button");
	item.classList.add("btn", "btn--link", "btn--sm");
	item.innerText = `${category}`;
	filterEl.append(item);
});

filterEl.addEventListener("click", (e) => {
	const buttonId = e.target.innerText.toLowerCase();

	if (e.target.id === "show-all-btn") {
		renderProducts(products, productContainerEl);
		return;
	}

	// tạo ra 1 array product thuộc category
	const matchCategoryProducts = productBycategories[buttonId];
	if (!matchCategoryProducts) {
		return;
	} else {
		renderProducts(matchCategoryProducts, productContainerEl);
	}
});
