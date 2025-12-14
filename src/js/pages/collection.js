import { appState } from "../data/index.js";
import { goToCategory } from "../utils/helpers.js";

const productList = appState.productList;
const productCategories = Object.groupBy(
  productList,
  (product) => product.category
);
const collectionContainerEl = document.querySelector(".collection-container");

// Category thumbnail images from Unsplash
const categoryThumbs = {
  smartphone:
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop",
  laptop:
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop",
  tablet:
    "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop",
  desktop:
    "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&auto=format&fit=crop",
  monitor:
    "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop",
  accessory:
    "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop",
};

const categoryNameList = Object.keys(productCategories);

categoryNameList.forEach((category) => {
  const categoryHTML = document.createElement("li");
  categoryHTML.classList.add("category-item");
  const thumbnailUrl = categoryThumbs[category] || categoryThumbs.accessory;

  categoryHTML.innerHTML = `
    <a href="/products-list.html?category=${category}" class="category-title" data-category="${category}" style="background-image: url('${thumbnailUrl}')">
        <span class="category-name">${category}</span>
    </a>
    `;
  collectionContainerEl.append(categoryHTML);
});

collectionContainerEl.addEventListener("click", (e) => {
  if (e.target.classList.contains("category-title")) {
    e.preventDefault();
    const category = e.target.dataset.category;
    goToCategory(category);
  }
});
