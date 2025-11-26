import { appState } from "../data/index.js";
import { renderProducts } from "./productRenderer.js";


























































// const categoriesEl = document.getElementById("categories-container");
// const filterEl = document.getElementById("filter-container");
// const productContainerEl = document.getElementById("products-container");

// function updateCurrentCategory(category) {
// 	productContainerEl.dataset.category = `${category}` || "all";
// }

// if (productContainerEl && categoriesEl) {
// 	const productBycategories = Object.groupBy(appState.productList, (product) => product.category);
// 	const categoriesName = Object.keys(productBycategories);
// 	categoriesName.forEach((category) => {
// 		const item = document.createElement("button");
// 		item.classList.add("btn", "btn--link", "btn--sm");
// 		item.innerText = `${category}`;
// 		item.dataset.category = `${category}`;
// 		categoriesEl.append(item);
// 	});

// 	if (filterEl) {
// 		filterEl.addEventListener("click", (e) => {
// 			const productId = e.target.innerText.toLowerCase();
// 			const pageTitleEl = document.getElementById("product-category-name");
// 			const matchCategoryProducts = productBycategories[productId];

// 			if (e.target.id === "show-all-btn") {
// 				renderProducts(appState.productList, productContainerEl);
// 				pageTitleEl.textContent = "Toàn bộ sản phẩm";
// 				productContainerEl.dataset.category = "all";
// 			}

// 			if (!matchCategoryProducts) {
// 				return;
// 			} else {
// 				renderProducts(matchCategoryProducts, productContainerEl);
// 				selectEl.value = "all";
// 			}

// 			pageTitleEl.textContent =
// 				productId.toUpperCase().charAt(0).toUpperCase() + productId.slice(1);

// 			updateCurrentCategory(productId);

// 			if (document.querySelector(".empty-message")) {
// 				document.querySelector(".empty-message").remove();
// 			}
// 		});
// 	}
// }

// const selectEl = document.getElementById("price-range");

// function showEmptyMessage(container, message) {
// 	const emptyText = document.createElement("p");
// 	emptyText.textContent = message;
// 	emptyText.classList.add("empty-message");
// 	container.before(emptyText);
// }

// if (filterEl) {
// 	filterEl.addEventListener("change", (e) => {
// 		const oldMessage = document.querySelector(".empty-message");
// 		if (oldMessage) {
// 			oldMessage.remove();
// 		}

// 		const currentCategory = productContainerEl.dataset.category;

// 		const selectedValue = e.target.value;

// 		if (selectedValue === "0-5") {
// 			const productArrPrice = appState.productList.filter(
// 				(product) =>
// 					product.price < 5000000 &&
// 					(currentCategory === "all" || product.category === currentCategory)
// 			);
// 			renderProducts(productArrPrice, productContainerEl);
// 			if (productArrPrice.length === 0) {
// 				showEmptyMessage(productContainerEl, "Không tìm thấy sản phẩm trong tầm giá");
// 			}
// 		} else if (selectedValue === "5-10") {
// 			const productArrPrice = appState.productList.filter(
// 				(product) =>
// 					product.price >= 5000000 &&
// 					product.price <= 10000000 &&
// 					(currentCategory === "all" || product.category === currentCategory)
// 			);
// 			renderProducts(productArrPrice, productContainerEl);
// 			if (productArrPrice.length === 0) {
// 				showEmptyMessage(productContainerEl, "Không tìm thấy sản phẩm trong tầm giá");
// 			}
// 		} else if (selectedValue === "10-20") {
// 			const productArrPrice = appState.productList.filter(
// 				(product) =>
// 					product.price >= 10000000 &&
// 					product.price <= 20000000 &&
// 					(currentCategory === "all" || product.category === currentCategory)
// 			);
// 			renderProducts(productArrPrice, productContainerEl);
// 			if (productArrPrice.length === 0) {
// 				showEmptyMessage(productContainerEl, "Không tìm thấy sản phẩm trong tầm giá");
// 			}
// 		} else if (selectedValue === "20-40") {
// 			const productArrPrice = appState.productList.filter(
// 				(product) =>
// 					20000000 <= product.price &&
// 					product.price <= 40000000 &&
// 					(currentCategory === "all" || product.category === currentCategory)
// 			);
// 			renderProducts(productArrPrice, productContainerEl);
// 			if (productArrPrice.length === 0) {
// 				showEmptyMessage(productContainerEl, "Không tìm thấy sản phẩm trong tầm giá");
// 			}
// 		} else if (selectedValue === "40-100") {
// 			const productArrPrice = appState.productList.filter(
// 				(product) =>
// 					product.price >= 40000000 &&
// 					(currentCategory === "all" || product.category === currentCategory)
// 			);
// 			renderProducts(productArrPrice, productContainerEl);
// 			if (productArrPrice.length === 0) {
// 				showEmptyMessage(productContainerEl, "Không tìm thấy sản phẩm trong tầm giá");
// 			}
// 		} else if (selectedValue === "all") {
// 			const productArrPrice = appState.productList.filter(
// 				(product) => currentCategory === "all" || product.category === currentCategory
// 			);
// 			renderProducts(productArrPrice, productContainerEl);
// 		}
// 	});
// }
