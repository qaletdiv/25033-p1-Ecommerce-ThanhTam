import { appState } from "../data";
import { renderProducts } from "../utils";
import { sortHandler } from "../features/productFilter";

const urlParams = new URLSearchParams(window.location.search);
const categoryName = urlParams.get(`category`) ?? "all";
const pageTitle = document.getElementById("product-category-name");
const categoriesEl = document.getElementById("categories-container");
const filterEl = document.getElementById("filter-container");
const productContainerEl = document.getElementById("products-container");
const sortEl = document.getElementById("sort-options");

//* Render product theo category name

if (categoryName === "all") {
	pageTitle.textContent = "Toàn bộ sản phẩm";
	renderProducts(appState.productList, productContainerEl);
}

function updateCurrentCategory(category) {
	productContainerEl.dataset.category = `${category}` || "all";
}

const productBycategories = Object.groupBy(
	appState.productList,
	(product) => product.category
);

const categoriesName = Object.keys(productBycategories);

categoriesName.forEach((category) => {
	const item = document.createElement("button");
	item.classList.add("btn", "btn--link", "btn--sm");
	item.innerText = `${category}`;
	item.dataset.category = `${category}`;
	categoriesEl.append(item);
});

//* Event Delegation //////////////////////////////////////////////////////////////

categoriesEl.addEventListener("click", (e) => {
	const productId = e.target.innerText.toLowerCase();
	const pageTitleEl = document.getElementById("product-category-name");
	const matchCategoryProducts = productBycategories[productId];
	sortEl.value = "featured";

	if (e.target.id === "show-all-btn") {
		renderProducts(appState.productList, productContainerEl);
		pageTitleEl.textContent = "Toàn bộ sản phẩm";
		productContainerEl.dataset.category = "all";
	}

	if (!matchCategoryProducts) {
		return;
	} else {
		renderProducts(matchCategoryProducts, productContainerEl);
	}

	pageTitleEl.textContent =
		productId.toUpperCase().charAt(0).toUpperCase() + productId.slice(1);

	updateCurrentCategory(productId);

	if (document.querySelector(".empty-message")) {
		document.querySelector(".empty-message").remove();
	}
});

filterEl.addEventListener("change", (e) => {
	const selectedValue = e.target.value;
	const pageTitleEl = document.getElementById("product-category-name");
	const currentCategory = pageTitleEl.textContent.trim().toLowerCase();
	const productMatchCategory = appState.productList.filter(
		(product) => product.category === currentCategory.trim().toLowerCase()
	);

	const productsToSort =
		productMatchCategory.length > 0
			? productMatchCategory
			: appState.productList;

	const sortedProducts = sortHandler(selectedValue, productsToSort);
	renderProducts(sortedProducts, productContainerEl);
});
