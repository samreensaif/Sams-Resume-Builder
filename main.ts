document.addEventListener("DOMContentLoaded", function () {
    const myForm = document.getElementById('input-form') as HTMLFormElement;

    myForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Gather all form data
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

        const fileInput = document.getElementById('image') as HTMLInputElement;
        const file = fileInput.files?.[0];
        const defaultImage = "blankPic.jpg";

        // Function to store data in localStorage and generate resume URL
        const storeData = (image: string) => {
            const cvData = {
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
                image
            };

            localStorage.setItem('cvData', JSON.stringify(cvData));
            const username = name ? name.toLowerCase().replace(/\s+/g, '-') : 'user'; // Generate username from the name
            const baseUrl = 'https://http://127.0.0.1:5500/cv.html'; // Your local base URL (adjust if using a deployed site)
            const uniqueResumeUrl = `${baseUrl}?user=${username}`; // Create unique URL

            // Redirect to the resume page with the URL
            window.location.href = 'cv.html';
        };

        // Handle image file and store data
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                storeData(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            storeData(defaultImage); // Use default image if none is uploaded
        }
    });
});

// Handling the CV page population on load
window.addEventListener("load", function () {
    const cvData = JSON.parse(localStorage.getItem('cvData') || '{}');

    if (cvData) {
        document.getElementById('cv-name')!.textContent = cvData.name || '';
        document.getElementById('cv-email')!.textContent = cvData.email || '';
        document.getElementById('cv-phone')!.textContent = cvData.phone || '';
        document.getElementById('cv-address')!.textContent = cvData.address || '';
        document.getElementById('cv-job-title')!.textContent = cvData.jobTitle || '';
        document.getElementById('cv-company')!.textContent = cvData.company || '';
        document.getElementById('cv-work-duration')!.textContent = `${cvData.workDurationFrom || ''} - ${cvData.workDurationTo || ''}`;
        document.getElementById('cv-job-description')!.textContent = cvData.jobDescription || '';
        document.getElementById('cv-degree')!.textContent = cvData.degree || '';
        document.getElementById('cv-institution')!.textContent = cvData.institution || '';
        document.getElementById('cv-graduation-year')!.textContent = cvData.graduationYear || '';
        document.getElementById('cv-achievements')!.textContent = cvData.achievements || '';
        document.getElementById('cv-skills')!.textContent = cvData.skills || '';
        (document.getElementById('cv-image') as HTMLImageElement).src = cvData.image || 'blankPic.jpg';
    }

    // Download CV functionality
    document.getElementById("download-cv")?.addEventListener("click", function () {
        window.print();
    });

    // Edit CV functionality
    document.getElementById('edit-cv')?.addEventListener('click', function (event) {
        event.preventDefault();
        window.history.back();
    });

    // Event listener for copying resume link
    document.getElementById('copyLinkBtn')!.addEventListener('click', () => {
        const resumeLink = document.getElementById('resumeLink') as HTMLAnchorElement;
        const uniqueResumeUrl = resumeLink.getAttribute('href') ?? '';

        navigator.clipboard.writeText(uniqueResumeUrl).then(() => {
            alert('Resume link copied to clipboard!');
        });
    });
});
