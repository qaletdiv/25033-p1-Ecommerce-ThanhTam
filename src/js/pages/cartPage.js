const { getAllProvince } = await import("vietnam-provinces-js/provinces");
const provinces = await getAllProvince();

import {
	decreaseQuantity,
	increaseQuantity,
	removeFromCart,
} from "../components/cartModal.js";
import {
	appState,
	setCurrentUser,
	updateUsersfromLocal,
} from "../data/index.js";
import { getProductId } from "../utils/helpers.js";
import { calCartTotal } from "../utils/index.js";

const cartContainerEl = document.getElementById("cart-page-container");

//* Render giỏ hàng

if (appState.cartItems.length === 0) {
	cartContainerEl.textContent = "Giỏ hàng của bạn đang trống";
} else {
	cartContainerEl.innerHTML = appState.cartItems
		.map((item) => {
			const productName = String(item.name || "").replace(/[<>]/g, "");
			return `
		<div class="cart-item" data-product-id="${item.id}">
			<img src="${item.images[0].url}" alt="${productName}" class="cart-item-img">
			<div class="cart-item-info">
				<p class="cart-item-name">${productName}</p>
				<div class="cart-item-action">
					<div class="quantity-controls">
						<button class="btn-quantity" data-action="decrease" aria-label="Giảm số lượng">-</button>
						<span class="quantity-value">${item.quantity || 1}</span>
						<button class="btn-quantity" data-action="increase" aria-label="Tăng số lượng">+</button>
					</div>
					<a class="fs-small link" data-remove aria-label="Xóa">Xóa</a>
				</div>
			</div>
			<p class="cart-item-price">${item.price.toLocaleString("vi-VN")}đ</p>
		</div>`;
		})
		.join("");
}

const cartSumEl = document.querySelector(".cart-sum-container");

if (cartSumEl) {
	calCartTotal(".cart-total-price", cartSumEl, appState.cartItems);
}

//* Tăng giảm số lượng item và re render giỏ hàng

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
		localStorage.setItem("cart", JSON.stringify(appState.cartItems));
		window.location.reload();
	}
	if (btnDecrease) {
		decreaseQuantity(productId);
		localStorage.setItem("cart", JSON.stringify(appState.cartItems));
		window.location.reload();
	}

	if (removeBtn) {
		removeFromCart(productId);
		localStorage.setItem("cart", JSON.stringify(appState.cartItems));
		window.location.reload();
	}
});

//* Lấy data từ giỏ hàng và update vào orderHistory của appState.currentUser và user có cùng id trong appState.userList

const paymentBtn = document.getElementById("payBtn");
const formEl = document.getElementById("payment-form");
const nameInput = formEl.querySelector("input[id=fullname]");
const phoneInput = formEl.querySelector("input[id=phone]");
const addressInput = formEl.querySelector("input[id=address]");
const noteTextarea = formEl.querySelector("textarea[id=note]");
const provincesSelectEl = formEl.querySelector("#province");

provinces.forEach((province) => {
	const option = document.createElement("option");
	option.value = province.idProvince;
	option.textContent = province.name;
	provincesSelectEl.appendChild(option);
});

export function removeItemsfromCart() {
	appState.cartItems.length = 0;
	localStorage.setItem("cart", JSON.stringify(appState.cartItems));
}

function addtoCurrentUserCart() {
	const indexToUpdate = appState.userList.findIndex(
		(user) => user.id === appState.currentUser.id
	);

	if (indexToUpdate !== -1) {
		if (!Array.isArray(appState.userList[indexToUpdate].orderHistory)) {
			appState.userList[indexToUpdate].orderHistory = [];
		}
		const orderId = `${appState.currentUser.id}-${Date.now()}`;
		const name = nameInput.value;
		const phone = phoneInput.value;
		const address = addressInput.value;
		const note = noteTextarea.value;
		const city =
			provincesSelectEl.options[provincesSelectEl.selectedIndex].text;
		const selectedPayment = formEl.querySelector(
			"input[name='payment-method']:checked"
		);

		let paymentText;

		if (selectedPayment) {
			const labelEl = document.querySelector(
				`label[for="${selectedPayment.id}"]`
			);
			const spanEl = labelEl?.querySelector("span");
			paymentText = spanEl?.textContent.trim();
		}

		if (
			name === "" ||
			phone === "" ||
			address === "" ||
			city === "" ||
			!selectedPayment
		) {
			alert("vui lòng điền đầy đủ thông tin");
			return;
		} else {
			appState.userList[indexToUpdate].orderHistory.push({
				userId: appState.currentUser.id,
				name: appState.currentUser.name,
				date: Date.now(),
				orderId: orderId,
				nameOrder: name,
				address: address,
				city: city,
				note: note,
				email: appState.currentUser.email,
				phoneNumber: phone,
				paymentMethod: paymentText,
				orderItems: [...appState.cartItems],
				totalItem: appState.cartItems.reduce(
					(total, current) => total + current.quantity,
					0
				),
				totalPrice: appState.cartItems
					.reduce(
						(total, current) => total + current.price * current.quantity,
						0
					)
					.toLocaleString("vi-VN"),
			});

			updateUsersfromLocal(appState.userList);
			setCurrentUser(appState.userList[indexToUpdate]);
			removeItemsfromCart(appState.cartItems);
			goToSummary(orderId);
		}
	}
}

paymentBtn.addEventListener("click", (e) => {
	e.preventDefault();
	addtoCurrentUserCart();
});

export function goToSummary(orderId) {
	window.location.href = `/order-summary.html?id=${orderId}`;
}
