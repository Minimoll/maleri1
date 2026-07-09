const SUCCESS_TIMEOUT = 6000;

export function initContactForm() {
	const form = document.getElementById("contactForm");
	const success = document.getElementById("formSuccess");
	if (!form) return;

	form.addEventListener("submit", async (event) => {
		event.preventDefault();

		const data = new FormData(form);

		if (String(data.get("bot-field") || "").trim()) {
			form.reset();
			return;
		}

		const submitBtn = form.querySelector(".form-submit");
		const originalText = submitBtn ? submitBtn.innerHTML : "";

		try {
			if (submitBtn) {
				submitBtn.disabled = true;
				submitBtn.textContent = "Skickar…";
			}

			const response = await fetch("/", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: new URLSearchParams(data).toString(),
			});

			if (!response.ok) throw new Error(`Netlify svarade ${response.status}`);

			if (success) {
				success.classList.add("visible");
				setTimeout(() => success.classList.remove("visible"), SUCCESS_TIMEOUT);
			}
			form.reset();
		} catch (error) {
			console.error("Formulärfel:", error);
			alert(
				"Något gick fel när meddelandet skulle skickas. " +
					"Ring oss gärna på 036 - 421 11 eller mejla info@maleri1.nu direkt.",
			);
		} finally {
			if (submitBtn) {
				submitBtn.disabled = false;
				submitBtn.innerHTML = originalText;
			}
		}
	});
}
