window.MathJax = window.MathJax || {};
if (!window.MathJax.Hub) {
  window.MathJax.Hub = {
    Queue: function (...args) {
      if (typeof window.MathJax.typesetPromise === "function") {
        window.MathJax.typesetPromise();
      }
    }
  };
}

document.addEventListener("DOMContentLoaded", function () {
    const popover = document.createElement("div");
    popover.className = "custom-reference-popover";
    document.body.appendChild(popover);

    const links = document.querySelectorAll("a.reference.internal, a.footnote-reference");

    links.forEach(link => {
        const href = link.getAttribute("href");
        if (!href || !href.includes("#")) return;

        link.addEventListener("mouseenter", async (e) => {
            const [urlPath, targetId] = href.split("#");
            if (!targetId) return;

            let targetEl = document.getElementById(targetId);

            if (!targetEl && urlPath) {
                try {
                    const res = await fetch(urlPath);
                    const html = await res.text();
                    const doc = new DOMParser().parseFromString(html, "text/html");
                    targetEl = doc.getElementById(targetId);
                } catch (err) {
                    return;
                }
            }

            if (targetEl) {
                let content = "";

                if (targetEl.tagName === "DT") {
                    const dd = targetEl.nextElementSibling;
                    content = `<strong>${targetEl.innerText}</strong><br>${dd ? dd.innerHTML : ''}`;
                } 
                else if (targetEl.tagName === "SECTION" || targetEl.classList.contains("section")) {
                    const heading = targetEl.querySelector("h1, h2, h3, h4, h5");
                    const firstP = targetEl.querySelector("p");
                    content = `<strong>${heading ? heading.innerText : ''}</strong><br>${firstP ? firstP.innerHTML : ''}`;
                } 
                else {
                    content = targetEl.innerHTML;
                }

                popover.innerHTML = content;
                popover.style.display = "block";

                const rect = link.getBoundingClientRect();
                const popoverWidth = 400;
                const leftPos = Math.min(
                    rect.left + window.scrollX, 
                    window.innerWidth - popoverWidth - 20
                );

                popover.style.top = `${rect.bottom + window.scrollY + 6}px`;
                popover.style.left = `${Math.max(10, leftPos)}px`;
            }
        });

        link.addEventListener("mouseleave", () => {
            popover.style.display = "none";
        });
    });
});