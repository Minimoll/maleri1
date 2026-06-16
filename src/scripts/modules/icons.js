const ICONS = {
	phone:
		'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
	mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
	"map-pin":
		'<path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',
	check: '<path d="m5 12 5 5L20 7"/>',
	"arrow-right": '<path d="M5 12h14m-6-6 6 6-6 6"/>',
	"arrow-up-right": '<path d="M7 17 17 7M8 7h9v9"/>',
	home: '<path d="m3 11 9-8 9 8v9a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2z"/>',
	"building-cottage": '<path d="M3 21V10l9-7 9 7v11"/><path d="M9 21v-6h6v6"/>',
	tools:
		'<path d="M3 21h4l11-11-4-4L3 17z"/><path d="m14.5 5.5 4 4"/><path d="M13 19l3-3 3 3-3 3z"/>',
	facebook:
		'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
	instagram:
		'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>',
	menu: '<line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/>',
	close:
		'<line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>',
	"arrows-horizontal": '<path d="M3 12h18M7 7l-4 5 4 5M17 7l4 5-4 5"/>',
};

function buildSvg(name) {
	const inner = ICONS[name];
	if (!inner) return "";
	return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
}

export function initIcons() {
	document.querySelectorAll("[data-icon]").forEach((el) => {
		const name = el.dataset.icon;
		const svg = buildSvg(name);
		if (!svg) return;
		el.innerHTML = svg;
		el.classList.add("icon");
	});
}
