import { appState } from "../data";
import { renderProducts } from "../utils";

const featuredList = document.getElementById("products-featured-container");

if (document.getElementById("products-featured-container")) {
	const featuredProductList = appState.productList.filter(
		(product) => product.featured === true
	);
	renderProducts(featuredProductList, featuredList);
}
