import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

const imageModules = import.meta.glob(
	"/src/assets/images/projects/*.{jpg,jpeg,png,webp}",
	{
		eager: true,
		query: "?url",
		import: "default",
	},
);

// hjälp-funktion som returnerar URL:en för ett filnamn
function img(filename) {
	const fullPath = `/src/assets/images/projects/${filename}`;
	return imageModules[fullPath];
}

const galleries = {
	utomhus: [
		img("utomhus_1.jpg"),
		img("utomhus_2.jpg"),
		img("utomhus_3.jpg"),
	].filter(Boolean),
	inomhus: [
		img("inomhus_1.jpg"),
		img("inomhus_2.jpg"),
		img("inomhus_3.jpg"),
	].filter(Boolean),
	snickeri: [
		img("snickeri_1.jpg"),
		img("snickeri_2.jpg"),
		img("snickeri_3.jpg"),
	].filter(Boolean),
};

function openGalleryAt(category, startIndex) {
	const images = galleries[category];
	if (!images || !images.length) return;

	const elements = images.map((src) => ({
		href: src,
		type: "image",
	}));

	const lightbox = GLightbox({
		elements,
		startAt: startIndex,
		loop: true,
		touchNavigation: true,
		keyboardNavigation: true,
		openEffect: "fade",
		closeEffect: "fade",
		slideEffect: "slide",
		cssEffects: {
			fade: { in: "fadeIn", out: "fadeOut" },
			slide: { in: "slideInRight", out: "slideOutLeft" },
		},
	});

	lightbox.open();
}

export function initLightbox() {
	const items = document.querySelectorAll(".portfolio-item[data-cat]");
	if (!items.length) return;

	items.forEach((item) => {
		item.addEventListener("click", (event) => {
			event.preventDefault();
			const cat = item.dataset.cat;
			openGalleryAt(cat, 0);
		});
	});
}
