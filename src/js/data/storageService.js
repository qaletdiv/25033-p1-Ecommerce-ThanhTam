import { products } from "../data/mockData.js";

const userInServers = [
	{
		id: Date.now().toString(),
		name: "Tam",
		phoneNumber: "09655679812",
		email: "thanhtamktvn600@gmail.com",
		password: "123456789",
		isLoggedin: false,
		cart: [],
		address: "52 Hoàng Văn Thụ, phường 12, quận Bình Thạnh",
		orderHistory: [],
	},
];

export function createNewUser(name, email, password) {
	const currentUsers = getUsersfromLocal();
	const userExist = currentUsers.some((user) => user.email === email);

	if (!userExist) {
		const newUser = {
			id: Date.now().toString(),
			name: name,
			email: email,
			password: password,
			isLoggedin: false,
			cart: [],
			orderHistory: [],
		};

		currentUsers.push(newUser);

		localStorage.setItem("users", JSON.stringify(currentUsers));
		return newUser;
	} else {
		return;
	}
}

export function getProductfromLocal() {
	const defaultProducts = products;
	if (!localStorage.getItem("productList")) {
		localStorage.setItem("productList", JSON.stringify(defaultProducts));
		return defaultProducts;
	} else {
		return JSON.parse(localStorage.getItem("productList"));
	}
}

export function getCartItemsFromLocal() {
	const cartArr = [];

	if (!localStorage.getItem("cart")) {
		localStorage.setItem("cart", JSON.stringify(cartArr));
		return cartArr;
	} else {
		return JSON.parse(localStorage.getItem("cart"));
	}
}

export function getCurrentUser() {
	if (!localStorage.getItem("currentUser")) {
		const anonymousUser = { isLoggedin: false, cart: [] };
		return anonymousUser;
	}

	return JSON.parse(localStorage.getItem("currentUser"));
}

export function setCurrentUser(user) {
	localStorage.setItem("currentUser", JSON.stringify(user));
	return user;
}

export function getUsersfromLocal() {
	const defaultUsers = userInServers;
	if (!localStorage.getItem("users")) {
		localStorage.setItem("users", JSON.stringify(userInServers));
		return defaultUsers;
	} else {
		return JSON.parse(localStorage.getItem("users"));
	}
}

export function updateUsersfromLocal(users) {
	localStorage.setItem("users", JSON.stringify(users));
	return users;
}

export const appState = {
	cartItems: getCartItemsFromLocal(),
	userList: getUsersfromLocal(),
	productList: getProductfromLocal(),
	currentUser: getCurrentUser(),
};
