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
const socialLinks = [
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
        socialLinks.forEach(link => {
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
        socialLinks.forEach(link => {
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
