const ANIMATION_DURATION = 350;

export function initPortfolioFilter() {
	const pills = document.querySelectorAll(".filter-pill");
	const items = document.querySelectorAll(".portfolio-item");
	if (!pills.length || !items.length) return;

	const applyFilter = (filter) => {
		items.forEach((item) => {
			item.classList.add("is-leaving");
		});

		setTimeout(() => {
			items.forEach((item) => {
				const matches = filter === "all" || item.dataset.cat === filter;
				item.classList.remove("is-leaving");

				if (matches) {
					item.style.display = "";
					item.classList.add("is-entering");
				} else {
					item.style.display = "none";
					item.classList.remove("is-entering");
				}
			});

			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					items.forEach((item) => item.classList.remove("is-entering"));
				});
			});
		}, ANIMATION_DURATION);
	};

	pills.forEach((pill) => {
		pill.addEventListener("click", () => {
			pills.forEach((p) => p.classList.remove("active"));
			pill.classList.add("active");
			applyFilter(pill.dataset.filter);
		});
	});
}
