
document.addEventListener("DOMContentLoaded", function () {
    // Get the data from localStorage
    const cvData = JSON.parse(localStorage.getItem('cvData') || '{}');
    console.log("This is a test message");
    console.log("cvData: ", cvData);

    if (cvData) {
        // Personal Information
        const cvName = document.getElementById('cv-name');
        const cvEmail = document.getElementById('cv-email');
        const cvPhone = document.getElementById('cv-phone');
        const cvAddress = document.getElementById('cv-address');

        if (cvName) cvName.textContent = cvData.name || '';
        if (cvEmail) cvEmail.textContent = cvData.email || '';
        if (cvPhone) cvPhone.textContent = cvData.phone || '';
        if (cvAddress) cvAddress.textContent = cvData.address || '';

        // Work Experience
        const cvJobTitle = document.getElementById('cv-job-title');
        const cvCompany = document.getElementById('cv-company');
        const cvWorkDuration = document.getElementById('cv-work-duration');
        const cvJobDescription = document.getElementById('cv-job-description');

        if (cvJobTitle) cvJobTitle.textContent = cvData.jobTitle || '';
        if (cvCompany) cvCompany.textContent = cvData.company || '';
        if (cvWorkDuration) cvWorkDuration.textContent = `${cvData.workDurationFrom || ''} to ${cvData.workDurationTo || ''}`;
        if (cvJobDescription) cvJobDescription.textContent = cvData.jobDescription || '';

        // Education
        const cvDegree = document.getElementById('cv-degree');
        const cvInstitution = document.getElementById('cv-institution');
        const cvGraduationYear = document.getElementById('cv-graduation-year');

        if (cvDegree) cvDegree.textContent = cvData.degree || '';
        if (cvInstitution) cvInstitution.textContent = cvData.institution || '';
        if (cvGraduationYear) cvGraduationYear.textContent = cvData.graduationYear || '';

        // Achievements
        const cvAchievements = document.getElementById('cv-achievements');
        if (cvAchievements) cvAchievements.textContent = cvData.achievements || '';

        // Skills
        const cvSkills = document.getElementById('cv-skills');
        if (cvSkills) cvSkills.textContent = cvData.skills || '';
    }
});


//add event listener for download cv button

let downloadcv: any = document.getElementById("download-cv");
downloadcv.addEventListener("click", function () {
    window.print();
});


