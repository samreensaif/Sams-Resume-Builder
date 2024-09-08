
document.addEventListener("DOMContentLoaded", function (event) {

    let inputForm: any = document.getElementById('input-form');
    console.log(inputForm)
    // Personal Information
    let name: any = document.getElementById('name');
    let email: any = document.getElementById('email');
    let phone: any = document.getElementById('phone');
    let address: any = document.getElementById('address');
    console.log(name)

    // Work Experience
    let jobTitle: any = document.getElementById('job-title');
    let company: any = document.getElementById('company');
    let workDurationFrom: any = document.getElementById('work-duration-from');
    let workDurationTo: any = document.getElementById('work-duration-to');
    let jobDescription: any = document.getElementById('job-description');

    // Education
    let degree: any = document.getElementById('degree');
    let institution: any = document.getElementById('institution');
    let graduationYear: any = document.getElementById('graduation-year');

    // Achievements
    let achievements: any = document.getElementById('achievements');
    console.log(achievements)

    // Skills
    let skills: any = document.getElementById('skills');
    console.log(skills)

    // Add event listener to form submit
    inputForm.addEventListener('submit', function (event: any) {
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


