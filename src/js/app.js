import {
  addtoCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "./components/cartModal.js";
import { appState } from "./data/index.js";
import { renderLoggedinHeader, updateUserLoggoutState } from "./utils/auth.js";
import {
  createSlug,
  getProductId,
  goToDetail,
  renderCart,
  renderSearchModal,
  showLoginModal,
  updateCartBadge,
} from "./utils/index.js";

//* DOM Init ////////////////////////////////////////////////////////////////////////////////////////////////////////////

const productContainerEls = document.querySelector(".products-container");
const cartBtnEl = document.getElementById("cartBtn");
const headerEl = document.querySelector("header");
const cartEl = document.querySelector("[data-cart]");
const searchInputEl = document.querySelector("[type=search]");

document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge(appState.cartItems);

  cartBtnEl.addEventListener("click", () => {
    if (!appState.currentUser.isLoggedin) {
      showLoginModal();
    } else {
      renderCart();
    }
  });

  document.body.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      if (cartEl) {
        cartEl.close();
        cartEl.style.display = "none";
        document.body.style.overflow = "";
      }
    }
  });

  if (appState.currentUser.isLoggedin) {
    renderLoggedinHeader();
    const logoutBtn = headerEl.querySelector(".is-loggedin");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        updateUserLoggoutState(appState.currentUser);
        localStorage.removeItem("currentUser");
        window.location.reload();
      });
    }
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    headerEl.style.outline = "1px solid var(--bd-light)";
  } else {
    headerEl.style.outline = "";
  }
});

//* Product List Event Delegation ////////////////////////////////////////////////////////////////////////////////////////////

if (productContainerEls) {
  productContainerEls.addEventListener("click", (e) => {
    e.preventDefault();

    const addBtn = e.target.closest("button");
    const productId = getProductId(e);

    if (!productId) {
      return;
    }

    if (addBtn) {
      if (!appState.currentUser?.isLoggedin) {
        showLoginModal();
        return;
      } else {
        addtoCart(productId, addBtn, 1);
      }
    }

    const viewBtn = e.target.closest("a");

    if (viewBtn) {
      const productId = getProductId(e);
      const product = appState.productList.find(
        (product) => product.id === productId
      );
      const productName = createSlug(product.name);
      goToDetail(productId, productName);
    }
  });
}

//* Event Delegation cho modal Cart ///////////////////////////////////////////////////////////////////////////////////////

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
    e.target.closest("[data-product-id]").dataset.productId
  );

  if (!productId) {
    return;
  }

  const btnIncrease = e.target.dataset.action === "increase";
  const btnDecrease = e.target.dataset.action === "decrease";

  if (btnIncrease) {
    increaseQuantity(productId);
  }
  if (btnDecrease) {
    decreaseQuantity(productId);
  }

  if (removeBtn) {
    removeFromCart(productId);
  }

  localStorage.setItem("cart", JSON.stringify(appState.cartItems));
  updateCartBadge(appState.cartItems);
  renderCart();
});

//* Event Delegation cho Search Input ///////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("click", (e) => {
  const searchModal = document.querySelector(".search-result-container");
  if (
    searchModal &&
    !searchInputEl.contains(e.target) &&
    !searchModal.contains(e.target)
  ) {
    searchModal.remove();
  } else {
    return;
  }
});

searchInputEl.addEventListener("keyup", renderSearchModal);
searchInputEl.addEventListener("click", renderSearchModal);
