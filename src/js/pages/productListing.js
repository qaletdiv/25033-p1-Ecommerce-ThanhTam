import { appState } from "../data";
import { renderProducts } from "../utils";

const urlParams = new URLSearchParams(window.location.search);
const categoryName = urlParams.get(`category`) ?? "all";
const productContainerEls = document.getElementById("products-container");
const productCountEl = document.getElementById("products-count");
const pageTitle = document.getElementById("product-category-name");

if (categoryName === "all") {
	productCountEl.textContent = `Hiển thị ${appState.productList.length} sản phẩm`;
	pageTitle.textContent = "Toàn bộ sản phẩm";
	renderProducts(appState.productList, productContainerEls);
} else {
	const currentCategory = appState.productList.filter(
		(product) => product.category === categoryName
	);
	productCountEl.textContent = `Hiển thị ${currentCategory.length} sản phẩm`;
	pageTitle.textContent = `${categoryName}`;
	renderProducts(currentCategory, productContainerEls);
}
