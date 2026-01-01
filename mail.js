// Jade Portfolio - Mailing JS
/* */ 

// Initializing Email JS
(function () {
    // Input public key from EmailJS
    emailjs.init("_9COLMjesryzUtV4T");
})();

// Submit Form
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Name 
    const name = document.getElementById("form-name").value.trim()
    // Email
    const email = document.getElementById("form-email").value.trim()
    // Message Send
    const message = document.getElementById("form-message").value.trim()
    // Submission feedback
    const feedback = document.getElementById("form-feedback");

    feedback.textContent = "";
    feedback.className = "form-feedback";

    // If sender did not enter name, email, or message, send a error message
    if (!name || !email || !message) {
        feedback.textContent = "Please fill in all required fields."
        feedback.classList.add("error");
        return
    }

    // Template Creation 
    const templateParam = {
        name: name, // {{name}}
        email: email, // {{email}
        message: message
    };

    emailjs
        .send(
            // service id
            "service_1jadeb",
            // template
            "template_nxbv9r8",
            templateParam
        )
        .then(() => {
            feedback.textContent = "Message has been sent successfully! 💚";
            feedback.classList.add("success");
            document.getElementById("contact-form").reset();
        })
        .catch((error) => {
            console.error("EmailJS Error: ", error);
            feedback.textContent = "Failed to send message. Please try again.";
            feedback.classList.add("error");
        });
});