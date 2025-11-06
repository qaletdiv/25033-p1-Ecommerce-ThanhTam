import { products } from "./mock-data";

export function getProductfromLocal() {
	const defaultProducts = products;
	if (!localStorage.getItem("productList")) {
		localStorage.setItem("productList", JSON.stringify(defaultProducts));
		return defaultProducts;
	} else {
		return JSON.parse(localStorage.getItem("productList"));
	}
}

export function getUsersfromLocal() {
	const mockUser = {
		id: 1,
		name: "Tam",
		email: "thanhtamktvn600@gmail.com",
		password: "123456789",
		isLoggedin: false,
	};

	if (!localStorage.getItem("user")) {
		localStorage.setItem("user", JSON.stringify(mockUser));
	} else {
		return JSON.parse(localStorage.getItem("user"));
	}
}

function getCartItemsFromLocal() {
	const cartArr = [];

	if (!localStorage.getItem("cart")) {
		localStorage.setItem("cart", JSON.stringify(cartArr));
	} else {
		return JSON.parse(localStorage.getItem("cart"));
	}
}

export const productList = getProductfromLocal();
export const user = getUsersfromLocal();
export let cartItems = getCartItemsFromLocal();
