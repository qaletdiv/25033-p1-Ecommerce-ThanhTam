import { appState } from "../data";
import { sortHandler } from "../features/productFilter";
import { renderProducts } from "../utils";

const urlParams = new URLSearchParams(window.location.search);
const categoryName = urlParams.get(`category`) ?? "all";
const pageTitle = document.getElementById("product-category-name");
const categoriesEl = document.getElementById("categories-container");
const filterEl = document.getElementById("filter-container");
const productContainerEl = document.getElementById("products-container");
const sortEl = document.getElementById("sort-options");
const paginationContainer = document.querySelector(".pagination-container");

let currentPage = 1;
const itemsPerPage = 10;
let totalItem = appState.productList.length;
let totalPages = Math.ceil(totalItem / itemsPerPage);
let indexStart = (currentPage - 1) * itemsPerPage;
let indexEnd = indexStart + itemsPerPage;
let paginationArr = Array.from({ length: totalPages }, (v, i) => i + 1);
let currentItems = appState.productList.slice(indexStart, indexEnd);
let displayedProduct = appState.productList;

function renderPagination(arr, container) {
    const items = arr.map((num) => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="#products-listing" data-index=${num} class="btn btn--sm btn--outline btn--icon-only">${num}</a>`;
        return li;
    });
    container.replaceChildren(...items);
}

function paginationHandler(e, productList) {
    if (e.target.tagName !== "A") return;
    const currentIndex = e.target.dataset.index;
    if (currentIndex) {
        currentPage = currentIndex;
        indexStart = (currentPage - 1) * itemsPerPage;
        indexEnd = indexStart + itemsPerPage;
        const currentItems = productList.slice(indexStart, indexEnd);
        renderProducts(currentItems, productContainerEl);
    }
}

paginationContainer.addEventListener("click", (e) => {
    paginationHandler(e, displayedProduct);
});
//* Render product theo category name
if (categoryName === "all") {
    pageTitle.textContent = "Toàn bộ sản phẩm";
    currentItems = appState.productList.slice(indexStart, indexEnd);
    renderProducts(currentItems, productContainerEl);
    renderPagination(paginationArr, paginationContainer);
}

function updateCurrentCategory(category) {
    productContainerEl.dataset.category = `${category}` || "all";
}

const productBycategories = Object.groupBy(
    appState.productList,
    (product) => product.category
);

const categoriesName = Object.keys(productBycategories);

categoriesName.forEach((category) => {
    const item = document.createElement("button");
    item.classList.add("btn", "btn--link", "btn--sm");
    item.innerText = `${category}`;
    item.dataset.category = `${category}`;
    categoriesEl.append(item);
});

//* Event Delegation //////////////////////////////////////////////////////////////

categoriesEl.addEventListener("click", (e) => {
    const productId = e.target.innerText.toLowerCase();
    const pageTitleEl = document.getElementById("product-category-name");
    const matchCategoryProducts = productBycategories[productId];
    sortEl.value = "featured";

    if (e.target.id === "show-all-btn") {
        currentPage = 1;
        displayedProduct = appState.productList;
        totalItem = appState.productList.length;
        totalPages = Math.ceil(totalItem / itemsPerPage);
        indexStart = (currentPage - 1) * itemsPerPage;
        indexEnd = indexStart + itemsPerPage;
        paginationArr = Array.from({ length: totalPages }, (v, i) => i + 1);
        currentItems = appState.productList.slice(indexStart, indexEnd);
        pageTitleEl.textContent = "Toàn bộ sản phẩm";
        productContainerEl.dataset.category = "all";
        renderProducts(currentItems, productContainerEl);
        renderPagination(paginationArr, paginationContainer);
    }

    if (!matchCategoryProducts) {
        return;
    } else {
        currentPage = 1;
        totalItem = matchCategoryProducts.length;
        totalPages = Math.ceil(totalItem / itemsPerPage);
        indexStart = (currentPage - 1) * itemsPerPage;
        indexEnd = indexStart + itemsPerPage;
        paginationArr = Array.from({ length: totalPages }, (v, i) => i + 1);
        currentItems = matchCategoryProducts.slice(indexStart, indexEnd);
        renderProducts(currentItems, productContainerEl);
        renderPagination(paginationArr, paginationContainer);
        displayedProduct = matchCategoryProducts;
    }

    pageTitleEl.textContent =
        productId.charAt(0).toUpperCase() + productId.slice(1);

    updateCurrentCategory(productId);

    if (document.querySelector(".empty-message")) {
        document.querySelector(".empty-message").remove();
    }
});

filterEl.addEventListener("change", (e) => {
    const selectedValue = e.target.value;
    const pageTitleEl = document.getElementById("product-category-name");
    const currentCategory = pageTitleEl.textContent.trim().toLowerCase();
    const productMatchCategory = appState.productList.filter(
        (product) => product.category === currentCategory.trim().toLowerCase()
    );

    const productsToSort =
        productMatchCategory.length > 0
            ? productMatchCategory
            : appState.productList;

    const sortedProducts = sortHandler(selectedValue, productsToSort);
    renderProducts(sortedProducts, productContainerEl);
});
