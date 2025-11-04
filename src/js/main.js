//* Local Storage =========================================================================================================================================================

import { products } from "./mock-data.js";

const mockUser = {
	name: "Tam",
	email: "thanhtamktvn600@gmail.com",
	password: "123456789",
	isLoggedin: false,
};

if (!localStorage.getItem("productList")) {
	localStorage.setItem("productList", JSON.stringify(products));
}

export const productList = JSON.parse(localStorage.getItem("productList"));

if (!localStorage.getItem("user")) {
	localStorage.setItem("user", JSON.stringify(mockUser));
}
export const user = JSON.parse(localStorage.getItem("user"));
export const cartArr = [];
if (!localStorage.getItem("cart")) {
	localStorage.setItem("cart", JSON.stringify(cartArr));
}

export let cartItems = JSON.parse(localStorage.getItem("cart"));

//* DOM ======================================================================================================================================================================

const productContainerEl = document.getElementById("products-container");
const cartBtnEl = document.getElementById("cartBtn");
const userBtnEl = document.getElementById("userBtn");
const headerEl = document.querySelector("header");
const cartContainerEl = document.getElementById("cart-container");
const cartEl = document.querySelector("[data-cart]");

//* Render Product & Login Modal , Cart ========================================================================================================================================
document.addEventListener("DOMContentLoaded", () => {
	if (document.getElementById("products-container")) {
		renderProducts(productList, productContainerEl);
	}
	const cartEl = document.querySelector("[data-cart]");
	if (cartEl) {
		cartEl.style.display = "none";
	}

	cartBtnEl.addEventListener("click", () => {
		if (!user.isLoggedin) {
			showLoginModal();
		} else {
			renderCart();
		}
	});
});

export function renderProducts(arr, container) {
	container.innerHTML = "";
	container.innerHTML = arr
		.map((product) => {
			const productName = String(product.name || "").replace(/[<>]/g, "");
			return `
		<div class="product-card" data-product-id="${product.id}">
			<a class="product-img" data-product-id="${product.id}"  href="#"><img src="${product.images[0].url}"></a>
			<div class="product-info">
				<p class="product-category">${product.category}</p>
				<a class="product-name link">${productName}</a>
				<p class="product-price">${product.price.toLocaleString("vi-VN")}đ</p>
			</div>
			<div class="btn-group">
				<button class="btn btn--primary" >Thêm vào giỏ</button>
				<a href="#" }">Xem chi tiết <span><i class="lucide icon-chevron-right size-small"></i></span></a>
			</div>
		</div>`;
		})
		.join("");
}

export function renderModal() {
	const existingModal = document.querySelector("[data-modal]");
	if (!existingModal) {
		document.body.insertAdjacentHTML(
			"beforeend",
			`<dialog data-modal class="modal">
        <div>
            <p class="modal-title">Please login to proceed</p>
            <button class="btn btn--icon-only btn--small modal-close" aria-label="Close modal"><i class="lucide icon-x size-default"></i></button>
            <div class="btn-group">
                <a class="btn btn--primary" href="/src/pages/login.html">Đăng nhập</a>
                <a class="btn btn--outline" href="/src/pages/signup.html">Đăng ký</a>
            </div>
        </div>
    </dialog>`,
		);
		const modalEl = document.querySelector("[data-modal]");
		document.body.style.overflow = "hidden";
		modalEl.showModal();
	}
}

export function renderCart() {
	if (!cartEl || !cartContainerEl) {
		return;
	}

	cartEl.style.display = "";
	document.body.style.overflow = "hidden";
	cartEl.showModal();

	if (cartItems.length === 0) {
		cartContainerEl.textContent = `Chưa có sản phẩm nào`;
	} else {
		cartContainerEl.innerHTML = cartItems
			.map((product) => {
				const productName = String(product.name || "").replace(/[<>]/g, "");

				return `<div class="cart-item" data-product-id="${product.id}">
			<img src="${product.images[0].url}" alt="${productName}" class="cart-item-img">
			<div class="cart-item-info">
				<p class="cart-item-name">${productName}</p>
				<div class="cart-item-action">
					<div class="quantity-controls">
						<button class="btn-quantity" data-action="decrease" aria-label="Decrease quantity">-</button>
						<span class="quantity-value">${product.quantity || 1}</span>
						<button class="btn-quantity" data-action="increase" aria-label="Increase quantity">+</button>
					</div>
					<a class="fs-small link" data-remove aria-label="Remove item">Xóa</a>
				</div>
			</div>
			<p class="cart-item-price">${product.price.toLocaleString("vi-VN")}đ</p>
		</div>`;
			})
			.join("");
	}
	calTotal();
}

