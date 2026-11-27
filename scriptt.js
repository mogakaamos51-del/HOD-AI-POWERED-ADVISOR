
// HOD AI Advisor Dashboard

// Display a welcome message
console.log("Kisii University HOD Dashboard Loaded");

// AI Advisor button
const advisorButton = document.querySelector(".ai-advisor button");

advisorButton.addEventListener("click", function() {
    alert("Welcome to the Kisii University AI Academic Advisor!");
});

// Sidebar navigation
const navigationLinks = document.querySelectorAll(".sidebar nav a");

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        navigationLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

        console.log("Selected section: " + this.textContent);

    });

});
