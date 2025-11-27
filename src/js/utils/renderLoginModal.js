export function showLoginModal() {
	const modalEl = document.querySelector("[data-modal]");
	if (!modalEl) {
		renderLoginModal();
	}
}

export function renderLoginModal() {
	const existingModal = document.querySelector("[data-modal]");
	if (!existingModal) {
		document.body.insertAdjacentHTML(
			"beforeend",
			`<dialog data-modal class="modal">
        <div>
            <p class="modal-title">Vui lòng đăng nhập để tiếp tục</p>
            <button class="btn btn--icon-only btn--small modal-close" aria-label="Close modal"><i class="lucide icon-x size-default"></i></button>
            <div class="btn-group">
                <a class="btn btn--primary" href="/login.html">Đăng nhập</a>
                <a class="btn btn--outline" href="/signup.html">Đăng ký</a>
            </div>
        </div>
    </dialog>`
		);
		const modalEl = document.querySelector("[data-modal]");
		document.body.style.overflow = "hidden";
		modalEl.showModal();

		const modalCloseBtn = document.body.querySelector(".modal-close");
		if (modalCloseBtn && modalEl) {
			modalCloseBtn.addEventListener("click", () => {
				modalEl.close();
				modalEl.remove();
				document.body.style.overflow = "";
			});
		}
	}
}
