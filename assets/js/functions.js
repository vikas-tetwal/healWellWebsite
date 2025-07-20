function injectSiteName() {
    const siteName = "HealWell";

    // Update footer site name
    const siteNameEl = document.getElementById("site-name");
    if (siteNameEl) siteNameEl.textContent = siteName;

    // Update all spans with name="appName"
    document.querySelectorAll('[name="appName"]').forEach(el => {
        el.textContent = siteName;
    });

    // Optional: also support spans with class "app-name"
    document.querySelectorAll('.app-name').forEach(el => {
        el.textContent = siteName;
    });
}

// 🔢 Dynamic service starts
const services = [
    {
        name: "Nursing",
        description: "HealWell brings professional hospital-grade nursing care directly to your home...",
        icon: "fas fa-heartbeat",
        link: "nursing.html",
        delay: 100
    },
    {
        name: "Physiotherapy",
        description: "HealWell provides expert physiotherapy at home...",
        icon: "fas fa-pills",
        link: "physiotherapy.html",
        delay: 200
    },
    {
        name: "Doctor Visit",
        description: "HealWell provides convenient medical care at home through doctor visits or online options...",
        icon: "fas fa-hospital-user",
        link: "doctor-visit.html",
        delay: 300
    },
    {
        name: "Pathology",
        description: "Home sample collection for lab tests (blood, urine, etc.)...",
        icon: "fas fa-dna",
        link: "pathology.html",
        delay: 400
    },
    {
        name: "Diagnostic Services",
        description: "Monitor your heart and brain health at home with ECG and EEG services...",
        icon: "fas fa-wheelchair",
        link: "diagnostics.html",
        delay: 500
    },
    {
        name: "Vaccination@Home",
        description: "Vaccination services for adults and infants, delivered at your doorstep...",
        icon: "fas fa-notes-medical",
        link: "vaccination.html",
        delay: 600
    },
    {
        name: "Caretaker at Home",
        description: "Trained attendants to assist with daily needs and basic medical care at home...",
        icon: "fas fa-user-nurse",
        link: "caretaker.html",
        delay: 600
    },
    {
        name: "Elderly Care",
        description: "Compassionate elder care solutions at home for wellness and support...",
        icon: "fas fa-user-shield",
        link: "elderly-care.html",
        delay: 600
    }
];

function injectServices() {
    const servicesContainer = document.getElementById("services-list");     // For homepage cards
    const menuContainer = document.getElementById("services-menu");         // For nav dropdown

    services.forEach(service => {
        // ✅ Inject into Services Dropdown Menu (if exists)
        if (menuContainer) {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = service.link;
            a.textContent = service.name;
            li.appendChild(a);
            menuContainer.appendChild(li);
        }

        // ✅ Inject into Services Cards on Homepage (if exists)
        if (servicesContainer) {
            const col = document.createElement("div");
            col.className = "col-lg-3 col-md-6";
            col.setAttribute("data-aos", "fade-up");
            col.setAttribute("data-aos-delay", service.delay.toString());
            col.setAttribute("data-visible", "true");

            col.innerHTML = `
        <div class="service-item position-relative">
          <div class="icon"><i class="${service.icon}"></i></div>
          <a href="${service.link}" class="stretched-link">
            <h3>${service.name}</h3>
          </a>
          <p>${service.description}</p>
        </div>
      `;
            servicesContainer.appendChild(col);
        }
    });
}

function injectFooterServices() {
    const services = [
        { name: "Nursing", link: "nursing.html" },
        { name: "Physiotherapy", link: "physiotherapy.html" },
        { name: "Doctor Visit", link: "doctor.html" },
        { name: "Pathology", link: "pathology.html" },
        { name: "Diagnostic Services", link: "diagnostics.html" },
        { name: "Vaccination@Home", link: "vaccination.html" },
        { name: "Caretaker at Home", link: "caretaker.html" },
        { name: "Elderly Care", link: "elderly-care.html" }
    ];

    const colLen = Math.ceil(services.length / 2);
    const col1 = services.slice(0, colLen);
    const col2 = services.slice(colLen);

    const row = document.getElementById("footer-services-row");
    if (!row) return;
    row.innerHTML = '';

    [col1, col2].forEach((col, idx) => {
        const colDiv = document.createElement("div");
        colDiv.className = "col-6"; // For 2 columns side by side
        const ul = document.createElement("ul");
        ul.className = "list-unstyled mb-0";
        col.forEach(service => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = service.link;
            a.textContent = service.name;
            li.appendChild(a);
            ul.appendChild(li);
        });
        colDiv.appendChild(ul);
        row.appendChild(colDiv);
    });
}

