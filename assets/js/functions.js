function injectSiteName() {
    const siteName = "Heal  Well"; // ✅ Your website name

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

function injectServices() {
    const services = [
        {
            name: "Nursing",
            description: "HealWell brings professional hospital-grade nursing care directly to your home, allowing patients to receive essential medical procedures in a familiar and comfortable setting.",
            icon: "fas fa-heartbeat",
            link: "nursing.html",
            delay: 100
        },
        {
            name: "Physiotherapy",
            description: "HealWell provides expert physiotherapy at home, offering personalized care to relieve pain, improve mobility, and aid recovery—all in the comfort and privacy of your space.",
            icon: "fas fa-pills",
            link: "physiotherapy.html",
            delay: 200
        },
        {
            name: "Doctor Visit / Virtual Consultation",
            description: "HealWell provides convenient medical care at home through both doctor visits and virtual consultations, offering expert support for routine check-ups or urgent needs via in-person or online options.",
            icon: "fas fa-hospital-user",
            link: "doctor.html",
            delay: 300
        },
        {
            name: "Pathology",
            description: "HealWell offers the convenience of home sample collection for lab tests, including blood and urine, allowing patients to access diagnostic services without visiting a lab.",
            icon: "fas fa-dna",
            link: "pathology.html",
            delay: 400
        },
        {
            name: "Diagnostic Services",
            description: "HealWell enables you to monitor your heart and brain health conveniently at home through their ECG and EEG services.",
            icon: "fas fa-wheelchair",
            link: "diagnostics.html",
            delay: 500
        },
        {
            name: "Vaccination@Home",
            description: "We provide at-home vaccination services for adults and infants, delivering essential immunizations in the safety of your home.",
            icon: "fas fa-notes-medical",
            link: "vaccination.html",
            delay: 600
        },
        {
            name: "Caretaker/Attendant at Home",
            description: "HealWell provides trained healthcare attendants to support daily activities and basic medical needs at home.",
            icon: "fas fa-user-nurse",
            link: "caretaker.html",
            delay: 600
        },
        {
            name: "Elderly Care",
            description: "HealWell provides personalized elder care at home to ensure comfort, medical support, and companionship.",
            icon: "fas fa-user-shield",
            link: "elderly-care.html",
            delay: 600
        }
    ];

    const container = document.getElementById("services-list");

    if (container) {
        services.forEach(service => {
            const col = document.createElement("div");
            col.className = "col-lg-3 col-md-6";
            col.setAttribute("data-aos", "fade-up");
            col.setAttribute("data-aos-delay", service.delay.toString());
            col.setAttribute("data-visible", "true");

            col.innerHTML = `
        <div class="service-item position-relative">
          <div class="icon">
            <i class="${service.icon}"></i>
          </div>
          <a href="${service.link}" class="stretched-link">
            <h3>${service.name}</h3>
          </a>
          <p>${service.description}</p>
        </div>
      `;

            container.appendChild(col);
        });
    }
}


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
    { platform: "twitter", url: "https://x.com/HealWellBharat", icon: "bi-twitter-x" },
    { platform: "facebook", url: "https://x.com/HealWellBharat", icon: "bi-facebook" },
    { platform: "instagram", url: "https://www.instagram.com/healwell.in/", icon: "bi-instagram" },
    { platform: "linkedin", url: "https://www.linkedin.com/company/healwellbharat/", icon: "bi-linkedin" }
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

function highlightServicesOnSubpages() {
    const path = window.location.pathname;

    const servicePages = [
        'nursing.html',
        'physiotherapy.html',
        'doctor.html',
        'pathology.html',
        'diagnostics.html',
        'vaccination.html',
        'caretaker.html',
        'elderly-care.html'
        // Add more service pages here if needed
    ];

    const isServicePage = servicePages.some(page =>
        path.endsWith('/' + page) || path.endsWith(page)
    );

    if (isServicePage) {
        const servicesTab = document.getElementById('services-tab');
        if (servicesTab) {
            servicesTab.classList.add('active');

            // ✅ Optional: auto-expand dropdown menu
            const dropdownMenu = servicesTab.querySelector('ul');
            if (dropdownMenu) dropdownMenu.classList.add('dropdown-active');
        }
    }
}


function applyVisibilityRules() {
    const allServices = document.querySelectorAll(".service-item");
    allServices.forEach((item, index) => {
        item.style.display = index < 8 ? "block" : "none";
    });
}