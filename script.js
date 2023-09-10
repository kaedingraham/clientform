let currentSectionIndex = 0;
const sections = document.querySelectorAll('.form-section');
const formContainer = document.querySelector('.form-container');

sections[currentSectionIndex].classList.add('active');

function nextSection() {
    sections[currentSectionIndex].classList.remove('active');
    currentSectionIndex++;

    // Adding a 3D flip effect
    if (currentSectionIndex === sections.length - 1) {
        formContainer.style.transform = "rotateX(360deg)";
    }

    sections[currentSectionIndex].classList.add('active');
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
