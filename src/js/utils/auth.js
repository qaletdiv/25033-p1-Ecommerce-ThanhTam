import { appState } from "../data/index.js";

export function updateUserLoggedInState(user) {
	user.isLoggedin = true;
	const updatedState = JSON.stringify(appState.userList);
	localStorage.setItem("users", updatedState);
}

export function updateUserLoggoutState(user) {
	const foundUser = appState.userList.find((u) => u.email === user.email);

	if (foundUser) {
		foundUser.isLoggedin = false;
	}
	const updatedState = JSON.stringify(appState.userList);
	localStorage.setItem("users", updatedState);
}

export function renderLoggedinHeader() {
	const userBtnEl = document.getElementById("userBtn");
	const headerActionEl = document.querySelector(".nav-actions");
	userBtnEl.innerHTML += `${appState.currentUser.name.charAt(0).toUpperCase() + appState.currentUser.name.slice(1)}`;
	userBtnEl.classList.remove("btn", "btn--icon-only");
	userBtnEl.classList.add("user-is-loggedin");

	userBtnEl.addEventListener("click", () => {
		userBtnEl.href = "/account.html";
	});
	const signOutBtn = document.createElement("a");
	signOutBtn.classList.add("nav-item", "is-loggedin");
	signOutBtn.textContent = "Đăng xuất";
	signOutBtn.href = "#";
	headerActionEl.prepend(signOutBtn);
}
