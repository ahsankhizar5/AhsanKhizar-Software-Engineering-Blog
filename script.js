document.addEventListener("DOMContentLoaded", () => {
    // Populate Title
    document.getElementById("main-title").textContent = webpageData.title;

    // Populate Navigation Links
    const navLinks = document.getElementById("nav-links");

    // Clear existing links to avoid repetition
    navLinks.innerHTML = '';

    webpageData.navigation.forEach(nav => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = nav.link;
        a.textContent = nav.name;
        li.appendChild(a);
        navLinks.appendChild(li);
    });

    // Populate Content Sections
    const pageContent = document.getElementById("page-content");
    webpageData.content.forEach(section => {
        const sectionDiv = document.createElement("section");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        h2.textContent = section.section;
        p.textContent = section.text;
        sectionDiv.appendChild(h2);
        sectionDiv.appendChild(p);
        pageContent.appendChild(sectionDiv);
    });

    // Populate Footer
    document.getElementById("footer-text").textContent = webpageData.footer.text;

    const footerLinks = document.getElementById("footer-links");
    webpageData.footer.links.forEach(link => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = link.link;
        a.textContent = link.name;
        li.appendChild(a);
        footerLinks.appendChild(li);
    });

    const socialMedia = document.getElementById("social-media");
    webpageData.footer.socialMedia.forEach(social => {
        const a = document.createElement("a");
        a.href = social.link;
        a.textContent = social.platform;
        a.target = "_blank";
        socialMedia.appendChild(a);
        socialMedia.appendChild(document.createTextNode(" | "));
    });
    socialMedia.removeChild(socialMedia.lastChild); // Remove trailing " | "
});
