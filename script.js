document.addEventListener('DOMContentLoaded', () => {
    fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            // Main Title
            document.getElementById('main-title').textContent = data.mainTitle;

            // About Author Section
            const aboutSection = document.getElementById('about-author');
            aboutSection.innerHTML = `
                <h2>${data.aboutAuthor.heading}</h2>
                <p>${data.aboutAuthor.content}</p>
            `;

            // Emerging Trends Section
            const trendsSection = document.getElementById('emerging-trends');
            const trendsList = data.emergingTrends.list
                .map(item => `<li>${item}</li>`)
                .join('');
            trendsSection.innerHTML = `
                <h2>${data.emergingTrends.heading}</h2>
                <p>${data.emergingTrends.content}</p>
                <ul>${trendsList}</ul>
            `;

            // Tools and Technologies Section
            const toolsSection = document.getElementById('tools-technologies');
            const toolsList = data.toolsTechnologies.list
                .map(item => `<li>${item}</li>`)
                .join('');
            toolsSection.innerHTML = `
                <h2>${data.toolsTechnologies.heading}</h2>
                <p>${data.toolsTechnologies.content}</p>
                <ul>${toolsList}</ul>
            `;

            // Footer
            const footer = document.getElementById('footer');
            const footerLinks = data.footer.links
                .map(link => `<a href="${link.href}">${link.name}</a>`)
                .join(' | ');
            footer.innerHTML = `
                <p>${data.footer.content}</p>
                <p>${footerLinks}</p>
                <div>
                    <a href="${data.footer.socialMedia.twitter}" target="_blank">Twitter</a> |
                    <a href="${data.footer.socialMedia.linkedin}" target="_blank">LinkedIn</a> |
                    <a href="${data.footer.socialMedia.github}" target="_blank">GitHub</a>
                </div>
            `;
        })
        .catch(error => console.error('Error loading JSON:', error));
});
