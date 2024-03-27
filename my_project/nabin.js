document.addEventListener('DOMContentLoaded', function () {
    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');
    const resumeLink = document.getElementById('resume-link');
    const contactLink = document.getElementById('contact-link');
    const mainContent = document.getElementById('main-content');

    homeLink.addEventListener('click', function (event) {
        event.preventDefault();
        mainContent.innerHTML = '<h1>Welcome to My Portfolio</h1><p>This is where you can find information about my latest skills and experiences.</p><p>Portfolio:</p><ul><li>Project 1</li><li>Project 2</li><li>Project 3</li></ul>';
    });

    aboutLink.addEventListener('click', function (event) {
        event.preventDefault();
        mainContent.innerHTML = '<h1>About Me</h1><p>Here you can find information about me.</p>';
    });

    resumeLink.addEventListener('click', function (event) {
        event.preventDefault();
        mainContent.innerHTML = '<h1>Resume</h1><p>Here you can find my resume.</p>';
    });

    contactLink.addEventListener('click', function (event) {
        event.preventDefault();
        mainContent.innerHTML = '<h1>Contact</h1><p>You can contact me at example@example.com</p>';
    });
});
