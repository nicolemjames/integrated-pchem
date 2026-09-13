document.addEventListener("DOMContentLoaded", function () {
    const popover = document.createElement("div");
    popover.className = "custom-reference-popover";
    document.body.appendChild(popover);

    const links = document.querySelectorAll("a.reference.internal, a.footnote-reference");

    links.forEach(link => {
        const href = link.getAttribute("href");
        if (!href || !href.includes("#")) return;

        link.addEventListener("mouseenter", (e) => {
            const targetId = href.split("#")[1];
            const targetEl = document.getElementById(targetId);

            if (targetEl) {
                popover.innerHTML = targetEl.innerHTML;
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