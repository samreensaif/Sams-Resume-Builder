"use strict";
document.addEventListener("DOMContentLoaded", function (event) {
    let inputForm = document.getElementById('input-form');
    console.log(inputForm);
    // Personal Information
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let address = document.getElementById('address');
    console.log(name);
    // Work Experience
    let jobTitle = document.getElementById('job-title');
    let company = document.getElementById('company');
    let workDurationFrom = document.getElementById('work-duration-from');
    let workDurationTo = document.getElementById('work-duration-to');
    let jobDescription = document.getElementById('job-description');
    // Education
    let degree = document.getElementById('degree');
    let institution = document.getElementById('institution');
    let graduationYear = document.getElementById('graduation-year');
    // Achievements
    let achievements = document.getElementById('achievements');
    console.log(achievements);
    // Skills
    let skills = document.getElementById('skills');
    console.log(skills);
    // Add event listener to form submit
    inputForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Store form data in localStorage
        localStorage.setItem('cvData', JSON.stringify({
            name: name.value,
            email: email.value,
            phone: phone.value,
            address: address.value,
            jobTitle: jobTitle.value,
            company: company.value,
            workDurationFrom: workDurationFrom.value,
            workDurationTo: workDurationTo.value,
            jobDescription: jobDescription.value,
            degree: degree.value,
            institution: institution.value,
            graduationYear: graduationYear.value,
            achievements: achievements.value,
            skills: skills.value
        }));
        // Redirect to cv.html
        window.location.href = 'cv.html';
    });
});
