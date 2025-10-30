// import {
// 	createIcons,
// 	Search,
// 	ShoppingCart,
// 	User,
// 	ChevronRight,
// 	X,
// } from "lucide";

import { products } from "./mock-data.js";

// const ICON_CONFIG = {
// 	icons: {
// 		Search,
// 		ShoppingCart,
// 		User,
// 		ChevronRight,
// 		X,
// 	},
// };

let isLoggedin = false;

//* DOM ====================================================================================================================

const cartBtnEl = document.getElementById("cartBtn");
const productContainerEl = document.getElementById("products-container");
const searchInputEl = document.querySelector("[type=search]");
const headerEl = document.querySelector("header");
const filterEl = document.getElementById("filter-container");
const productList = JSON.parse(localStorage.getItem("productList"));
const selectEl = document.getElementById("price-range");
localStorage.setItem("productList", JSON.stringify(products));

//* Main ===================================================================================================================

document.addEventListener("DOMContentLoaded", () => {
	renderProducts(productList, productContainerEl);
	// createIcons(ICON_CONFIG);
});

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
	// createIcons({ icons: { ChevronRight } });
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
		// createIcons({ icons: { X } });
	}
}

//* Login Notification ==============================================================================================

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

//* Search by name ===============================================================================================

function renderSearchModal() {
	const searchKey = searchInputEl.value.trim();
	const matchingProducts = products.filter(
		(product) =>
			product.name.trim().toLowerCase().includes(searchKey.toLowerCase()) ||
			product.brand.trim().toLowerCase().includes(searchKey.toLowerCase()) ||
			product.keywords.some((keyword) =>
				keyword.trim().toLowerCase().includes(searchKey.toLowerCase()),
			),
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

searchInputEl.addEventListener("click", renderSearchModal);

//* Filter by categories =========================================================================================

function updateCurrentCategory(category) {
	productContainerEl.dataset.category = `${category}` || "all";
}

const categoriesEl = document.getElementById("categories-container");

const productBycategories = Object.groupBy(
	products,
	(product) => product.category,
);

const categoriesName = Object.keys(productBycategories);

categoriesName.forEach((category) => {
	const item = document.createElement("button");
	item.classList.add("btn", "btn--link", "btn--sm");
	item.innerText = `${category}`;
	item.dataset.category = `${category}`;
	categoriesEl.append(item);
});

filterEl.addEventListener("click", (e) => {
	const buttonId = e.target.innerText.toLowerCase();
	const pageTitleEl = document.getElementById("product-category-name");
	const matchCategoryProducts = productBycategories[buttonId];

	if (e.target.id === "show-all-btn") {
		renderProducts(products, productContainerEl);
		pageTitleEl.textContent = "Tất cả sản phẩm";
		productContainerEl.dataset.category = "all";
		return;
	}

	if (!matchCategoryProducts) {
		return;
	} else {
		renderProducts(matchCategoryProducts, productContainerEl);
		selectEl.value = "all";
	}

	pageTitleEl.textContent =
		buttonId.toUpperCase().charAt(0).toUpperCase() + buttonId.slice(1);

	updateCurrentCategory(buttonId);
	document.querySelector(".empty-message").remove();
});

console.log(productContainerEl.dataset.category);

//* Filter by prices ===========================================================================================

function showEmptyMessage(container, message) {
	const emptyText = document.createElement("p");
	emptyText.textContent = message;
	emptyText.classList.add("empty-message");
	container.before(emptyText);
}

filterEl.addEventListener("change", (e) => {
	const oldMessage = document.querySelector(".empty-message");
	if (oldMessage) {
		oldMessage.remove();
	}

	const currentCategory = productContainerEl.dataset.category;

	const selectedValue = e.target.value;

	if (selectedValue === "0-5") {
		const productArrPrice = productList.filter(
			(product) =>
				product.price < 5000000 &&
				(currentCategory === "all" || product.category === currentCategory),
		);
		renderProducts(productArrPrice, productContainerEl);
		if (productArrPrice.length === 0) {
			showEmptyMessage(
				productContainerEl,
				"Không tìm thấy sản phẩm trong tầm giá",
			);
		}
	} else if (selectedValue === "5-10") {
		const productArrPrice = productList.filter(
			(product) =>
				product.price >= 5000000 &&
				product.price <= 10000000 &&
				(currentCategory === "all" || product.category === currentCategory),
		);
		renderProducts(productArrPrice, productContainerEl);
		if (productArrPrice.length === 0) {
			showEmptyMessage(
				productContainerEl,
				"Không tìm thấy sản phẩm trong tầm giá",
			);
		}
	} else if (selectedValue === "10-20") {
		const productArrPrice = productList.filter(
			(product) =>
				product.price >= 10000000 &&
				product.price <= 20000000 &&
				(currentCategory === "all" || product.category === currentCategory),
		);
		renderProducts(productArrPrice, productContainerEl);
		if (productArrPrice.length === 0) {
			showEmptyMessage(
				productContainerEl,
				"Không tìm thấy sản phẩm trong tầm giá",
			);
		}
	} else if (selectedValue === "20-40") {
		const productArrPrice = productList.filter(
			(product) =>
				20000000 <= product.price &&
				product.price <= 40000000 &&
				(currentCategory === "all" || product.category === currentCategory),
		);
		renderProducts(productArrPrice, productContainerEl);
		if (productArrPrice.length === 0) {
			showEmptyMessage(
				productContainerEl,
				"Không tìm thấy sản phẩm trong tầm giá",
			);
		}
	} else if (selectedValue === "40-100") {
		const productArrPrice = productList.filter(
			(product) =>
				product.price >= 40000000 &&
				(currentCategory === "all" || product.category === currentCategory),
		);
		renderProducts(productArrPrice, productContainerEl);
		if (productArrPrice.length === 0) {
			showEmptyMessage(
				productContainerEl,
				"Không tìm thấy sản phẩm trong tầm giá",
			);
		}
	} else if (selectedValue === "all") {
		const productArrPrice = productList.filter(
			(product) =>
				currentCategory === "all" || product.category === currentCategory,
		);
		renderProducts(productArrPrice, productContainerEl);
	}
});
