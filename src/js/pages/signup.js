import { appState, createNewUser } from "../data/index.js";
import { renderErrorMsg, renderSuccessMsg } from "../utils/renderFormMsg.js";

const emailInputEl = document.getElementById("email");
const passwordInputEl = document.getElementById("password");
const nameInputEl = document.getElementById("fullname");
const confirmPassEl = document.getElementById("confirm-password");
const formEl = document.querySelector(".form-container");

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const errorMsg = [];
    const confirmPassInput = confirmPassEl.value.trim();
    const emailInput = emailInputEl.value.trim();
    const passwordInput = passwordInputEl.value.trim();
    const nameInput = nameInputEl.value.trim();
    const submitBtn = document.querySelector('button[type="submit"]');

    if (nameInput === "") {
        errorMsg.push("Tên không được để trống");
    }

    if (emailInput === "") {
        errorMsg.push("Email không được để trống");
    }

    if (passwordInput === "") {
        errorMsg.push("Mật khẩu không dược để trống");
    }

    if (confirmPassInput === "") {
        errorMsg.push("Vui lòng xác nhận mật khẩu");
    }

    if (
        passwordInput !== "" &&
        confirmPassInput !== "" &&
        confirmPassInput !== passwordInput
    ) {
        errorMsg.push("Mật khẩu không khớp");
    }

    if (emailInput !== "") {
        const isEmailMatch = appState.userList.some(
            (user) => user.email === emailInput
        );
        if (isEmailMatch) {
            errorMsg.push("Địa chỉ email này đã được đăng ký");
        }
    }

    if (errorMsg.length > 0) {
        renderErrorMsg(errorMsg, formEl);
        return;
    }

    createNewUser(nameInput, emailInput, passwordInput);

    const successMsg = [
        "Đăng ký thành công! Bạn sẽ được điều hướng đến trang đăng nhập",
    ];
    renderSuccessMsg(successMsg, formEl);

    submitBtn.disabled = true;
    submitBtn.textContent = "Đang chuyển hướng...";

    setTimeout(() => {
        window.location.replace("/login.html");
    }, 2000);
});
