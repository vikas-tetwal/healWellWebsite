
 /**
   * This is for service visibility true or false
   */

function applyVisibilityRules() {
  const allServices = document.querySelectorAll(".service-item");
  allServices.forEach((item, index) => {
    item.style.display = index < 8 ? "block" : "none";
  });
}

 /**
   * call this function in the browser to show and hide other services
   */

function setServiceVisibility(index, show) {
  const items = document.querySelectorAll('.col-lg-3');
  if (items[index]) {
    items[index].style.display = show ? "block" : "none";
    items[index].setAttribute("data-visible", show ? "true" : "false");
  }
}

 /**
   */

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
                     console.log("✅ All includes loaded");
                     applyVisibilityRules?.();
                     injectLogo?.();
                     injectHeaderContent?.();
                     injectFooterContent?.();
                 }
             })
             .catch(err => {
                 console.error(`❌ Failed to load ${file}`, err);
                 el.innerHTML = `<p>Error loading ${file}</p>`;
             });
     });
 });






