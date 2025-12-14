export function renderErrorMsg(arr, formContainer) {
    if (!document.querySelector(".noti-error")) {
        const errorContainer = document.createElement("ul");
        errorContainer.classList.add("noti-error");
        arr.forEach((msg) => {
            const errorMsgEl = document.createElement("li");
            errorMsgEl.textContent = msg;
            errorContainer.append(errorMsgEl);
        });

        formContainer.prepend(errorContainer);
    } else {
        document.querySelector(".noti-error").remove();
    }
}

export function renderSuccessMsg(arr, formContainer) {
    if (!document.querySelector(".noti-success")) {
        const successContainer = document.createElement("ul");
        successContainer.classList.add("noti-success");
        arr.forEach((msg) => {
            const successMsgEl = document.createElement("li");
            successMsgEl.textContent = msg;
            successContainer.append(successMsgEl);
        });

        formContainer.prepend(successContainer);
    }
}