function calTotal() {
	const totalPriceEl = cartEl.querySelector(".cart-total-price");
	const totalPrice = cartItems.reduce((total, currentItem) => {
		return total + currentItem.price * currentItem.quantity;
	}, 0);

	if (!totalPriceEl) {
		return;
	}
	totalPriceEl.textContent = `${totalPrice.toLocaleString("vi-VN")}đ`;
}

//* Cart ===========================================================================================================================================

export function showLoginModal() {
	const modalEl = document.querySelector("[data-modal]");
	if (!modalEl) {
		renderModal();
		const modalCloseBtn = document.body.querySelector(".modal-close");
		const modalEl = document.querySelector("[data-modal]");
		if (modalCloseBtn && modalEl) {
			modalCloseBtn.addEventListener("click", () => {
				modalEl.close();
				modalEl.remove();
				document.body.style.overflow = "";
			});
		}
	}
}

export function addtoCart(productId, button) {
	const product = productList.find((product) => product.id === productId);
	const existingInCart = cartItems.find((product) => product.id === productId);

	if (!existingInCart) {
		cartItems.unshift({ ...product, quantity: 1 });
	} else {
		existingInCart.quantity++;
	}

	button.disabled = true;
	button.textContent = "Đang thêm...";

	localStorage.setItem("cart", JSON.stringify(cartItems));

	setTimeout(() => {
		renderCart();
		setTimeout(() => {
			const itemInCart = cartEl.querySelector(
				`[data-product-id="${productId}"]`,
			);
			itemInCart.scrollIntoView({ behavior: "smooth", block: "center" });
			itemInCart.classList.add("highlighted-in-cart");
		}, 50);

		button.disabled = false;
		button.textContent = "Thêm vào giỏ";
	}, 500);
}

export function getProductId(e) {
	return Number(e.target.closest("[data-product-id]").dataset.productId);
}

export function goToDetail(productId) {
	window.location.href = `/src/pages/product-details.html?id=${productId}`;
	return;
}

if (productContainerEl) {
	productContainerEl.addEventListener("click", (e) => {
		const addBtn = e.target.closest("button");

		if (addBtn) {
			if (!user.isLoggedin) {
				showLoginModal();
				return;
			}

			const productId = getProductId(e);

			if (!productId) {
				return;
			} else {
				addtoCart(productId, addBtn);
			}
		}

		const viewBtn = e.target.closest("a");

		if (viewBtn) {
			const productId = getProductId(e);
			goToDetail(productId);
		}
	});
}

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

	const targetProduct = cartItems.find((product) => product.id === productId);

	if (!productId || !targetProduct) {
		return;
	}

	const btnIncrease = e.target.dataset.action === "increase";
	const btnDecrease = e.target.dataset.action === "decrease";

	if (btnIncrease) {
		increaseQuantity(targetProduct);
	}
	if (btnDecrease) {
		decreaseQuantity(targetProduct);
	}

	if (removeBtn) {
		cartItems = cartItems.filter((product) => product.id !== Number(productId));
	}

	localStorage.setItem("cart", JSON.stringify(cartItems));
	renderCart();
});

function increaseQuantity(productItem) {
	productItem.quantity++;
}

function decreaseQuantity(productItem) {
	productItem.quantity--;
	if (productItem.quantity < 1) {
		cartItems = cartItems.filter((product) => productItem !== product);
	}
}

//* Search by name, brand, keyword ===================================================================================================================================

const searchInputEl = document.querySelector("[type=search]");

function renderSearchModal() {
	const searchKey = searchInputEl.value.trim();
	const matchingProducts = products.filter(
		(product) =>
			product.name.trim().toLowerCase().includes(searchKey.toLowerCase()) ||
			product.brand.trim().toLowerCase().includes(searchKey.toLowerCase()) ||
			product.keywords.some((keyword) =>
				keyword.trim().toLowerCase().includes(searchKey.toLowerCase()),
			),
	);

	const searchResultEl = document.createElement("div");
	searchResultEl.classList.add("search-result-container");
	const existingSearchResult = document.querySelector(
		".search-result-container",
	);

	if (searchKey === "") {
		existingSearchResult.remove();
		return;
	}

	if (existingSearchResult) {
		existingSearchResult.remove();
	}

	if (matchingProducts.length === 0) {
		searchResultEl.innerHTML = `<p class="no-result-text">Không tìm thấy tên sản phẩm</p>`;
		headerEl.append(searchResultEl);
	} else {
		searchResultEl.innerHTML = matchingProducts
			.map(
				(product) => `
		<a href="#" class="search-result-item">
			<img src="${product.images[0].url}" alt="${product.name}" class="search-result-img">
			<div class="search-result-info">
				<p class="search-result-name">${product.name}</p>
				<p class="search-result-price">${product.price.toLocaleString("vi-VN")}đ</p>
			</div>
		</a>`,
			)
			.join("");
		headerEl.append(searchResultEl);
	}
}

