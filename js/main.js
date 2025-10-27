import { createIcons, Search, ShoppingCart, User, ChevronRight } from "lucide";
import { products } from "./mock-data.js";

localStorage.setItem("productList", JSON.stringify(products));

const productList = JSON.parse(localStorage.getItem("productList"));
const container = document.getElementById("products");
container.innerHTML = "";
container.innerHTML = productList
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
				<button class="btn btn--primary">Thêm vào giỏ</button>
				<a href="#">Xem chi tiết <i data-lucide="chevron-right" width="16" height="16"></i></a>
			</div>
		</div>`,
	)
	.join("");

createIcons({
	icons: {
		Search,
		ShoppingCart,
		User,
		ChevronRight,
	},
});
