// add event listener to hamburger
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".hamburger").style.backgroundColor = "rgb(0, 149, 255)"
    document.querySelector(".right").style.right = "0%"
})

// add event listener to close
document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".hamburger").style.backgroundColor = "white"
    document.querySelector(".right").style.right = "-130%"
})

// Add event listener to dropdown toggle elements with class 'dropdown-toggle'
document.querySelectorAll('.dropdown-toggle').forEach(function(element) {
    element.addEventListener('click', function(event) {
        var dropdownContent = this.querySelector('.dropdown-content');
        // Toggle the display of the dropdown content
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            // Hide all dropdowns first
            document.querySelectorAll('.dropdown-content').forEach(function(dropdown) {
                dropdown.style.display = "none";
            });
            // Then display the clicked dropdown content
            dropdownContent.style.display = "block";
            document.querySelectorAll('.spec a').forEach(function(a) {
                a.classList.remove('active');
            });
            this.querySelector('.a').classList.toggle('active');
        }
        // Toggle the active class for the clicked anchor
        document.querySelectorAll('.spec .a').forEach(function(a) {
            a.classList.remove('active');
            a.style.backgroundColor = "white"; // Reset color for all anchor tags
        });
        // var clickedAnchor = this.querySelector('.a');
        // clickedAnchor.classList.toggle('active');
        // clickedAnchor.style.backgroundColor = "white"; // Change color for the clicked anchor

        // Prevent the default behavior of anchor tags
        event.preventDefault();
        clickedAnchor.style.backgroundColor = "white";
    });
});