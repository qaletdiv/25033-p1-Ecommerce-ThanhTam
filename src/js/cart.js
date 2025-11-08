import {
	getCurrentUser,
	getUsersfromLocal,
	setCurrentUser,
	updateUsersfromLocal,
} from "./localStorage";
import {
	calCartTotal,
	cartItems,
	decreaseQuantity,
	increaseQuantity,
	removeFromCart,
	getProductId,
	currentUser,
	userList,
} from "./main";

const cartContainerEl = document.getElementById("cart-page-container");

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
              
				<p class="cart-page-item-name">${productName}</p>
				<div class="cart-page-item-actions">
				<div class="quantity-controls">
					<button class="btn-quantity" data-action="decrease" aria-label="Giảm số lượng">-</button>
					<span class="quantity-value">${item.quantity || 1}</span>
					<button class="btn-quantity" data-action="increase" aria-label="Tăng số lượng">+</button>
				</div>
                <a class="fs-small link" data-remove aria-label="Xóa">Xóa</a>
			</div>
		</div>
			
			<p class="cart-page-item-price">${item.price.toLocaleString("vi-VN")}đ</p>
		</div>`;
		})
		.join("");
}

const cartSumEl = document.querySelector(".cart-sum-container");

if (cartSumEl) {
	calCartTotal(".cart-total-price", cartSumEl, cartItems);
}

const cartEl = document.querySelector(".cart-page-container");

cartEl.addEventListener("click", (e) => {
	const cartCloseBtnEl = e.target.closest("[data-close]");
	const removeBtn = e.target.closest("[data-remove]");

	if (cartCloseBtnEl) {
		cartEl.close();
		cartEl.style.display = "none";
		document.body.style.overflow = "";

		return;
	}

	const productId = getProductId(e);

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

const paymentBtn = document.getElementById("payBtn");

paymentBtn.addEventListener("click", addtoCurrentUserCart);

function addtoCurrentUserCart() {
	const indexToUpdate = userList.findIndex((user) => user.id === currentUser.id);

	if (indexToUpdate !== -1) {
		if (!Array.isArray(userList[indexToUpdate].orderHistory)) {
			userList[indexToUpdate].orderHistory = [];
		}

		const orderId = `${currentUser.id}-${Date.now()}`;

		userList[indexToUpdate].orderHistory.push({
			userId: currentUser.id,
			name: currentUser.name,
			orderId: orderId,
			orderItems: [...cartItems],
			totalItem: cartItems.reduce((total, current) => total + current.quantity, 0),
			totalPrice: cartItems
				.reduce((total, current) => total + current.price * current.quantity, 0)
				.toLocaleString("vi-VN"),
		});

		updateUsersfromLocal(userList);
		setCurrentUser(userList[indexToUpdate]);
		removeItemsfromCart(cartItems);
	}
}

export function removeItemsfromCart(cartItems) {
	cartItems.length = 0;
	localStorage.setItem("cart", JSON.stringify(cartItems));
}
