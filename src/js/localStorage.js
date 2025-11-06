import { products } from "./mock-data";

let nextId = 1;

const userList = [
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
	const userExist = userList.some((user) => user.email === email);

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

		userList.push(newUser);
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
	if (!localStorage.getItem("users")) {
		localStorage.setItem("users", JSON.stringify(userList));
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

export const productList = getProductfromLocal();
export const user = getUsersfromLocal();
export let cartItems = getCartItemsFromLocal();
