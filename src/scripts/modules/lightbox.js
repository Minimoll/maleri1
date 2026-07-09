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

function img(filename) {
	return imageModules[`/src/assets/images/projects/${filename}`];
}

const galleries = {
	utomhus: [
		img("utomhus_1.jpg"),
		img("utomhus_2.jpg"),
		img("utomhus_3.jpg"),
		img("utomhus_4.jpg"),
		img("utomhus_5.jpg"),
		img("utomhus_6.jpg"),
		img("utomhus_7.jpg"),
		img("utomhus_8.jpg"),
		img("utomhus_9.jpg"),
		img("utomhus_10.jpg"),
		img("utomhus_11.jpg"),
	].filter(Boolean),
	inomhus: [
		img("inomhus_1.jpg"),
		img("inomhus_2.jpg"),
		img("inomhus_3.jpg"),
		img("inomhus_4.jpg"),
		img("inomhus_5.jpg"),
		img("inomhus_6.jpg"),
		img("inomhus_7.jpg"),
		img("inomhus_8.jpg"),
		img("inomhus_9.jpg"),
		img("inomhus_10.jpg"),
		img("inomhus_11.jpg"),
		img("inomhus_12.jpg"),
		img("inomhus_13.jpg"),
	].filter(Boolean),
	snickeri: [
		img("snickeri_1.jpg"),
		img("snickeri_4.jpg"),
		img("snickeri_3.jpg"),
		img("snickeri_2.jpg"),
		img("snickeri_5.jpg"),
		img("snickeri_6.jpg"),
	].filter(Boolean),
};

const SLIDE_INTERVAL = 4500;

function openGalleryAt(category, startIndex) {
	const images = galleries[category];
	if (!images || !images.length) return;

	const elements = images.map((src) => ({ href: src, type: "image" }));

	const lightbox = GLightbox({
		elements,
		startAt: startIndex,
		loop: true,
		touchNavigation: true,
		keyboardNavigation: true,
		openEffect: "fade",
		closeEffect: "fade",
		slideEffect: "fade",
		cssEffects: {
			fade: { in: "fadeIn", out: "fadeOut" },
		},
	});

	const total = images.length;
	let timer = null;
	let playing = true;
	let currentIndex = startIndex;

	const buildControls = () => {
		const container = document.querySelector(".gcontainer");
		if (!container || container.querySelector(".slideshow-controls")) return;

		const wrap = document.createElement("div");
		wrap.className = "slideshow-controls";
		wrap.innerHTML = `
      <button class="slideshow-toggle" aria-label="Pausa bildspel" type="button">❚❚</button>
      <span class="slideshow-counter">${currentIndex + 1} / ${total}</span>
    `;
		container.appendChild(wrap);

		wrap.addEventListener("click", (e) => e.stopPropagation());
		wrap.addEventListener("touchstart", (e) => e.stopPropagation(), {
			passive: true,
		});

		wrap.querySelector(".slideshow-toggle").addEventListener("click", (e) => {
			e.stopPropagation();
			playing ? pause() : play();
		});
	};

	const updateCounter = () => {
		const counter = document.querySelector(".slideshow-counter");
		if (counter) counter.textContent = `${currentIndex + 1} / ${total}`;
	};

	const updateToggle = () => {
		const btn = document.querySelector(".slideshow-toggle");
		if (!btn) return;
		btn.textContent = playing ? "❚❚" : "▶";
		btn.setAttribute(
			"aria-label",
			playing ? "Pausa bildspel" : "Starta bildspel",
		);
	};

	const play = () => {
		playing = true;
		updateToggle();
		clearInterval(timer);
		timer = setInterval(() => lightbox.nextSlide(), SLIDE_INTERVAL);
	};

	const pause = () => {
		playing = false;
		updateToggle();
		clearInterval(timer);
		timer = null;
	};

	lightbox.on("open", () => {
		buildControls();
		updateCounter();
		play();
	});

	lightbox.on("slide_changed", ({ current }) => {
		currentIndex = current?.index ?? currentIndex;
		updateCounter();
	});

	setTimeout(() => {
		document.querySelectorAll(".gnext, .gprev").forEach((arrow) => {
			arrow.addEventListener("click", pause);
		});
	}, 100);
	document.addEventListener("keydown", function onKey(e) {
		if (e.key === "ArrowLeft" || e.key === "ArrowRight") pause();
		if (!document.querySelector(".gcontainer"))
			document.removeEventListener("keydown", onKey);
	});

	lightbox.on("close", () => {
		pause();
		document.querySelector(".slideshow-controls")?.remove();
	});

	lightbox.open();
}

export function initLightbox() {
	const items = document.querySelectorAll(".portfolio-item[data-cat]");
	if (!items.length) return;

	items.forEach((item) => {
		item.addEventListener("click", (event) => {
			event.preventDefault();
			openGalleryAt(item.dataset.cat, 0);
		});
	});
}
