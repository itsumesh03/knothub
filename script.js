// Add this JavaScript code to a script.js file

const smallContainers = document.querySelectorAll(".small-container");
const backgroundImages = document.querySelectorAll(".background-image");

smallContainers.forEach((container, index) => {
    container.addEventListener("click", () => {
        backgroundImages[index].scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        // Highlight the active small container
        smallContainers.forEach(c => c.classList.remove("active"));
        container.classList.add("active");
    });
});
