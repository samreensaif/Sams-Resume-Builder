"use strict";
document.addEventListener("DOMContentLoaded", function () {
    let generateResumeButton = document.getElementById('button2');
    //  event listener for "Generate Resume" button
    generateResumeButton.addEventListener('click', function (event) {
        // Prevent the default button behavior(which may cause loss of data+refresh webpage+sending data to server. by using this ts process the data and save the data in localstorage.)
        event.preventDefault();
        // get all the form data
        let name = document.getElementById('name').value;
        console.log(name);
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        let address = document.getElementById('address').value;
        let jobTitle = document.getElementById('job-title').value;
        let company = document.getElementById('company').value;
        let workDurationFrom = document.getElementById('work-duration-from').value;
        let workDurationTo = document.getElementById('work-duration-to').value;
        let jobDescription = document.getElementById('job-description').value;
        let degree = document.getElementById('degree').value;
        let institution = document.getElementById('institution').value;
        let graduationYear = document.getElementById('graduation-year').value;
        let achievements = document.getElementById('achievements').value;
        let skills = document.getElementById('skills').value;
        // Handle image
        let fileInput = document.getElementById('image');
        let file = fileInput.files[0];
        let imageData = null;
        let defaultImage = "blankPic.jpg";
        if (file) {
            //FileReader is used to convert image in the form of string(base64)
            let reader = new FileReader();
            reader.onloadend = () => {
                imageData = reader.result;
                // Save all data to localStorage
                localStorage.setItem('cvData', JSON.stringify({
                    name,
                    email,
                    phone,
                    address,
                    jobTitle,
                    company,
                    workDurationFrom,
                    workDurationTo,
                    jobDescription,
                    degree,
                    institution,
                    graduationYear,
                    achievements,
                    skills,
                    image: imageData
                }));
                // Redirect to the resume display page
                window.location.href = 'cv.html';
            };
            reader.readAsDataURL(file); // Convert image to Base64 data URL
        }
        else {
            // If no image file is selected, save form data without the image
            localStorage.setItem('cvData', JSON.stringify({
                name,
                email,
                phone,
                address,
                jobTitle,
                company,
                workDurationFrom,
                workDurationTo,
                jobDescription,
                degree,
                institution,
                graduationYear,
                achievements,
                skills,
                image: defaultImage // if image not present then set the default pic as image on cv
            }));
            // Redirect to the resume display page
            window.location.href = 'cv.html';
        }
    });
});
// cv.ts file starts here
document.addEventListener("DOMContentLoaded", function () {
    // Get the data from localStorage
    let cvData = JSON.parse(localStorage.getItem('cvData') || '{}');
    if (cvData) {
        // Personal Information
        let cvName = document.getElementById('cv-name');
        let cvEmail = document.getElementById('cv-email');
        let cvPhone = document.getElementById('cv-phone');
        let cvAddress = document.getElementById('cv-address');
        if (cvName)
            cvName.textContent = cvData.name || '';
        if (cvEmail)
            cvEmail.textContent = cvData.email || '';
        if (cvPhone)
            cvPhone.textContent = cvData.phone || '';
        if (cvAddress)
            cvAddress.textContent = cvData.address || '';
        // Work Experience
        let cvJobTitle = document.getElementById('cv-job-title');
        let cvCompany = document.getElementById('cv-company');
        let cvWorkDuration = document.getElementById('cv-work-duration');
        let cvJobDescription = document.getElementById('cv-job-description');
        if (cvJobTitle)
            cvJobTitle.textContent = cvData.jobTitle || '';
        if (cvCompany)
            cvCompany.textContent = cvData.company || '';
        if (cvWorkDuration)
            cvWorkDuration.textContent = ` ${cvData.workDurationFrom || ''} - ${cvData.workDurationTo || ''}`;
        if (cvJobDescription)
            cvJobDescription.textContent = cvData.jobDescription || '';
        // Education
        let cvDegree = document.getElementById('cv-degree');
        let cvInstitution = document.getElementById('cv-institution');
        let cvGraduationYear = document.getElementById('cv-graduation-year');
        if (cvDegree)
            cvDegree.textContent = cvData.degree || '';
        if (cvInstitution)
            cvInstitution.textContent = cvData.institution || '';
        if (cvGraduationYear)
            cvGraduationYear.textContent = cvData.graduationYear || '';
        // Achievements
        let cvAchievements = document.getElementById('cv-achievements');
        if (cvAchievements)
            cvAchievements.textContent = cvData.achievements || '';
        // Skills
        let cvSkills = document.getElementById('cv-skills');
        if (cvSkills)
            cvSkills.textContent = cvData.skills || '';
        // Image
        let cvImage = document.getElementById('cv-image');
        if (cvImage) {
            cvImage.src = cvData.image;
        }
    }
});
//add event listener for download cv button
let downloadcv = document.getElementById("download-cv");
downloadcv.addEventListener("click", function () {
    window.print();
});
// add event listener for edit cv button
let editResumeButton = document.getElementById('edit-cv');
editResumeButton.addEventListener('click', function (event) {
    event.preventDefault();
    window.history.back();
});