searchInputEl.addEventListener("keyup", renderSearchModal);

searchInputEl.addEventListener("blur", () => {
	const existingSearchResult = document.querySelector(
		".search-result-container",
	);
	if (!existingSearchResult) {
		return;
	}
	existingSearchResult.remove();
});

searchInputEl.addEventListener("click", renderSearchModal);

//* Filter by categories ==================================================================================================================================

const categoriesEl = document.getElementById("categories-container");
const filterEl = document.getElementById("filter-container");

function updateCurrentCategory(category) {
	productContainerEl.dataset.category = `${category}` || "all";
}

if (productContainerEl && categoriesEl) {
	const productBycategories = Object.groupBy(
		products,
		(product) => product.category,
	);
	const categoriesName = Object.keys(productBycategories);
	categoriesName.forEach((category) => {
		const item = document.createElement("button");
		item.classList.add("btn", "btn--link", "btn--sm");
		item.innerText = `${category}`;
		item.dataset.category = `${category}`;
		categoriesEl.append(item);
	});

	if (filterEl) {
		filterEl.addEventListener("click", (e) => {
			const productId = e.target.innerText.toLowerCase();
			const pageTitleEl = document.getElementById("product-category-name");
			const matchCategoryProducts = productBycategories[productId];

			if (e.target.id === "show-all-btn") {
				renderProducts(products, productContainerEl);
				pageTitleEl.textContent = "Tất cả sản phẩm";
				productContainerEl.dataset.category = "all";
			}

			if (!matchCategoryProducts) {
				return;
			} else {
				renderProducts(matchCategoryProducts, productContainerEl);
				selectEl.value = "all";
			}

			pageTitleEl.textContent =
				productId.toUpperCase().charAt(0).toUpperCase() + productId.slice(1);

			updateCurrentCategory(productId);

			if (document.querySelector(".empty-message")) {
				document.querySelector(".empty-message").remove();
			}
		});
	}
}

//* Filter by prices ===========================================================================================================================================

const selectEl = document.getElementById("price-range");

function showEmptyMessage(container, message) {
	const emptyText = document.createElement("p");
	emptyText.textContent = message;
	emptyText.classList.add("empty-message");
	container.before(emptyText);
}

if (filterEl) {
	filterEl.addEventListener("change", (e) => {
		const oldMessage = document.querySelector(".empty-message");
		if (oldMessage) {
			oldMessage.remove();
		}

		const currentCategory = productContainerEl.dataset.category;

		const selectedValue = e.target.value;

		if (selectedValue === "0-5") {
			const productArrPrice = productList.filter(
				(product) =>
					product.price < 5000000 &&
					(currentCategory === "all" || product.category === currentCategory),
			);
			renderProducts(productArrPrice, productContainerEl);
			if (productArrPrice.length === 0) {
				showEmptyMessage(
					productContainerEl,
					"Không tìm thấy sản phẩm trong tầm giá",
				);
			}
		} else if (selectedValue === "5-10") {
			const productArrPrice = productList.filter(
				(product) =>
					product.price >= 5000000 &&
					product.price <= 10000000 &&
					(currentCategory === "all" || product.category === currentCategory),
			);
			renderProducts(productArrPrice, productContainerEl);
			if (productArrPrice.length === 0) {
				showEmptyMessage(
					productContainerEl,
					"Không tìm thấy sản phẩm trong tầm giá",
				);
			}
		} else if (selectedValue === "10-20") {
			const productArrPrice = productList.filter(
				(product) =>
					product.price >= 10000000 &&
					product.price <= 20000000 &&
					(currentCategory === "all" || product.category === currentCategory),
			);
			renderProducts(productArrPrice, productContainerEl);
			if (productArrPrice.length === 0) {
				showEmptyMessage(
					productContainerEl,
					"Không tìm thấy sản phẩm trong tầm giá",
				);
			}
		} else if (selectedValue === "20-40") {
			const productArrPrice = productList.filter(
				(product) =>
					20000000 <= product.price &&
					product.price <= 40000000 &&
					(currentCategory === "all" || product.category === currentCategory),
			);
			renderProducts(productArrPrice, productContainerEl);
			if (productArrPrice.length === 0) {
				showEmptyMessage(
					productContainerEl,
					"Không tìm thấy sản phẩm trong tầm giá",
				);
			}
		} else if (selectedValue === "40-100") {
			const productArrPrice = productList.filter(
				(product) =>
					product.price >= 40000000 &&
					(currentCategory === "all" || product.category === currentCategory),
			);
			renderProducts(productArrPrice, productContainerEl);
			if (productArrPrice.length === 0) {
				showEmptyMessage(
					productContainerEl,
					"Không tìm thấy sản phẩm trong tầm giá",
				);
			}
		} else if (selectedValue === "all") {
			const productArrPrice = productList.filter(
				(product) =>
					currentCategory === "all" || product.category === currentCategory,
			);
			renderProducts(productArrPrice, productContainerEl);
		}
	});
}

