import { animate, stagger, inView } from "motion";

export function renderProducts(arr, container) {
	container.innerHTML = "";
	container.innerHTML = arr
		.map((product) => {
			const productName = String(product.name || "").replace(/[<>]/g, "");
			return `
        <div class="product-card" data-product-id="${product.id}">
            <a class="product-img" data-product-id="${product.id}" href="#"><img src="${product.images[0].url}" loading="lazy"></a>
            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <a class="product-name link">${productName}</a>
                <p class="product-price">${product.price.toLocaleString("vi-VN")}đ</p>
            </div>
            <div class="btn-group">
                <button class="btn btn--primary" >Thêm vào giỏ</button>
                <a href="#">Xem chi tiết <span><i class="lucide icon-chevron-right size-small"></i></span></a>
            </div>
        </div>`;
		})
		.join("");

	const productItem = document.querySelectorAll(".product-card");

	inView(container, () => {
		animate(productItem, { y: [10, 0], opacity: [0, 1] }, { duration: 0.18, delay: stagger(0.1) });
	});
}
