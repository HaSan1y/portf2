const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allsections = document.querySelector(".main-content");

function PageTransitions() {
	for (let i = 0; i < sectBtn.length; i++) {
		sectBtn[i].addEventListener("click", function () {
			let currentBtn = document.querySelector(".active-btn");
			currentBtn.className = currentBtn.className.replace("active-btn", "");
			this.className += " active-btn";
		});
	}

	allsections.addEventListener("click", (e) => {
		const ido = e.target.dataset.id;
		if (ido) {
			sectBtn.forEach((btn) => {
				btn.classList.remove("active");
			});
			e.target.classList.add("active");

			sections.forEach((section) => {
				section.classList.remove("active");
			});
			const element = document.getElementById(ido);
			element.classList.add("active");
		}
	});

	const themeBtn = document.querySelector(".theme-btn");
	themeBtn.addEventListener("click", () => {
		document.body.classList.toggle("light-mode");
	});
}

PageTransitions();