//* Validate =====================================================================================================================================
const emailInputEl = document.getElementById("email");
// const nameInputEl = document.getElementById("fullname");
const passwordInputEl = document.getElementById("password");
const confirmPassEl = document.getElementById("confirm-password");
const formEl = document.getElementById("login-form");
const signUpFormEl = document.getElementById("sign-up-form");

if (formEl) {
	formEl.addEventListener("submit", (e) => {
		e.preventDefault();
		const emailInput = emailInputEl.value;
		const passowrdInput = passwordInputEl.value.trim();
		const subtmitBtn = document.querySelector('button[type="submit"]');

		if (emailInput !== user.email && passowrdInput !== user.password) {
			console.log("sai thong tin");
			if (!document.querySelector(".noti-error")) {
				const el = document.createElement("p");
				el.classList.add("noti-error");
				el.textContent = "Sai thông tin, vui lòng thử lại";
				formEl.prepend(el);
			}
			return;
		}
		subtmitBtn.disabled = true;
		subtmitBtn.textContent = "Đang đăng nhập...";
		updateUserLoggedInState();
		window.location.replace("/index.html");
	});
}

function renderErrorMsg(str) {
	if (!document.querySelector(".noti-error")) {
		const errorMsgEl = document.createElement("p");
		errorMsgEl.classList.add("noti-error");
		errorMsgEl.textContent = str;
		signUpFormEl.prepend(errorMsgEl);
	}
}

if (signUpFormEl) {
	signUpFormEl.addEventListener("submit", (e) => {
		e.preventDefault();
		// const nameInput = nameInputEl.value;
		const confirmPassInput = confirmPassEl.value;
		const emailInput = emailInputEl.value;
		const passwordInput = passwordInputEl.value;

		if (emailInput === user.email) {
			renderErrorMsg("Email này đã được đăng ký");
		}

		if (confirmPassInput !== passwordInput) {
			renderErrorMsg("Mật khẩu không khớp");
		}
	});
}

//* User login/logout state ===================================================================================================================================

function updateUserLoggedInState() {
	user.isLoggedin = true;
	const updatedState = JSON.stringify(user);
	localStorage.setItem("user", updatedState);
}

function updateUserLoggoutState() {
	user.isLoggedin = false;
	const updatedState = JSON.stringify(user);
	localStorage.setItem("user", updatedState);
	window.location.reload();
}

function renderLoggedinHeader() {
	const headerActionEl = document.querySelector(".nav-actions");
	userBtnEl.innerHTML += `Hello ${user.name}`;
	userBtnEl.classList.remove("btn", "btn--icon-only");
	userBtnEl.classList.add("user-is-loggedin");

	userBtnEl.addEventListener("click", (e) => {
		e.preventDefault();
	});
	const signOutBtn = document.createElement("a");
	signOutBtn.classList.add("nav-item", "is-loggedin");
	signOutBtn.textContent = "Logout";
	signOutBtn.href = "#";
	headerActionEl.prepend(signOutBtn);
}

if (user.isLoggedin) {
	renderLoggedinHeader();
}

const logoutBtn = headerEl.querySelector(".is-loggedin");
if (logoutBtn) {
	logoutBtn.addEventListener("click", updateUserLoggoutState);
}
