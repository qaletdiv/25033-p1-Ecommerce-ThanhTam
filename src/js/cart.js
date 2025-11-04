import { cartItems, user, productList } from "./localStorage";

import {
	calCartTotal,
	increaseQuantity,
	decreaseQuantity,
	removeFromCart,
} from "./main";

const cartContainerEl = document.getElementById("cart-page-container");
const header = document.querySelector(".header");
const cartBtn = header.querySelector("#cartBtn");
console.log(cartBtn);

if (cartItems.length === 0) {
	cartContainerEl.textContent = "Giỏ hàng của bạn đang trống";
} else {
	cartContainerEl.innerHTML = cartItems
		.map((item) => {
			const productName = String(item.name || "").replace(/[<>]/g, "");
			return `
		<div class="cart-page-item" data-product-id="${item.id}">
			<img src="${item.images[0].url}" alt="${productName}" class="cart-page-item-img">
			<div class="cart-page-item-info">
                <p class="cart-page-item-category">${item.category}</p>
				<p class="cart-page-item-name">${productName}</p>
			</div>
			<div class="cart-page-item-actions">
				<div class="quantity-controls">
					<button class="btn-quantity" data-action="decrease" aria-label="Giảm số lượng">-</button>
					<span class="quantity-value">${item.quantity || 1}</span>
					<button class="btn-quantity" data-action="increase" aria-label="Tăng số lượng">+</button>
				</div>
                <a class="fs-small link" data-remove aria-label="Xóa">Xóa</a>
				<p class="cart-page-item-price">${item.price.toLocaleString("vi-VN")}đ</p>
				
			</div>
		</div>`;
		})
		.join("");
}
const cartSumEl = document.querySelector(".cart-sum-container");
if (cartSumEl) {
	calCartTotal(".cart-total-price", cartSumEl, cartItems);
}

const cartEl = document.querySelector(".cart-page-container");

if (cartEl) {
	cartEl.addEventListener("click", (e) => {
		const cartCloseBtnEl = e.target.closest("[data-close]");
		const removeBtn = e.target.closest("[data-remove]");

		if (cartCloseBtnEl) {
			cartEl.close();
			cartEl.style.display = "none";
			document.body.style.overflow = "";

			return;
		}

		const productId = Number(
			e.target.closest("[data-product-id]").dataset.productId,
		);

		if (!productId) {
			return;
		}

		const btnIncrease = e.target.dataset.action === "increase";
		const btnDecrease = e.target.dataset.action === "decrease";

		if (btnIncrease) {
			increaseQuantity(productId);
			localStorage.setItem("cart", JSON.stringify(cartItems));
			window.location.reload();
		}
		if (btnDecrease) {
			decreaseQuantity(productId);
			localStorage.setItem("cart", JSON.stringify(cartItems));
			window.location.reload();
		}

		if (removeBtn) {
			removeFromCart(productId);
			localStorage.setItem("cart", JSON.stringify(cartItems));
			window.location.reload();
		}
	});
}
