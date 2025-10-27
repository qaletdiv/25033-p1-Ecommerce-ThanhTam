import { createIcons, Search, ShoppingCart, User } from "lucide";
import { products } from "./mock-data.js";

createIcons({
	icons: {
		Search,
		ShoppingCart,
		User,
	},
});

localStorage.setItem("productList", JSON.stringify(products));

const productList = JSON.parse(localStorage.getItem("productList"));
const container = document.getElementById("products");
container.innerHTML = "";
container.innerHTML = productList
	.map(
		(product) => `
		<div class="product-card">
			<img class="product-img" src="${product.images[0].url}">
			<div class="product-info">
				<a class="product-category">${product.category}</a>
				<p class="product-name">${product.name}</p>
				<p class="product-price">${product.price}</p>
			</div>
			<button class="btn btn--primary">Xem ngay</button>
		</div>`,
	)
	.join("");
