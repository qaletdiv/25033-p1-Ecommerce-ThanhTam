export function getProductId(e) {
  const productEl = e.target?.closest("[data-product-id]");

  if (!productEl) {
    return;
  }

  return Number(productEl.dataset.productId);
}

export function createSlug(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export function goToDetail(productId, productName) {
  window.location.href = `/product-details.html?id=${productId}&name=${productName}`;
}

export function goToCategory(categoryName) {
  window.location.href = `/products-list.html?category=${categoryName}`;
}

export function calCartTotal(classSelector, container, arr) {
  const totalPriceEl = container.querySelector(classSelector);
  const totalPrice = arr.reduce((total, currentItem) => {
    return total + currentItem.price * currentItem.quantity;
  }, 0);

  if (!totalPriceEl) {
    return;
  }
  totalPriceEl.textContent = `${totalPrice.toLocaleString("vi-VN")}đ`;
}

export function updateCartBadge(cartItems) {
  const badgeEl = document.querySelector("[data-cart-count]");
  if (!badgeEl) {
    return;
  }

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  if (totalQuantity > 0) {
    badgeEl.textContent = `(${totalQuantity})`;
    badgeEl.style.display = "inline";
  } else {
    badgeEl.textContent = "";
    badgeEl.style.display = "none";
  }
}
