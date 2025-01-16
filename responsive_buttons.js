document.addEventListener("DOMContentLoaded", () => {
    // Add event listeners to all buttons
    document.querySelectorAll(".go_to").forEach(button => {
        button.addEventListener("click", () => {
            const parentDiv = button.closest(".left, .right"); // Get the parent section
            if (parentDiv) {
                parentDiv.classList.toggle("toggled"); // Toggle the class for that section
            }
        });
    });
});