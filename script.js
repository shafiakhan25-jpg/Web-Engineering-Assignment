
/* Task 1: Form Handling and Validation */

document.getElementById("contact-form").addEventListener("submit", function(event) {

    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let birthYearText = document.getElementById("birth-year").value.trim();

    if (!/^\d{4}$/.test(birthYearText)) {
        alert("Please enter a valid four-digit birth year.");
        return;
    }

    let birthYear = parseInt(birthYearText);
    let currentYear = new Date().getFullYear();

    if (birthYear < 1900 || birthYear > currentYear) {
        alert("Please enter a valid birth year.");
        return;
    }

    document.getElementById("message").innerHTML =
        "Thank you for visiting, " + username +
        "! We will contact you at " + email + ".";

    document.getElementById("message").style.color = "green";

    /* Task 5: Age Verification */

    let age = currentYear - birthYear;

    if (age <= 18 || age >= 60) {
        document.getElementById("age-result").innerHTML =
            "Your age is " + age +
            ". You qualify for a student/senior discount!";
    } else {
        document.getElementById("age-result").innerHTML =
            "Your age is " + age + ". Thank you for contacting us!";
    }

    document.getElementById("age-result").style.color = "green";
});


/* Task 2: Highlight Menu Rows */

let rows = document.querySelectorAll(".menu-row");

rows.forEach(function(row) {

    row.addEventListener("mouseover", function() {
        row.style.backgroundColor = "#f5d7b8";
    });

    row.addEventListener("mouseout", function() {
        row.style.backgroundColor = "";
    });

});


/* Task 3: Light and Dark Mode */

document.getElementById("theme-button").addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        this.innerHTML = "☀ Light Mode";
    } else {
        this.innerHTML = "☾ Toggle Theme";
    }

});


/* Task 4: Interactive Order Total Calculator */

let foods = document.querySelectorAll(".food");

foods.forEach(function(food) {

    food.addEventListener("change", calculateTotal);

});

function calculateTotal() {

    let total = 0;

    foods.forEach(function(food) {

        if (food.checked) {
            total = total + parseInt(food.value);
        }

    });

    document.getElementById("total").innerHTML = total;

}


/* Task 6: Read More and Read Less */

document.getElementById("read-button").addEventListener("click", function() {

    let extraText = document.getElementById("extra-text");

    if (extraText.hidden) {
        extraText.hidden = false;
        this.innerHTML = "Read Less −";
    } else {
        extraText.hidden = true;
        this.innerHTML = "Read More +";
    }

});


/* Task 7: Filter Menu by Category */

let filterButtons = document.querySelectorAll(".filter-button");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let category = this.getAttribute("data-filter");

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        rows.forEach(function(row) {

            let itemCategory = row.getAttribute("data-category");

            if (category === "All" || itemCategory === category) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }

        });

    });

});


/* Task 8: Dynamic Cafe Opening Status */

function updateCafeStatus() {

    let currentHour = new Date().getHours();
    let status = document.getElementById("status");

    if (currentHour >= 8 && currentHour < 20) {

        status.innerHTML = "● We are Open!";
        status.style.color = "green";
        status.style.backgroundColor = "#e3f5e7";

    } else {

        status.innerHTML = "● Closed - Open at 8 AM";
        status.style.color = "red";
        status.style.backgroundColor = "#fde8e7";

    }

}

updateCafeStatus();


/* Task 9: Special Request Character Counter */

document.getElementById("special-notes").addEventListener("input", function() {

    let remaining = 100 - this.value.length;

    document.getElementById("char-count").innerHTML =
        remaining + " characters remaining";

    if (remaining <= 10) {
        document.getElementById("char-count").style.color = "red";
    } else {
        document.getElementById("char-count").style.color = "";
    }

});
