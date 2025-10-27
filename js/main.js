if (!localStorage.getItem("productList")) {
	localStorage.setItem("productList", JSON.stringify(products));
}

const productList = JSON.parse(localStorage.getItem("productList"));
const container = document.getElementById("products");
container.innerHTML = "";
container.innerHTML = productList
	.map(
		(product) => `<div>
		<div>${product.name}</div>
		<img src="${product.images[0].url}">
	</div>`,
	)
	.join("");
