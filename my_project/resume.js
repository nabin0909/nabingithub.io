document.addEventListener('DOMContentLoaded', function() {
    const addWorkExperienceForm = document.getElementById('add-work-experience-form');
    const addSkillsForm = document.getElementById('add-skills-form');

    addWorkExperienceForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Form validation
        const jobTitle = document.getElementById('job-title').value;
        const companyName = document.getElementById('company-name').value;
        const datesEmployment = document.getElementById('dates-employment').value;
        const location = document.getElementById('location').value;
        const responsibilities = document.getElementById('responsibilities').value;

        if (jobTitle && companyName && datesEmployment && location && responsibilities) {
            // Add work experience to the list
            const workExperienceList = document.getElementById('work-experience-list');
            const listItem = document.createElement('li');
            listItem.textContent = `${jobTitle} at ${companyName}, ${datesEmployment}, ${location}: ${responsibilities}`;
            workExperienceList.appendChild(listItem);

            // Clear form fields
            addWorkExperienceForm.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });

    addSkillsForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Form validation
        const technicalSkills = document.getElementById('technical-skills').value;
        const softSkills = document.getElementById('soft-skills').value;
        const languageProficiency = document.getElementById('language-proficiency').value;
        const certifications = document.getElementById('certifications').value;
        const creativeSkills = document.getElementById('creative-skills').value;

        if (technicalSkills && softSkills && languageProficiency && certifications && creativeSkills) {
            // Implement your logic to add skills
            // For now, just clear form fields
            addSkillsForm.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
});
