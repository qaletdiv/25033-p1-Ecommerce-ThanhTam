import { products } from "./mock-data";

let nextId = 1;

const userArr = [
	{
		id: nextId++,
		name: "Tam",
		email: "thanhtamktvn600@gmail.com",
		password: "123456789",
		isLoggedin: false,
		cart: [],
		orderHistory: [],
	},
];

export function createNewUser(name, email, password) {
	const userExist = userArr.some((user) => user.email === email);

	if (!userExist) {
		const newUser = {
			id: nextId++,
			name: name,
			email: email,
			password: password,
			isLoggedin: false,
			cart: [],
			orderHistory: [],
		};

		userArr.push(newUser);
		return newUser;
	}

	localStorage.setItem("users", JSON.stringify(userList));
}

createNewUser("quang", "quang@gmail.com", 123456789);

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
	const defaultUser = userArr;
	if (!localStorage.getItem("users")) {
		localStorage.setItem("users", JSON.stringify(userArr));
		return defaultUser;
	} else {
		return JSON.parse(localStorage.getItem("users"));
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

export function getCurrentUser(user) {
	const defaultCurrentUser = user ?? {};
	if (!localStorage.getItem("currentUser")) {
		localStorage.setItem("currentUser", JSON.stringify(defaultCurrentUser));
		return defaultCurrentUser;
	} else {
		return JSON.parse(localStorage.getItem("currentUser"));
	}
}

export const productList = getProductfromLocal();
export const userList = getUsersfromLocal();
export const cartItems = getCartItemsFromLocal();
export const currentUser = getCurrentUser();
