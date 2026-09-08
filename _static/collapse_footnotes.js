document.addEventListener("DOMContentLoaded", function () {
  const targets = document.querySelectorAll(
    "section#footnotes, .footnotes, aside.footnote-list, dl.glossary"
  );

  targets.forEach((block) => {
    if (block.parentElement.tagName.toLowerCase() !== "details") {
      const details = document.createElement("details");
      details.style.margin = "1.5em 0";
      details.style.padding = "0.5em 1em";
      details.style.border = "1px solid var(--pst-color-border, #e5e5e5)";
      details.style.borderRadius = "6px";

      const summary = document.createElement("summary");
      summary.style.cursor = "pointer";
      summary.style.fontWeight = "bold";
      
      if (block.classList.contains("glossary")) {
        summary.textContent = "Glossary Terms";
      } else {
        summary.textContent = "Footnotes & References";
      }

      block.parentNode.insertBefore(details, block);
      details.appendChild(summary);
      details.appendChild(block);
    }
  });
});