function injectVariables() {
    const locationEl = document.getElementById("addressLine1");
    if (locationEl) {
        locationEl.textContent = contact.addressLine1;
    }
    const locationEl2 = document.getElementById("addressLine2");
    if (locationEl2) {
        locationEl2.textContent = contact.addressLine2;
    }
    const phoneNumber = document.getElementById("phonenumber");
    if (phoneNumber) {
        phoneNumber.textContent = contact.phone.display;
    }
    const emailAdd = document.getElementById("emailAd");
    if (emailAdd) {
        emailAdd.textContent = contact.email;
    }
}

// 🔢 Dynamic service ends


// 🔢 Dynamic contact data
const contact = {
    addressLine1: "23, Gagan Vihar, (Basement)",
    addressLine2: "Near. R.G. Stone Hospital",
    addressLine3: "Delhi 110051",

    email: "example@healwell.in",
    phone: {
        display: "+91 7011 846534",
        tel: "+91 7011 846534"
    }
};

// 🌐 Social media links
const functions = [
    {platform: "twitter", url: "https://x.com/HealWellBharat", icon: "bi-twitter-x"},
    {platform: "facebook", url: "https://x.com/HealWellBharat", icon: "bi-facebook"},
    {platform: "instagram", url: "https://www.instagram.com/healwell.in/", icon: "bi-instagram"},
    {platform: "linkedin", url: "https://www.linkedin.com/company/healwellbharat/", icon: "bi-linkedin"}
];

function injectHeaderContent() {
    // 📧 Email block (in topbar)
    const emailBlock = document.getElementById("emailBlock");
    if (emailBlock) {
        const icon = document.createElement("i");
        icon.className = "bi bi-envelope d-flex align-items-center";

        const emailLink = document.createElement("a");
        emailLink.href = `mailto:${contact.email}`;
        emailLink.textContent = contact.email;
        emailLink.className = "ms-2";
        emailLink.style.color = "inherit";
        emailLink.style.textDecoration = "none";

        icon.appendChild(emailLink);
        emailBlock.appendChild(icon);
    }

    // ☎️ Phone block (in topbar)
    const phoneBlock = document.getElementById("phoneBlock");
    if (phoneBlock) {
        const icon = document.createElement("i");
        icon.className = "bi bi-phone d-flex align-items-center";

        const phoneLink = document.createElement("a");
        phoneLink.href = `tel:${contact.phone.tel}`;
        phoneLink.textContent = contact.phone.display;
        phoneLink.className = "ms-2";
        phoneLink.style.color = "inherit";
        phoneLink.style.textDecoration = "none";

        icon.appendChild(phoneLink);
        phoneBlock.appendChild(icon);
    }

    // 🌐 Social links (in topbar)
    const socialContainer = document.getElementById("social-links");
    if (socialContainer) {
        functions.forEach(link => {
            const a = document.createElement("a");
            a.href = link.url;
            a.className = link.platform + " ms-2";
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.setAttribute('aria-label', link.platform);

            const icon = document.createElement("i");
            icon.className = `bi ${link.icon}`;
            a.appendChild(icon);
            socialContainer.appendChild(a);
        });
    }
}


function injectFooterContent() {

    // 📍 Inject footer contact info
    const footerContact = document.getElementById("footer-contact");
    if (footerContact) {
        footerContact.innerHTML = `
      <p>${contact.addressLine1}</p>
      <p>${contact.addressLine2}</p>
      <p>${contact.addressLine3}</p>
      <p class="mt-3"><strong>Phone:</strong> <a href="tel:${contact.phone.tel}" style="color: inherit; text-decoration: none;">${contact.phone.display}</a></p>
      <p><strong>Email:</strong> <a href="mailto:${contact.email}" style="color: inherit; text-decoration: none;">${contact.email}</a></p>
    `;
    }

    // 🌐 Inject footer social links
    const footerSocial = document.getElementById("footer-social-links");
    if (footerSocial) {
        functions.forEach(link => {
            const a = document.createElement("a");
            a.href = link.url;
            a.className = "me-3"; // space between icons
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.setAttribute("aria-label", link.platform);

            const icon = document.createElement("i");
            icon.className = `bi ${link.icon}`;

            a.appendChild(icon);
            footerSocial.appendChild(a);
        });
    }
}

function injectLogo() {
    const logoSrc = "assets/img/HealWell_Logo.png";
    const logoContainer = document.getElementById("logo-container");

    if (logoContainer) {
        const logoLink = document.createElement("a");
        logoLink.href = "index.html";

        const logoImg = document.createElement("img");
        logoImg.src = logoSrc;
        logoImg.alt = "HealWell Logo";
        logoImg.style.marginTop = "15px";
        logoImg.style.height = "40px";

        logoLink.appendChild(logoImg);
        logoContainer.appendChild(logoLink);
    }
}

function applyVisibilityRules() {
    const allServices = document.querySelectorAll(".service-item");
    allServices.forEach((item, index) => {
        item.style.display = index < 8 ? "block" : "none";
    });
}