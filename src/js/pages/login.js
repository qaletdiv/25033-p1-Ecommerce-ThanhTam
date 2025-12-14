import { appState, setCurrentUser } from "../data/index.js";
import { updateUserLoggedInState } from "../utils/auth.js";
import { renderErrorMsg } from "../utils/renderFormMsg.js";

const emailInputEl = document.getElementById("email");
const passwordInputEl = document.getElementById("password");
const formEl = document.querySelector(".form-container");

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const errorMsg = [];
    const emailInput = emailInputEl.value.trim();
    const passwordInput = passwordInputEl.value.trim();
    const submitBtn = document.querySelector('button[type="submit"]');

    const foundUser = appState.userList.find(
        (user) => user.email === emailInput && user.password === passwordInput
    );

    if (!foundUser) {
        errorMsg.push("Sai thông tin, vui lòng thử lại");
        renderErrorMsg(errorMsg, formEl);
        return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Đang đăng nhập...";
    updateUserLoggedInState(foundUser);
    appState.currentUser = setCurrentUser(foundUser);
    window.location.replace("/index.html");
});
