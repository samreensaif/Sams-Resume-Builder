"use strict";
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the form and the button
    const inputForm = document.getElementById('input-form');
    const generateResumeButton = document.getElementById('button2');
    // Add event listener to the "Generate Resume" button
    generateResumeButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default button behavior
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const jobTitle = document.getElementById('job-title').value;
        const company = document.getElementById('company').value;
        const workDurationFrom = document.getElementById('work-duration-from').value;
        const workDurationTo = document.getElementById('work-duration-to').value;
        const jobDescription = document.getElementById('job-description').value;
        const degree = document.getElementById('degree').value;
        const institution = document.getElementById('institution').value;
        const graduationYear = document.getElementById('graduation-year').value;
        const achievements = document.getElementById('achievements').value;
        const skills = document.getElementById('skills').value;
        // Handle image
        const fileInput = document.getElementById('image');
        const file = fileInput.files[0];
        let imageData = null;
        if (file) {
            const reader = new FileReader();
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
                image: null // Or handle the absence of an image as needed
            }));
            // Redirect to the resume display page
            window.location.href = 'cv.html';
        }
    });
});
