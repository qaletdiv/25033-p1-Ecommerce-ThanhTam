//* Local Storage ===============================================================================================================================

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

const productList = JSON.parse(localStorage.getItem("productList"));

if (!localStorage.getItem("user")) {
	localStorage.setItem("user", JSON.stringify(mockUser));
}
const user = JSON.parse(localStorage.getItem("user"));

//* DOM ================================================================================================================================================================
const productContainerEl = document.getElementById("products-container");
const cartBtnEl = document.getElementById("cartBtn");
const userBtnEl = document.getElementById("userBtn");
const searchInputEl = document.querySelector("[type=search]");
const headerEl = document.querySelector("header");
const filterEl = document.getElementById("filter-container");
const selectEl = document.getElementById("price-range");

//* Render Product & Login Modal ========================================================================================================================================
document.addEventListener("DOMContentLoaded", () => {
	if (document.getElementById("products-container")) {
		renderProducts(productList, productContainerEl);
	}
});

function renderProducts(arr, container) {
	container.innerHTML = "";
	container.innerHTML = arr
		.map(
			(product) => `
		<div class="product-card">
			<a class="product-img"  href="#"><img src="${product.images[0].url}"></a>
			<div class="product-info">
				<a href="#" class="product-category">${product.category}</a>
				<p class="product-name">${product.name}</p>
				<p class="product-price">${product.price.toLocaleString("vi-VN")}đ</p>
			</div>
			<div class="btn-group">
				<button class="btn btn--primary" data-product-id="${product.id}">Thêm vào giỏ</button>
				<a href="#">Xem chi tiết <span><i class="lucide icon-chevron-right size-small"></i></span></a>
			</div>
		</div>`,
		)
		.join("");
}

function modalRender() {
	const existingModal = document.querySelector("[data-modal]");
	if (!existingModal) {
		document.body.insertAdjacentHTML(
			"beforeend",
			`<dialog data-modal class="modal">
        <div>
            <p class="modal-title">Please login to proceed</p>
            <button class="btn btn--icon-only btn--small modal-close" aria-label="Close modal"><i class="lucide icon-x size-default"></i></button>
            <div class="btn-group">
                <a class="btn btn--primary" href="/pages/login.html">Đăng nhập</a>
                <a class="btn btn--outline" href="/pages/signup.html">Đăng ký</a>
            </div>
        </div>
    </dialog>`,
		);
	}
}

//* Cart ===========================================================================================================================================

const cartContainerEl = document.getElementById("cart-container");
const cartArr = [];
if (!localStorage.getItem("cart")) {
	localStorage.setItem("cart", JSON.stringify(cartArr));
}
const cartItems = JSON.parse(localStorage.getItem("cart"));

function modalOpen() {
	const modal = document.querySelector("[data-modal]");
	document.body.style.overflow = "hidden";
	modal.showModal();
}

function addToCartHandler() {
	if (!user.isLoggedin) {
		modalRender();
		modalOpen();
	}
}

cartBtnEl.addEventListener("click", addToCartHandler);

document.body.addEventListener("click", (e) => {
	const modal = document.querySelector("[data-modal]");
	if (e.target.closest(".modal-close")) {
		modal.close();
		modal.remove();
		document.body.style.overflow = "";
	}
});

if (productContainerEl) {
	productContainerEl.addEventListener("click", (e) => {
		const buttonId = e.target.dataset.productId;

		if (!buttonId) {
			return;
		}

		addToCartHandler();
	});
}

//* Search by name ===================================================================================================================================

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

function updateCurrentCategory(category) {
	productContainerEl.dataset.category = `${category}` || "all";
}

const categoriesEl = document.getElementById("categories-container");

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
			const buttonId = e.target.innerText.toLowerCase();
			const pageTitleEl = document.getElementById("product-category-name");
			const matchCategoryProducts = productBycategories[buttonId];

			if (e.target.id === "show-all-btn") {
				renderProducts(products, productContainerEl);
				pageTitleEl.textContent = "Tất cả sản phẩm";
				productContainerEl.dataset.category = "all";
				return;
			}

			if (!matchCategoryProducts) {
				return;
			} else {
				renderProducts(matchCategoryProducts, productContainerEl);
				selectEl.value = "all";
			}

			pageTitleEl.textContent =
				buttonId.toUpperCase().charAt(0).toUpperCase() + buttonId.slice(1);

			updateCurrentCategory(buttonId);

			if (document.querySelector(".empty-message")) {
				document.querySelector(".empty-message").remove();
			}
		});
	}
}

//* Filter by prices ===========================================================================================================================================

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
		console.log("Dang nhap thanh cong");
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
