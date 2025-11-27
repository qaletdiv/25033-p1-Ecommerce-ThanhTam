export function sortHandler(sortBy, currentProduct) {
	switch (sortBy) {
		case "best-seller": {
			return currentProduct.toSorted((a, b) => b.salesCount - a.salesCount);
		}

		case "price-ascending": {
			return currentProduct.toSorted((a, b) => a.price - b.price);
		}
		case "price-decending": {
			return currentProduct.toSorted((a, b) => b.price - a.price);
		}
		case "new-arrival": {
			return currentProduct.toSorted((a, b) =>
				b.createdAt.localeCompare(a.createdAt)
			);
		}
		default: {
			return currentProduct.toSorted((a, b) => b.featured - a.featured);
		}
	}
}
