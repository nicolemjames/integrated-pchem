selector_to_html = {"a[href=\"docs/intro-python.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1. </span>Intro to Python<a class=\"headerlink\" href=\"#intro-to-python\" title=\"Link to this heading\">#</a></h1><h2><span class=\"section-number\">1.1. </span>Functions, text, and numbers<a class=\"headerlink\" href=\"#functions-text-and-numbers\" title=\"Link to this heading\">#</a></h2><h3><span class=\"section-number\">1.1.1. </span>Writing a program to output text<a class=\"headerlink\" href=\"#writing-a-program-to-output-text\" title=\"Link to this heading\">#</a></h3><p>The first program that many people learn to write is a \u201cHello, world!\u201d program, which performs the function of outputting the phrase \u201cHello, world!\u201d</p><p>To do so, we need the <code class=\"docutils literal notranslate\"><span class=\"pre\">print()</span></code> <a class=\"reference internal\" href=\"#term-function\"><span class=\"xref std std-term\">function</span></a>. <code class=\"docutils literal notranslate\"><span class=\"pre\">print()</span></code> outputs whatever its object is. Similar to a mathematical function (<span class=\"math notranslate nohighlight\">\\(f(x)\\)</span>), the function object is placed in the parentheses (<code class=\"docutils literal notranslate\"><span class=\"pre\">print(x)</span></code>).</p>", "a[href=\"#integrated-physical-chemistry\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Integrated Physical Chemistry<a class=\"headerlink\" href=\"#integrated-physical-chemistry\" title=\"Link to this heading\">#</a></h1><p>This resource is in development for CHEM 332: Physical Chemistry I, at Reed College.</p>", "a[href=\"docs/wave-mechanics.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">4. </span>Wave Mechanics &amp; Energy States<a class=\"headerlink\" href=\"#wave-mechanics-energy-states\" title=\"Link to this heading\">#</a></h1><p>For a statistical mechanics description of atomic and molecular energy states, we need a theory for describing the motion of atomic and molecular systems. One could use classical mechanics descriptions, essentially assuming that these macroscopic relationships will hold at the atomic and molecular scale. However, one could also take note that <a class=\"reference internal\" href=\"#term-particle-wave-duality\"><span class=\"xref std std-term\">particle-wave duality</span></a> posits that matter (particularly atomic-scale matter) exibits wavelike motion.</p><p>Notably, classical physics already has established theoretical models for the motion of waves (i.e., wave mechanics). If atomic-scale particules also behave as waves\u2013and if classical wave mechanics is \u201ctrue\u201d\u2013it should be possible to describe the motion of atomic-scale systems by applying classical wave mechanics.</p>"}
skip_classes = ["headerlink", "sd-stretched-link", "exercise", "solution"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(` ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'top', maxWidth: 500, interactive: true, theme: 'light-border',
                onShow(instance) {MathJax.typesetPromise([instance.popper]).then(() => {});},
            });
        };
    };
    console.log("tippy tips loaded!");
};
