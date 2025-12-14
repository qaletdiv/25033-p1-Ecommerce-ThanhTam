import { appState } from "../data/index.js";
import { calCartTotal } from "./helpers.js";

const cartContainerEl = document.getElementById("cart-container");
const cartEl = document.querySelector("[data-cart]");

export function renderCart() {
    if (!(cartEl && cartContainerEl)) {
        return;
    }

    cartEl.style.display = "flex";
    document.body.style.overflow = "hidden";
    cartEl.showModal();

    if (appState.cartItems.length === 0) {
        cartContainerEl.textContent = `Chưa có sản phẩm nào`;
    } else {
        cartContainerEl.innerHTML = appState.cartItems
            .map((product) => {
                const productName = String(product.name || "").replace(
                    /[<>]/g,
                    ""
                );

                return `<div class="cart-item" data-product-id="${product.id}">
            <img src="${product.images[0].url}" alt="${productName}" class="cart-item-img" loading="lazy">
            <div class="cart-item-info">
                <p class="cart-item-name">${productName}</p>
                <div class="cart-item-action">
                    <div class="quantity-controls">
                        <button class="btn-quantity" data-action="decrease" aria-label="Giảm số lượng">-</button>
                        <span class="quantity-value">${product.quantity || 1}</span>
                        <button class="btn-quantity" data-action="increase" aria-label="Tăng số lượng">+</button>
                    </div>
                    <a class="fs-small link" data-remove aria-label="Xóa sản phẩm">Xóa</a>
                </div>
            </div>
            <p class="cart-item-price">${product.price.toLocaleString("vi-VN")}đ</p>
        </div>`;
            })
            .join("");
    }
    calCartTotal(".cart-total-price", cartEl, appState.cartItems);
}
