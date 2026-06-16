export function initServiceAccordion() {
	const toggles = document.querySelectorAll(".service-toggle");
	if (!toggles.length) return;

	toggles.forEach((toggle) => {
		const card = toggle.closest(".service-card");
		const details = card?.querySelector(".service-details");
		const label = toggle.querySelector(".service-toggle-label");
		if (!details || !label) return;

		toggle.addEventListener("click", () => {
			const isOpen = toggle.getAttribute("aria-expanded") === "true";
			const nextOpen = !isOpen;

			toggle.setAttribute("aria-expanded", String(nextOpen));
			label.textContent = nextOpen ? "Stäng" : "Läs mer";

			if (nextOpen) {
				details.hidden = false;
				requestAnimationFrame(() => {
					details.dataset.open = "true";
				});
			} else {
				details.dataset.open = "false";
				setTimeout(() => {
					if (details.dataset.open === "false") details.hidden = true;
				}, 400);
			}
		});
	});
}
