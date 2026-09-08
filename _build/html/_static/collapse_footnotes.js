document.addEventListener("DOMContentLoaded", function () {
  const selectors = [
    "section#footnotes",
    "section#references",
    ".footnotes",
    "aside.footnote-list",
    "aside.citation-list",
    "dl.glossary"
  ];

  let targets = Array.from(document.querySelectorAll(selectors.join(",")));

  targets = targets.filter((el) => {
    return !targets.some((other) => other !== el && other.contains(el));
  });

  targets.forEach((block) => {
    if (!block.textContent.trim() || block.closest("details")) {
      return;
    }

    let title = "Footnotes";
    const id = (block.id || "").toLowerCase();
    const className = (block.className || "").toLowerCase();

    if (id.includes("glossary") || className.includes("glossary")) {
      title = "Glossary Terms";
    } else if (
      id.includes("reference") ||
      id.includes("citation") ||
      className.includes("reference") ||
      className.includes("citation")
    ) {
      title = "References";
    } else if (id.includes("footnote") || className.includes("footnote")) {
      title = "Footnotes";
    }

    const details = document.createElement("details");
    details.style.margin = "1.5em 0";
    details.style.padding = "0.5em 1em";
    details.style.border = "1px solid var(--pst-color-border, #e5e5e5)";
    details.style.borderRadius = "6px";

    const summary = document.createElement("summary");
    summary.style.cursor = "pointer";
    summary.style.fontWeight = "bold";
    summary.textContent = title;

    const heading = block.querySelector("h1, h2, h3, h4");
    if (heading) {
      heading.style.display = "none";
    }

    block.parentNode.insertBefore(details, block);
    details.appendChild(summary);
    details.appendChild(block);
  });
});