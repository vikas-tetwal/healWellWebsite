document.addEventListener("DOMContentLoaded", () => {
    const includeElements = document.querySelectorAll('[data-include]');
    let loadedCount = 0;

    includeElements.forEach(el => {
        const file = el.getAttribute("data-include");

        fetch(file)
            .then(response => {
                if (!response.ok) throw new Error(`Could not load ${file}`);
                return response.text();
            })
            .then(data => {
                el.innerHTML = data;
                loadedCount++;

                console.log(`✅ Loaded: ${file}`);

                if (loadedCount === includeElements.length) {
                    console.log("✅ All includes loading ...");
                    injectSiteName();
                    injectServices();
                    injectVariables();
                    injectFooterServices();
                    applyVisibilityRules?.();
                    injectLogo?.();
                    injectHeaderContent?.();
                    injectFooterContent?.();
                    initMobileNavToggle();
                    //highlightServicesOnSubpages?.();
                    console.log("✅ All includes loaded");
                }
            })
            .catch(err => {
                console.error(`❌ Failed to load ${file}`, err);
                el.innerHTML = `<p>Error loading ${file}</p>`;
            });
    });
});






