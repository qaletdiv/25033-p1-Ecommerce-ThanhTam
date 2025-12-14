import { appState } from "../data/index.js";
import { renderCart, updateCartBadge } from "../utils/index.js";

const cartEl = document.querySelector("[data-cart]");

export function addtoCart(productId, button, quantityNum) {
  const product = appState.productList.find(
    (product) => product.id === productId
  );
  const existingInCart = appState.cartItems.find(
    (product) => product.id === productId
  );

  if (!existingInCart) {
    appState.cartItems.unshift({
      ...product,
      quantity: quantityNum ? quantityNum : 1,
    });
  } else {
    existingInCart.quantity += quantityNum;
  }

  button.disabled = true;
  button.textContent = "Đang thêm...";

  localStorage.setItem("cart", JSON.stringify(appState.cartItems));

  setTimeout(() => {
    updateCartBadge(appState.cartItems);
    renderCart();
    requestAnimationFrame(() => {
      const itemInCart = cartEl.querySelector(
        `[data-product-id="${productId}"]`
      );
      itemInCart.scrollIntoView({ behavior: "smooth", block: "center" });
      itemInCart.classList.add("highlighted-in-cart");
    });

    button.disabled = false;
    button.textContent = "Thêm vào giỏ";
  }, 400);
}

export function increaseQuantity(productId) {
  const product = appState.cartItems.find(
    (product) => product.id === productId
  );
  product.quantity++;
}

export function decreaseQuantity(productId) {
  const product = appState.cartItems.find(
    (product) => product.id === productId
  );
  product.quantity--;
  if (product.quantity < 1) {
    const index = appState.cartItems.findIndex(
      (product) => product.id === productId
    );

    if (index !== -1) {
      appState.cartItems.splice(index, 1);
    }
  }
}

export function removeFromCart(productId) {
  const index = appState.cartItems.findIndex(
    (product) => product.id === productId
  );

  if (index !== -1) {
    appState.cartItems.splice(index, 1);
  }
}
