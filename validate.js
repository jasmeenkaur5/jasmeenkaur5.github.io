document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        let isValid = true;

        // Validate Name
        if (!form.name.value) {
            document.getElementById("name-error").style.display = "block";
            isValid = false;
        } else {
            document.getElementById("name-error").style.display = "none";
        }

        // Validate Phone
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(form.phone.value)) {
            document.getElementById("phone-error").style.display = "block";
            isValid = false;
        } else {
            document.getElementById("phone-error").style.display = "none";
        }

        // Validate Email
        if (!form.email.value) {
            document.getElementById("email-error").style.display = "block";
            isValid = false;
        } else {
            document.getElementById("email-error").style.display = "none";
        }

        // Validate Comments
        if (!form.comments.value) {
            document.getElementById("comments-error").style.display = "block";
            isValid = false;
        } else {
            document.getElementById("comments-error").style.display = "none";
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    // Add focus event listeners to hide error messages
    form.name.addEventListener("focus", function() {
        document.getElementById("name-error").style.display = "none";
    });
    form.phone.addEventListener("focus", function() {
        document.getElementById("phone-error").style.display = "none";
    });
    form.email.addEventListener("focus", function() {
        document.getElementById("email-error").style.display = "none";
    });
    form.comments.addEventListener("focus", function() {
        document.getElementById("comments-error").style.display = "none";
    });
});
