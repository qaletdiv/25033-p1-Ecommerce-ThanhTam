import { appState } from "../data/index.js";
import { createSlug, getProductId, goToDetail } from "./helpers.js";

const headerEl = document.querySelector("header");
const searchInputEl = document.querySelector("[type=search]");

export function renderSearchModal() {
	const searchKey = searchInputEl.value.trim();
	const matchingProducts = appState.productList.filter(
		(product) =>
			product.name.trim().toLowerCase().includes(searchKey.toLowerCase()) ||
			product.brand.trim().toLowerCase().includes(searchKey.toLowerCase()) ||
			product.keywords.some((keyword) =>
				keyword.trim().toLowerCase().includes(searchKey.toLowerCase())
			)
	);

	const searchResultEl = document.createElement("div");
	searchResultEl.classList.add("search-result-container");

	const existingSearchModal = document.querySelector(".search-result-container");

	if (existingSearchModal) {
		existingSearchModal.remove();
	}

	if (searchKey === "") {
		existingSearchModal.remove();
		return;
	}

	if (matchingProducts.length === 0) {
		searchResultEl.innerHTML = `<p class="no-result-text">Không tìm thấy tên sản phẩm</p>`;
		headerEl.append(searchResultEl);
	} else {
		searchResultEl.innerHTML = matchingProducts
			.map(
				(product) => `
		<a href="#" class="search-result-item" data-product-id="${product.id}">
			<img src="${product.images[0].url}" alt="${product.name}" class="search-result-img">
			<div class="search-result-info">
				<p class="search-result-name">${product.name}</p>
				<p class="search-result-price">${product.price.toLocaleString("vi-VN")}đ</p>
			</div>
		</a>`
			)
			.join("");
		headerEl.append(searchResultEl);

		const searchResultContainer = document.querySelector(".search-result-container");
		if (searchResultContainer) {
			const searchResultItems = searchResultContainer.querySelectorAll(".search-result-item");

			searchResultItems.forEach((item) => {
				item.addEventListener("click", (e) => {
					e.preventDefault();
					const productId = getProductId(e);
					const product = appState.productList.find((product) => product.id === productId);
					const productName = createSlug(product.name);
					goToDetail(productId, productName);
				});
			});
		}
	}
}
