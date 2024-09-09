

document.addEventListener("DOMContentLoaded", function () {
    // Get references to the form and the button
    const inputForm = document.getElementById('input-form') as HTMLFormElement;
    const generateResumeButton = document.getElementById('button2') as HTMLButtonElement;

    // Add event listener to the "Generate Resume" button
    generateResumeButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default button behavior

        // Get form data
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const address = (document.getElementById('address') as HTMLInputElement).value;
        const jobTitle = (document.getElementById('job-title') as HTMLInputElement).value;
        const company = (document.getElementById('company') as HTMLInputElement).value;
        const workDurationFrom = (document.getElementById('work-duration-from') as HTMLInputElement).value;
        const workDurationTo = (document.getElementById('work-duration-to') as HTMLInputElement).value;
        const jobDescription = (document.getElementById('job-description') as HTMLInputElement).value;
        const degree = (document.getElementById('degree') as HTMLInputElement).value;
        const institution = (document.getElementById('institution') as HTMLInputElement).value;
        const graduationYear = (document.getElementById('graduation-year') as HTMLInputElement).value;
        const achievements = (document.getElementById('achievements') as HTMLInputElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value;

        // Handle image
        const fileInput:any = document.getElementById('image') as HTMLInputElement;
        const file = fileInput.files[0];
        let imageData: string | null = null;

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                imageData = reader.result as string;

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
        } else {
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

